import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAxiosPublic from '../hooks/useAxios';
import Loader from './Loader';

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axiosPublic.get('/services');
        setServices(res.data.slice(0, 4)); // <-- slice here to limit to 4
      } catch (error) {
        console.error('Failed to fetch featured services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, [axiosPublic]);

  if (loading) return <Loader />;

  if (services.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        No featured services available.
      </div>
    );
  }

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 roboto dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-green-700 dark:text-green-400">
          Featured Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Explore some of the top services trusted by our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {services.map(service => (
          <div
            key={service._id}
            className="bg-white/80 dark:bg-gray-900/70 rounded-xl shadow-2xl hover:shadow-green-600 transition p-5 flex flex-col hover:scale-105 duration-200"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md border border-green-600 dark:border-green-700 mb-4"
            />
            <h3 className="text-green-700 dark:text-green-400 font-semibold text-xl mb-2">
              {service.title}
            </h3>
           
            <div className="flex justify-between text-green-600 dark:text-green-400 font-medium mb-4 text-sm">
              <span>Category: {service.category}</span>
              <span>Price: ${service.price}</span>
            </div>
            {service.company && (
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Company: {service.company}
              </p>
            )}
            <Link
              to={`/details/${service._id}`}
              className="mt-auto inline-block bg-green-700 dark:bg-green-800 hover:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 rounded-full transition text-center"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;