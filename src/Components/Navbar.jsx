import { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import ModeButton from './ModeButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Services', path: '/services' },
        { name: 'Add Service', path: '/add-service' },
        { name: 'My Services', path: '/my-services' },
        { name: 'My Reviews', path: '/my-reviews' },
    ];

    const currentPath = location.pathname;
    const isRegisterPage = currentPath === '/register';
    const isLoginPage = currentPath === '/login';

    const handleLogout = async () => {
        try {
            await logOut();
            Swal.fire({
                title: 'Logged Out!',
                text: 'You have been logged out successfully.',
                icon: 'success',
                confirmButtonColor: '#16a34a',
                confirmButtonText: 'OK'
            });
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const authButton = user ? (
        <button
            onClick={handleLogout}
            className="px-4 btn py-1 dark:bg-gray-800 dark:hover:bg-gray-900 border-green-900 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white transition-all"
        >
            Logout
        </button>
    ) : isRegisterPage ? (
        <Link to="/login">
            <button className="px-4 btn dark:bg-gray-800 dark:hover:bg-gray-900 py-1 text-lg border-green-900 bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
                Login
            </button>
        </Link>
    ) : isLoginPage ? (
        <Link to="/register">
            <button className="px-4 btn dark:bg-gray-800 dark:hover:bg-gray-900 py-1 text-lg bg-green-700 border-green-900 hover:bg-green-600 rounded-full text-white transition-all">
                Register
            </button>
        </Link>
    ) : (
        <Link to="/register">
            <button className="px-4 btn dark:bg-gray-800 dark:hover:bg-gray-900 py-1 border-green-900 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
                Register
            </button>
        </Link>
    );

    return (
        <nav className="w-full fixed z-50 bg-gradient-to-r from-green-900 via-black to-green-900 bg-opacity-60 backdrop-blur-md shadow-md dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://i.ibb.co/B2H1nRkq/review-hub.png"
                        alt="ReviewHub Logo"
                        className="w-10 h-10 rounded-full border-2 border-green-500 dark:border-green-400"
                    />
                    <span className="text-white dark:text-gray-200 roboto text-2xl font-bold tracking-wide">
                        Review<span className="text-green-400 dark:text-green-300">Hub</span>
                    </span>
                </div>

                {/* Desktop */}
                <div className="hidden roboto font-bold md:flex items-center gap-6 text-white dark:text-gray-200">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-green-400 dark:hover:text-green-300 transition-colors duration-200 ${currentPath === link.path
                                    ? 'text-green-400 dark:text-green-300'
                                    : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ModeButton />

                    {user && (
                        <img
                            src={user?.photoURL || '/avatar.jpg'}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full border-2 border-green-500 dark:border-green-300"
                        />
                    )}
                    {authButton}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-gray-200">
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden roboto bg-black bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-95 text-white dark:text-gray-200 px-4 pt-4 pb-6 space-y-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block hover:text-green-400 dark:hover:text-green-300 ${currentPath === link.path
                                    ? 'text-green-400 dark:text-green-300'
                                    : ''
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 mt-4">
                        <ModeButton />
                        {user && (
                            <img
                                src={user?.photoURL || '/avatar.jpg'}
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full border-2 border-green-500 dark:border-green-300"
                            />
                        )}
                        {user ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="px-4 py-1 dark:bg-gray-800 dark:hover:bg-gray-900 border-green-900 dark:border-green-300 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white dark:text-gray-100 transition-all"
                            >
                                Logout
                            </button>
                        ) : (
                            authButton
                        )}
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;