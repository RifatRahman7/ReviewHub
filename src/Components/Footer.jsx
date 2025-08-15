import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 backdrop-blur-sm dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="max-w-7xl roboto mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://i.ibb.co/B2H1nRkq/review-hub.png"
              alt="ReviewHub Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-green-900 dark:text-white">Review<span className="text-green-600 dark:text-green-400">Hub</span></span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            ReviewHub helps users share and discover real service experiences. Build trust, grow your service, and connect with a transparent community.
          </p>
        </div>

        <div>
          <h4 className="text-green-900 dark:text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-600 dark:hover:text-green-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-green-600 dark:hover:text-green-400 transition">All Services</a></li>
            <li><a href="/add-service" className="hover:text-green-600 dark:hover:text-green-400 transition">Add Service</a></li>
            <li><a href="/my-reviews" className="hover:text-green-600 dark:hover:text-green-400 transition">My Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-900 dark:text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/*" className="hover:text-green-600 dark:hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="/*" className="hover:text-green-600 dark:hover:text-green-400 transition">Terms of Service</a></li>
            <li><a href="/*" className="hover:text-green-600 dark:hover:text-green-400 transition">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-900 dark:text-white font-semibold mb-4">Connect</h4>
         
          <div className="flex gap-4 text-green-900 dark:text-white text-xl justify-center md:justify-start">
            <a
              href="https://facebook.com/rifatdcian"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-120 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/rifat-rahman7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:scale-120 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/RifatRahman7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-120 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-300 mt-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ReviewHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;