import { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
import useAxiosPublic from '../hooks/useAxios';
import { Loader } from 'lucide-react';

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [myServices, setMyServices] = useState([]);
    const [editingService, setEditingService] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axiosPublic
                .get(`/my-services?email=${user.email}`)
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
            console.error('Update failed', err);
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
            console.error('Delete failed', err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
            <Navbar />

            <div className="flex-grow px-4 sm:px-6 lg:px-10 py-16 max-w-7xl mx-auto roboto">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl mt-5 font-bold text-green-700 mb-8 text-center dark:text-white">
                    My Services
                </h1>

                <div className="overflow-x-auto bg-white bg-opacity-80 rounded-md shadow-2xl dark:bg-gray-900/70">
                    <table className="min-w-full table-auto border border-green-300 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 dark:text-white dark:border-green-700">
                        <thead className="bg-green-200 dark:bg-green-900">
                            <tr>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Title</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Category</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Price</th>
                                <th className="p-3 md:p-5 lg:p-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myServices.map(service => (
                                <tr key={service._id} className="border-t border-green-300 dark:border-green-800">
                                    <td className="p-3 md:p-5 lg:p-6">{service.title}</td>
                                    <td className="p-3 md:p-5 lg:p-6">{service.category}</td>
                                    <td className="p-3 md:p-5 lg:p-6">${service.price}</td>
                                    <td className="p-3 md:p-5 lg:p-6 flex flex-col sm:flex-row sm:space-x-2 md:space-x-4">
                                        <button
                                            onClick={() => setEditingService(service)}
                                            className="bg-yellow-500 py-1 hover:bg-yellow-600 text-white px-4 rounded-full text-sm md:text-md lg:text-lg mb-2 sm:mb-0 shadow-md"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => {
                                                setDeleteId(service._id);
                                                setShowDeleteModal(true);
                                            }}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm md:text-md lg:text-lg shadow-md"
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
                <div className="fixed inset-0 roboto flex items-center justify-center z-50 px-4  bg-opacity-50 dark:bg-opacity-70">
                    <form onSubmit={handleUpdate} className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl dark:bg-gray-900">
                        <h2 className="text-green-700 text-center text-2xl sm:text-3xl font-bold mb-4 dark:text-green-300">Update Service</h2>
                        <input
                            name="title"
                            defaultValue={editingService.title}
                            placeholder="Title"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <input
                            name="category"
                            defaultValue={editingService.category}
                            placeholder="Category"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <input
                            name="price"
                            type="number"
                            defaultValue={editingService.price}
                            placeholder="Price"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <textarea
                            name="description"
                            defaultValue={editingService.description}
                            placeholder="Description"
                            className="w-full mb-4 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={() => setEditingService(null)}
                                className="text-white bg-red-600 btn px-4 py-2 rounded-md border border-gray-500 shadow-md"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 btn hover:bg-green-500 px-4 py-2 rounded-md text-white shadow-md"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {showDeleteModal && (
                <div className="fixed inset-0 roboto flex items-center justify-center z-50 px-4 bg-opacity-50 dark:bg-opacity-70">
                    <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl dark:bg-gray-900">
                        <h2 className="text-red-600 text-lg font-semibold mb-4 dark:text-red-400">Are you sure you want to delete?</h2>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="text-gray-900 bg-gray-200 btn text-lg px-4 py-2 rounded-md border border-gray-500 shadow-md dark:bg-gray-800 dark:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="bg-red-600 hover:bg-red-500 btn text-lg px-4 py-2 rounded-md text-white shadow-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyServices;