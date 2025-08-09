import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import useAxiosPublic from '../hooks/useAxios';
import Loader from './Loader';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('default'); // NEW
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axiosPublic.get('/services');
                setServices(res.data);
                setFilteredServices(res.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, [axiosPublic]);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        let filtered = services.filter(service =>
            service.title?.toLowerCase().includes(query) ||
            service.category?.toLowerCase().includes(query) ||
            service.company?.toLowerCase().includes(query)
        );

        // Sorting by price
        if (sortOption === 'priceAsc') {
            filtered = [...filtered].sort(
                (a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0)
            );
        } else if (sortOption === 'priceDesc') {
            filtered = [...filtered].sort(
                (a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0)
            );
        }

        setFilteredServices(filtered);
    }, [searchQuery, services, sortOption]); // include sortOption

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black">
            <Navbar />
            <div className="flex-grow px-4 py-20 max-w-7xl mx-auto roboto">
                <h1 className="text-center text-4xl font-bold text-green-400 mb-6">All Services</h1>

                {/* Search + Sort */}
                <div className="max-w-md mx-auto mb-12 space-y-3">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by title, category or company..."
                        className="w-full px-4 py-2 rounded-md bg-black border border-green-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black border border-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                    >
                        <option value="default">Sort: Default</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                    </select>
                </div>

                {filteredServices.length === 0 ? (
                    <Loader />
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map(service => (
                            <div
                                key={service._id}
                                className="bg-black hover:scale-105 transition-transform duration-300 bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden border border-green-800 shadow-lg text-white"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover border-b border-green-700"
                                />
                                <div className="p-5">
                                    <h2 className="text-2xl text-green-300 font-semibold mb-2">{service.title}</h2>
                                    <p className="text-sm text-gray-300 mb-3">{service.description?.slice(0, 100)}...</p>
                                    <div className="flex justify-between text-sm text-green-400 font-medium mb-2">
                                        <span>Category: {service.category}</span>
                                        <span>Price: ${service.price}</span>
                                    </div>
                                    {service.company && (
                                        <p className="text-sm text-gray-400 mb-2">Company: {service.company}</p>
                                    )}
                                    <Link
                                        to={`/details/${service._id}`}
                                        className="inline-block w-full text-center bg-green-700 border border-green-900 hover:bg-green-600 transition rounded-full py-2 text-white font-semibold"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AllServices;