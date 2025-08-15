import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../Provider/AuthContext';

const slides = [
  {
    title: "Discover Trusted Services",
    description:
      "Explore honest reviews from real users. Find services you can trust—fast, easy, and reliably with ReviewHub.",
    image: "https://iili.io/FDQYHep.webp",
  },
  {
    title: "Share Your Experience",
    description:
      "Let your voice be heard. Share feedback on services you've used and help others make better choices.",
    image: "https://i.ibb.co/m5gLJf1s/share-exp.jpg",
  },
  {
    title: "Grow with Feedback",
    description:
      "Add your services, collect reviews, and improve. ReviewHub empowers service providers to grow through insight.",
    image: "https://i.ibb.co/TM6Pj1Lt/feedback.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full roboto h-[80vh] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Blurred image */}
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover filter blur-sm scale-105"
            style={{ transformOrigin: 'center' }}
          />
          {/* Overlay with semi-transparent black to darken the image */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Blurred background container for text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <div className="bg-black/60 backdrop-blur-lg rounded-xl p-8 max-w-4xl z-10 relative">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl md:text-6xl text-green-400 font-extrabold drop-shadow-lg"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl md:text-2xl text-green-200 mt-4 drop-shadow-md"
              >
                {slides[current].description}
              </motion.p>
              {!user && (
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Link
                    to="/register"
                    className="mt-6 inline-block px-8 py-3 bg-green-700 hover:bg-green-600 text-white rounded-full font-semibold shadow-md transition"
                  >
                    Get Started
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;