import { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Rating from 'react-rating';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';
import useAxiosPublic from '../hooks/useAxios';
import Loader from './Loader';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const [myReviews, setMyReviews] = useState([]);
    const [serviceTitles, setServiceTitles] = useState({});
    const [editingReview, setEditingReview] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axiosPublic.get(`/user-reviews?email=${user.email}`)
                .then(res => setMyReviews(res.data))
                .catch(err => console.error(err));
        }
    }, [user, axiosPublic]);

    useEffect(() => {
        const fetchTitles = async () => {
            const ids = [...new Set(myReviews.map(r => r.serviceId))];
            const titlesObj = {};
            await Promise.all(ids.map(async id => {
                try {
                    const res = await axiosPublic.get(`/services/${id}`);
                    titlesObj[id] = res.data.title;
                } catch {
                    titlesObj[id] = 'Unknown Service';
                }
            }));
            setServiceTitles(titlesObj);
        };
        if (myReviews.length > 0) fetchTitles();
    }, [myReviews, axiosPublic]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedReview = {
            text: form.text.value,
            rating: parseFloat(form.rating.value)
        };

        try {
            const res = await axiosPublic.patch(`/reviews/${editingReview._id}`, updatedReview);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Updated!',
                    text: 'Review has been updated successfully.',
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                    confirmButtonText: 'OK'
                });
                const updatedList = myReviews.map(r => r._id === editingReview._id ? { ...r, ...updatedReview } : r);
                setMyReviews(updatedList);
                setEditingReview(null);
            }
        } catch (err) {
            toast.error('Failed to update');
        }
    };

    const confirmDelete = async () => {
        try {
            const res = await axiosPublic.delete(`/reviews/${deleteId}`);
            if (res.data.deletedCount > 0) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Review has been deleted successfully.',
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                    confirmButtonText: 'OK'
                });
                setMyReviews(myReviews.filter(r => r._id !== deleteId));
                setShowDeleteModal(false);
            }
        } catch (err) {
            toast.error('Failed to delete');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 flex flex-col dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
            <Navbar />

            <div className="flex-grow px-4 py-16 max-w-5xl mx-auto roboto">
                <h1 className="text-4xl font-bold text-center text-green-700 mb-8 mt-5 dark:text-white">My Reviews</h1>

                {myReviews.length === 0 ? (
                    <Loader />
                ) : (
                    <div className="space-y-6">
                        {myReviews.map(review => (
                            <div
                                key={review._id}
                                className="bg-white bg-opacity-80 hover:scale-105 transition-transform duration-300 rounded-md p-5 border border-green-300 shadow-md dark:bg-gray-900/70 dark:border-green-700"
                            >
                                <div className="mb-2 text-green-700 font-bold text-lg dark:text-green-400">
                                    {serviceTitles[review.serviceId] || 'Title...'}
                                </div>
                                <div className="mb-2 flex items-center gap-2">
                                    <span className="text-yellow-500 font-semibold">Rating:</span>
                                    <Rating
                                        initialRating={review.rating}
                                        readonly
                                        emptySymbol={<span className="text-xl">☆</span>}
                                        fullSymbol={<span className="text-xl text-yellow-400">★</span>}
                                    />
                                    <span className="text-green-600 text-sm dark:text-green-300">{review.rating}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-green-700 font-semibold dark:text-green-400">Review:</span>
                                    <p className="text-gray-700 dark:text-gray-300">{review.text}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setEditingReview(review)}
                                        className="btn px-4 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-full text-sm text-white shadow-md"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDeleteId(review._id);
                                            setShowDeleteModal(true);
                                        }}
                                        className="btn px-4 py-1 bg-red-600 hover:bg-red-700 rounded-full text-sm text-white shadow-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Update Modal */}
            {editingReview && (
                <div className="fixed inset-0 flex justify-center items-center z-50 px-4 bg-opacity-80 dark:bg-opacity-70">
                    <form onSubmit={handleUpdate} className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl dark:bg-gray-900">
                        <h3 className="text-xl font-bold text-green-700 mb-4 dark:text-green-300">Update Review</h3>

                        <textarea
                            name="text"
                            defaultValue={editingReview.text}
                            required
                            rows="3"
                            className="w-full mb-3 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <input
                            name="rating"
                            type="number"
                            step="0.5"
                            min="0"
                            max="5"
                            defaultValue={editingReview.rating}
                            required
                            className="w-full mb-4 px-3 py-2 rounded-md bg-gray-100 border border-green-600 text-gray-900 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                        />
                        <div className="flex justify-end gap-2">
                            <button type="button" onClick={() => setEditingReview(null)} className="btn px-4 py-2 bg-red-600 text-white rounded-md shadow-md">Cancel</button>
                            <button type="submit" className="btn px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 shadow-md">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50 px-4  bg-opacity-80 dark:bg-opacity-70">
                    <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-2xl dark:bg-gray-900">
                        <h3 className="text-lg text-red-600 font-semibold mb-4 dark:text-red-400">Confirm Deletion?</h3>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setShowDeleteModal(false)} className="btn px-4 py-2 border border-gray-500 text-gray-900 dark:bg-gray-800 dark:text-white shadow-md">Cancel</button>
                            <button onClick={confirmDelete} className="btn px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 shadow-md">Delete</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default MyReviews;