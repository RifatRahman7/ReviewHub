import React from 'react';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex roboto flex-col bg-gradient-to-br from-green-900 via-black to-green-900 text-white">

      <div className="flex-grow flex items-center justify-center px-4 pt-20 pb-10">
        <div className="max-w-xl text-center bg-black bg-opacity-60 backdrop-blur-md rounded-lg p-10 shadow-lg">
          <h1 className="text-7xl font-extrabold text-green-500 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-green-300 mb-2">Page Not Found 😶‍🌫️</h2>
          <p className="text-gray-300 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <Link to="/">
            <button className="px-6 btn py-2 bg-green-700 hover:bg-green-600 rounded-full text-white font-semibold transition">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>

    </div>
    );
};

export default ErrorPage;