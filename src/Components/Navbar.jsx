import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Services', path: '/services' },
    { name: 'Add Service', path: '/add-service' },
    { name: 'My Services', path: '/my-services' },
    { name: 'My Reviews', path: '/my-reviews' },
  ];

  return (
    <nav className="w-full fixed z-50 bg-gradient-to-r from-green-900 via-black to-green-900 bg-opacity-60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/B2H1nRkq/review-hub.png"
            alt="ReviewHub Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white roboto text-2xl font-bold tracking-wide">
            Review<span className="text-green-400">Hub</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden roboto font-bold md:flex items-center gap-6 text-white">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-green-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <img
            src="/avatar.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border-2 border-green-500"
          />
          <button className="ml-3 px-4 py-1 bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-4 pt-4 pb-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.path}
              className="block hover:text-green-400"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/avatar.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-green-500"
            />
            <button className="px-4 py-1 bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
