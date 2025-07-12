import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
  const { createUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (name.length < 5) {
      setNameError('Name should be more than 5 characters');
      return;
    } else {
      setNameError('');
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long and include uppercase and lowercase letters.');
      return;
    } else {
      setPasswordError('');
    }

    // Firebase register
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        toast.success('Registration successful!');
        return updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...newUser, displayName: name, photoURL: photo });
          navigate('/');
        });
      })
      .catch((error) => {
        toast.error(`${error.message} (${error.code})`);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        toast.success('Logged in with Google as ' + result.user.displayName);
        navigate('/');
      })
      .catch((error) => {
        toast.error('Google Login Error: ' + error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-950 to-black">
      <Helmet><title>Register</title></Helmet>
      <ToastContainer theme="colored" />
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-10">
        <form onSubmit={handleRegister} className="mt-8 max-w-md w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-white roboto">
          <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Register Please !</h2>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Name</span>
            <input
              type="text"
              name="name"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Your full name..."
              required
            />
            {nameError && <p className="text-sm text-red-500 mt-1">{nameError}</p>}
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter your e-mail..."
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Photo URL</span>
            <input
              type="url"
              name="photoURL"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="https://your-photo-url.com"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="text-green-300 mb-1 block">Password</span>
            <input
              type="password"
              name="password"
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter a strong password..."
              required
            />
            {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
          </label>

          <button
            type="submit"
            className="w-full btn bg-green-700 border-green-900 hover:bg-green-600 transition text-xl rounded-full py-3 text-white font-semibold"
          >
            Register
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mt-4 flex btn items-center justify-center gap-3 border border-green-600 hover:border-green-400 text-white rounded-full py-3 transition bg-black bg-opacity-50"
          >
            <img
              src="https://i.ibb.co/5xMMFjjG/Google-G-logo-svg.png"
              alt="Google logo"
              className="w-6 h-6"
            />
            <span className="text-red-400 font-medium">Login with</span>
            <span className="text-green-400 font-medium">Google</span>
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
