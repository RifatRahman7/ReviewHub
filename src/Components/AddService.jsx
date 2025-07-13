import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { useContext } from 'react';

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = async (e) => {
    e.preventDefault();
    const form = e.target;

    const service = {
      image: form.image.value,
      title: form.title.value,
      company: form.company.value,
      website: form.website.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      addedDate: new Date().toISOString(),
      userEmail: user?.email || 'unauthenticated',
    };

    try {
      const res = await axios.post('http://localhost:3000/services', service);
      if (res.data.insertedId) {
        toast.success('Service added successfully!');
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add service.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-900 via-black to-green-900">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-10">
        <form onSubmit={handleAddService} className="max-w-xl w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-white roboto">
          <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Add New Service</h2>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Service Image URL</span>
            <input
              type="url"
              name="image"
              placeholder="https://your-service-image.com"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Service Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter service title"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Company Name</span>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Company Website</span>
            <input
              type="url"
              name="website"
              placeholder="https://company.com"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Category</span>
            <input
              type="text"
              name="category"
              placeholder="e.g., Marketing, Design, Development"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Price (USD)</span>
            <input
              type="number"
              name="price"
              placeholder="e.g., 100"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Description</span>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description of the service"
              className="w-full rounded-md px-3 py-2 resize-none bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
            ></textarea>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-green-300 mb-1 block">Added Date</span>
              <input
                type="text"
                value="Auto-generated"
                readOnly
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-400 border border-green-600"
              />
            </div>

            <div>
              <span className="text-green-300 mb-1 block">User Email</span>
              <input
                type="text"
                value="Authenticated user email"
                readOnly
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-400 border border-green-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn text-lg bg-green-700 hover:bg-green-600 transition border-green-900 rounded-full py-3 text-white font-semibold"
          >
            Add Service
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddService;
