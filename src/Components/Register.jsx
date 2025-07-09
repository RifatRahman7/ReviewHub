import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-10">
        <form className="mt-8 max-w-md w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-white roboto">
          <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Register Please !</h2>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Name</span>
            <input
              type="text"
              name="name"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Your full name..."
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Photo URL</span>
            <input
              type="url"
              name="photoURL"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="https://your-photo-url.com"
            />
          </label>

          <label className="block mb-6">
            <span className="text-green-300 mb-1 block">Password</span>
            <input
              type="password"
              name="password"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter a strong password..."
            />
          </label>

          <button
            type="submit"
            className="w-full btn bg-green-700 border-green-900 hover:bg-green-600 transition text-xl rounded-full py-3 text-white font-semibold"
          >
            Register
          </button>

          <p className="mt-6 text-center text-green-300">
            Already have an account?{' '}
            <Link to="/login" className="text-green-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
