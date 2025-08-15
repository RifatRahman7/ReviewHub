import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
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
      const res = await axios.post('https://review-hub-server-ten.vercel.app/services', service);
      if (res.data.insertedId) {
        form.reset();

        Swal.fire({
          title: 'Success!',
          text: 'Service added successfully.',
          icon: 'success',
          confirmButtonColor: '#16a34a',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add service.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-10">
        <form
          onSubmit={handleAddService}
          className="max-w-xl w-full bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md rounded-lg p-8 text-gray-900 dark:text-white roboto shadow-2xl transition-shadow"
        >
          <h2 className="text-4xl font-bold mb-8 text-green-700 text-center dark:text-green-300">
            Add New Service
          </h2>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Service Image URL</span>
            <input
              type="url"
              name="image"
              placeholder="https://your-service-image.com"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Service Title</span>
            <input
              type="text"
              name="title"
              placeholder="Enter service title"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Company Name</span>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Company Website</span>
            <input
              type="url"
              name="website"
              placeholder="https://company.com"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Category</span>
            <input
              type="text"
              name="category"
              placeholder="e.g., Marketing, Design, Development"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Price (USD)</span>
            <input
              type="number"
              name="price"
              placeholder="e.g., 100"
              className="w-full rounded-md px-3 py-2 bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-700 mb-1 block dark:text-green-200">Description</span>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description of the service"
              className="w-full rounded-md px-3 py-2 resize-none bg-white bg-opacity-50 dark:bg-gray-800 border border-green-600 focus:border-green-400 outline-none text-gray-900 dark:text-white"
            ></textarea>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-green-700 mb-1 block dark:text-green-200">Added Date</span>
              <input
                type="text"
                value="Auto-generated"
                readOnly
                className="w-full px-3 py-2 rounded-md bg-gray-200 text-gray-600 border border-green-600 dark:bg-gray-700 dark:text-gray-300"
              />
            </div>

            <div>
              <span className="text-green-700 mb-1 block dark:text-green-200">User Email</span>
              <input
                type="text"
                value={user?.email || 'unauthenticated'}
                readOnly
                className="w-full px-3 py-2 rounded-md bg-gray-200 text-gray-600 border border-green-600 dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn dark:bg-gray-800 dark:hover:bg-gray-900 text-lg bg-green-700 hover:bg-green-600 transition border-green-900 rounded-full py-3 text-white font-semibold"
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