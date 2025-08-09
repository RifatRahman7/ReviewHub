import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen flex roboto flex-col bg-gradient-to-br from-green-900 via-black to-green-900 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div
        aria-hidden
        className="absolute -top-20 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 blur-3xl opacity-25"
        animate={{ y: [0, 16, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-gradient-to-tr from-green-500 to-emerald-300 blur-3xl opacity-20"
        animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      <div className="flex-grow flex items-center justify-center px-4 pt-20 pb-10">
        <motion.div
          className="relative max-w-xl w-full text-center bg-black/50 backdrop-blur-xl rounded-2xl p-10 shadow-[0_0_40px_rgba(16,185,129,0.15)] border border-green-800/40"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto my-auto w-[65%] h-[65%] rounded-full bg-gradient-to-r from-emerald-500/20 via-green-400/10 to-emerald-500/20 blur-2xl"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />

          <motion.h1
            className="text-7xl font-extrabold mb-3 bg-gradient-to-b from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent tracking-tight"
            variants={item}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-2xl font-bold text-green-300 mb-3"
            variants={item}
          >
            Page Not Found 😶‍🌫️
          </motion.h2>

          <motion.div
            className="h-px w-20 mx-auto mb-5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60"
            variants={item}
          />

          <motion.p className="text-gray-300 mb-8 leading-relaxed" variants={item}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </motion.p>

          <motion.div variants={item}>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(16,185,129,0.35)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full btn bg-green-700 hover:bg-green-600 text-white font-semibold transition border border-green-900"
                aria-label="Go back to homepage"
              >
                Go Back Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;