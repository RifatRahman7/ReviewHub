import { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
import useAxiosPublic from '../hooks/useAxios';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [myServices, setMyServices] = useState([]);
    const [editingService, setEditingService] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axiosPublic.get(`/my-services?email=${user.email}`)
                .then(res => setMyServices(res.data))
                .catch(err => console.error(err));
        }
    }, [user, axiosPublic]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedService = {
            title: form.title.value,
            category: form.category.value,
            price: parseFloat(form.price.value),
            description: form.description.value
        };

        try {
            const res = await axiosPublic.patch(`/services/${editingService._id}`, updatedService);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Updated!',
                    text: 'Service has been updated successfully.',
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                    confirmButtonText: 'OK'
                });
                setEditingService(null);
                const updated = myServices.map(s => s._id === editingService._id ? { ...s, ...updatedService } : s);
                setMyServices(updated);
            }
        } catch (err) {
            toast.error('Update failed');
        }
    };

    const confirmDelete = async () => {
    try {
        const res = await axiosPublic.delete(`/services/${deleteId}`);
        if (res.data.deletedCount > 0) {
            Swal.fire({
                title: 'Deleted!',
                text: 'Service has been deleted successfully.',
                icon: 'success',
                confirmButtonColor: '#16a34a',
                confirmButtonText: 'OK'
            });
            setMyServices(myServices.filter(s => s._id !== deleteId));
            setShowDeleteModal(false);
        }
    } catch (err) {
        toast.error('Delete failed');
    }
};
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black text-white">
            <Navbar />

            <div className="flex-grow px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto roboto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-5 font-bold text-green-400 mb-8 text-center">My Services</h1>

                <div className="overflow-x-auto bg-black bg-opacity-50 rounded-md shadow-md">
                    <table className="min-w-full table-auto border border-green-700 text-sm sm:text-base md:text-lg lg:text-xl text-white">
                        <thead className="bg-green-900">
                            <tr>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Title</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Category</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Price</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myServices.map(service => (
                                <tr key={service._id} className="border-t border-green-800">
                                    <td className="p-3 md:p-5 lg:p-6">{service.title}</td>
                                    <td className="p-3 md:p-5 lg:p-6">{service.category}</td>
                                    <td className="p-3 md:p-5 lg:p-6">${service.price}</td>
                                    <td className="p-3 md:p-5 lg:p-6 flex flex-col sm:flex-row sm:space-x-2 md:space-x-4">
                                        <button
                                            onClick={() => setEditingService(service)}
                                            className="bg-yellow-500 py-1 hover:bg-yellow-600 text-white px-4 rounded-full text-sm md:text-md lg:text-lg mb-2 sm:mb-0"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => {
                                                setDeleteId(service._id);
                                                setShowDeleteModal(true);
                                            }}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm md:text-md lg:text-lg"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
            {editingService && (
                <div className="fixed inset-0 roboto flex items-center justify-center z-50 px-4">
                    <form onSubmit={handleUpdate} className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-green-300 text-center text-2xl sm:text-3xl font-bold mb-4">Update Service</h2>
                        <input name="title" defaultValue={editingService.title} placeholder="Title"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-black border border-green-600 text-white" />
                        <input name="category" defaultValue={editingService.category} placeholder="Category"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-black border border-green-600 text-white" />
                        <input name="price" type="number" defaultValue={editingService.price} placeholder="Price"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-black border border-green-600 text-white" />
                        <textarea name="description" defaultValue={editingService.description} placeholder="Description"
                            className="w-full mb-4 px-3 py-2 rounded-md bg-black border border-green-600 text-white" />
                        <div className="flex justify-end space-x-2">
                            <button type="button" onClick={() => setEditingService(null)} className="text-white bg-red-600 btn px-4 py-2 rounded-md border border-gray-500">Cancel</button>
                            <button type="submit" className="bg-green-600 btn hover:bg-green-500 px-4 py-2 rounded-md text-white">Save</button>
                        </div>
                    </form>
                </div>
            )}
            {showDeleteModal && (
                <div className="fixed inset-0 roboto flex items-center justify-center z-50 px-4">
                    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-red-400 text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
                        <div className="flex justify-end space-x-3">
                            <button onClick={() => setShowDeleteModal(false)} className="text-white bg-gray-900 btn text-lg px-4 py-2 rounded-md border border-gray-500">Cancel</button>
                            <button onClick={confirmDelete} className="bg-red-600 hover:bg-red-500 btn text-lg px-4 py-2 rounded-md text-white">Delete</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyServices;
