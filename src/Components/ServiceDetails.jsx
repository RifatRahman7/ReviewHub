import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { toast } from 'react-toastify';
import Rating from 'react-rating';
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
                toast.success('Review added!');
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
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black">
                <Navbar />
                <h1>Add service to see!</h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black text-white">
            <Navbar />
            <div className="flex-grow px-4 py-16 max-w-4xl mx-auto roboto">
                <div className="bg-black bg-opacity-60 backdrop-blur-md p-6 rounded-lg mb-10">
                    <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-md mb-4 border border-green-700" />
                    <h1 className="text-3xl font-bold text-green-300 mb-2">{service.title}</h1>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex justify-between mb-4 text-green-400 font-semibold">
                        <span>Category: {service.category}</span>
                        <span>Price: ${service.price}</span>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">Reviews ({reviews.length})</h2>
                    {reviews.map((r, idx) => {
                        const numericRating = Number(r.rating) || 0;
                        return (
                            <div key={idx} className="bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-lg mb-3 flex space-x-4">
                                <img src={r.userPhoto} alt={r.userName} className="w-10 h-10 rounded-full border-2 border-green-500" />
                                <div>
                                    
                                    <div className="text-green-300 font-semibold">{r.userName}</div>
                                    <div className="text-yellow-400 mb-1">
                                        <Rating
                                            initialRating={numericRating}
                                            readonly
                                            fractions={2}
                                            emptySymbol={<span className="text-xl">☆</span>}
                                            fullSymbol={<span className="text-xl text-yellow-400">★</span>}
                                        />
                                    </div>
                                    <div className="text-gray-300 text-sm">{r.text}</div>
                                    <div className="text-gray-500 text-xs mt-1">{new Date(r.date).toLocaleString()}</div>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {user && (
                    <form onSubmit={handleAddReview} className="bg-black bg-opacity-60 backdrop-blur-md p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-green-300 mb-4">Add a Review</h3>
                        <textarea
                            value={reviewText}
                            onChange={e => setReviewText(e.target.value)}
                            className="w-full bg-black bg-opacity-50 border border-green-600 rounded-md px-3 py-2 text-white mb-3"
                            rows="3"
                            placeholder="Write your review..."
                            required
                        />
                        <div className="flex items-center mb-4 space-x-3">
                            <span className="text-green-300">Rating:</span>
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
                            className="bg-green-700 hover:bg-green-600 transition rounded-full py-2 px-6 text-white font-semibold"
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
