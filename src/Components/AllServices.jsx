import { useEffect, useState } from 'react';
import { Link } from 'react-router'; 
import useAxiosPublic from '../hooks/useAxios';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
const AllServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axiosPublic.get('/services');
        setServices(res.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [axiosPublic]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black">
      <Navbar />
      <div className="flex-grow px-4 py-20 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-green-400 mb-12 roboto">All Services</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <div
              key={service._id}
              className="bg-black bg-opacity-60 backdrop-blur-md rounded-lg overflow-hidden border border-green-800 shadow-lg text-white roboto"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover border-b border-green-700"
              />
              <div className="p-5">
                <h2 className="text-2xl text-green-300 font-semibold mb-2">{service.title}</h2>
                <p className="text-sm text-gray-300 mb-3">{service.description.slice(0, 100)}...</p>
                <div className="flex justify-between text-sm text-green-400 font-medium mb-4">
                  <span>Category: {service.category}</span>
                  <span>Price: ${service.price}</span>
                </div>
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
      </div>

      <Footer />
    </div>
  );
};

export default AllServices;
