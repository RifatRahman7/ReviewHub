import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-950 via-black to-green-950 text-gray-300 backdrop-blur-sm dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="max-w-7xl roboto mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://i.ibb.co/B2H1nRkq/review-hub.png"
              alt="ReviewHub Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Review<span className="text-green-400">Hub</span></span>
          </div>
          <p className="text-sm text-gray-400">
            ReviewHub helps users share and discover real service experiences. Build trust, grow your service, and connect with a transparent community.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-green-400 transition">All Services</a></li>
            <li><a href="/add-service" className="hover:text-green-400 transition">Add Service</a></li>
            <li><a href="/my-reviews" className="hover:text-green-400 transition">My Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/*" className="hover:text-green-400 transition">Privacy Policy</a></li>
            <li><a href="/*" className="hover:text-green-400 transition">Terms of Service</a></li>
            <li><a href="/*" className="hover:text-green-400 transition">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <p className="text-sm text-gray-400 mb-4">
            Have questions? Email us at <a href="mailto:support@reviewhub.com" className="text-green-400">support@reviewhub.com</a>
          </p>
          <div className="flex gap-4 text-white text-xl justify-center md:justify-start">
            <a href="#" className="hover:text-blue-400 hover:scale-120 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400 hover:scale-120 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 hover:scale-120 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 hover:scale-120 transition"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 mt-6 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ReviewHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
