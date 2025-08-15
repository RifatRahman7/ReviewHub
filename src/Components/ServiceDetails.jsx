import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { toast } from 'react-toastify';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthContext';
import Loader from './Loader';

const ServiceDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [service, setService] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axiosPublic.get(`/services/${id}`)
            .then(res => setService(res.data))
            .catch(console.error);

        axiosPublic.get(`/reviews/${id}`)
            .then(res => setReviews(res.data))
            .catch(console.error);
    }, [id, axiosPublic]);

    const handleAddReview = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error('Please log in to add a review');
            return;
        }

        const review = {
            serviceId: id,
            userEmail: user.email,
            userName: user.displayName || 'Anonymous',
            userPhoto: user.photoURL || '',
            text: reviewText,
            rating,
            date: new Date().toISOString()
        };

        try {
            const res = await axiosPublic.post('/reviews', review);
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Review added successfully.',
                    icon: 'success',
                    confirmButtonColor: '#16a34a',
                    confirmButtonText: 'OK'
                });
                setReviews([review, ...reviews]);
                setReviewText('');
                setRating(0);
            }
        } catch (err) {
            console.error(err);
            toast.error('Failed to add review');
        }
    };

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
                <Navbar />
                <div className="flex-grow px-4 py-16 max-w-4xl mx-auto roboto">
                    <div className="mb-6">
                        <Link
                            to="/services"
                            className="inline-block bg-green-700 hover:bg-green-600 transition rounded-full py-2 px-6 text-white font-semibold border border-green-900 dark:bg-gray-800 dark:hover:bg-gray-900 shadow-md"
                        >
                            ← All Services
                        </Link>
                    </div>
                    <h1 className="dark:text-white">Add service to see!</h1>
                    <Loader />
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
            <Navbar />
            <div className="flex-grow px-4 py-16 max-w-4xl mx-auto roboto">
                <h1 className="text-4xl text-green-700 flex justify-center font-bold p-5 dark:text-white">Service Details</h1>

                <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl mb-10 shadow-2xl dark:bg-gray-900/70 dark:border dark:border-green-700">
                    <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-md mb-4 border border-green-600 dark:border-green-700" />
                    <h1 className="text-3xl font-bold text-green-700 mb-2 dark:text-green-400">{service.title}</h1>
                    <p className="text-gray-700 mb-4 dark:text-gray-300">{service.description}</p>
                    <div className="flex justify-between mb-2 text-green-600 font-semibold dark:text-green-400">
                        <span>Category: {service.category}</span>
                        <span>Price: ${service.price}</span>
                    </div>
                </div>

                {/* Back to All Services button */}
                <div className="flex justify-center mb-4">
                    <Link
                        to="/services"
                        className="inline-block bg-green-700 hover:bg-green-600 transition rounded-full py-2 px-6 text-white font-semibold border border-green-900 dark:bg-gray-800 dark:hover:bg-gray-900 shadow-md"
                    >
                        ← All Services
                    </Link>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-green-600 mb-4 dark:text-green-400">Reviews ({reviews.length})</h2>
                    {reviews.map((r, idx) => {
                        const numericRating = Number(r.rating) || 0;
                        return (
                            <div key={idx} className="bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-lg mb-3 flex space-x-4 shadow-md dark:bg-gray-900/70 dark:border dark:border-green-700">
                                <img src={r.userPhoto} alt={r.userName} className="w-10 h-10 rounded-full border-2 border-green-600 dark:border-green-500" />
                                <div>
                                    <div className="text-green-700 font-semibold">{r.userName}</div>
                                    <div className="text-yellow-500 mb-1">
                                        <Rating
                                            initialRating={numericRating}
                                            readonly
                                            fractions={2}
                                            emptySymbol={<span className="text-xl">☆</span>}
                                            fullSymbol={<span className="text-xl text-yellow-400">★</span>}
                                        />
                                    </div>
                                    <div className="text-gray-700 text-sm dark:text-gray-300">{r.text}</div>
                                    <div className="text-gray-500 text-xs mt-1 dark:text-gray-400">{new Date(r.date).toLocaleString()}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {user && (
                    <form onSubmit={handleAddReview} className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-2xl dark:bg-gray-900/70">
                        <h3 className="text-xl font-bold text-green-700 mb-4 dark:text-green-400">Add a Review</h3>
                        <textarea
                            value={reviewText}
                            onChange={e => setReviewText(e.target.value)}
                            className="w-full bg-white bg-opacity-50 border border-green-600 rounded-md px-3 py-2 text-gray-900 mb-3 dark:bg-gray-800 dark:border-green-700 dark:text-white"
                            rows="3"
                            placeholder="Write your review..."
                            required
                        />
                        <div className="flex items-center mb-4 space-x-3">
                            <span className="text-green-700">Rating:</span>
                            <Rating
                                initialRating={rating}
                                onChange={setRating}
                                fractions={2}
                                emptySymbol={<span className="text-3xl cursor-pointer">☆</span>}
                                fullSymbol={<span className="text-3xl text-yellow-400 cursor-pointer">★</span>}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-600 btn transition rounded-full py-2 px-6 text-white font-semibold dark:bg-gray-800 dark:hover:bg-gray-900"
                        >
                            Add Review
                        </button>
                    </form>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;