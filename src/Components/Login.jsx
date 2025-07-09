import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-900 to-black">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-5">
        <form className="max-w-md w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-white roboto">
          <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Please Login</h2>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="you@example.com"
            />
          </label>

          <label className="block mb-6">
            <span className="text-green-300 mb-1 block">Password</span>
            <input
              type="password"
              name="password"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter your password..."
            />
          </label>

          <button
            type="submit"
            className="w-full btn text-lg bg-green-700 hover:bg-green-600 transition rounded-full py-3 text-white font-semibold mb-4"
          >
            Login
          </button>

          <button
            type="button"
            className="w-full btn text-lg bg-white text-black hover:bg-gray-200 transition rounded-full py-3 font-semibold flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-green-300">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-400 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div> 

      <Footer />
    </div>
  );
};

export default Login;
