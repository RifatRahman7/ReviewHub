import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';


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
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const authButton = user ? (
        <button
            onClick={handleLogout}
            className="px-4 btn py-1 border-green-900 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white transition-all"
        >
            Logout
        </button>
    ) : isRegisterPage ? (
        <Link to="/login">
            <button className="px-4 btn py-1 text-lg border-green-900 bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
                Login
            </button>
        </Link>
    ) : isLoginPage ? (
        <Link to="/register">
            <button className="px-4 btn py-1 text-lg bg-green-700 border-green-900 hover:bg-green-600 rounded-full text-white transition-all">
                Register
            </button>
        </Link>
    ) : (
        <Link to="/register">
            <button className="px-4 btn py-1 border-green-900 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white transition-all">
                Register
            </button>
        </Link>
    );

    return (
        <nav className="w-full fixed z-50 bg-gradient-to-r from-green-900 via-black to-green-900 bg-opacity-60 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
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

                <div className="hidden roboto font-bold md:flex items-center gap-6 text-white">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-green-400 transition-colors duration-200 ${
                                currentPath === link.path ? 'text-green-400' : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <img
                        src={user?.photoURL || '/avatar.jpg'}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full border-2 border-green-500"
                    />
                    {authButton}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden roboto bg-black bg-opacity-90 text-white px-4 pt-4 pb-6 space-y-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block hover:text-green-400 ${
                                currentPath === link.path ? 'text-green-400' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 mt-4">
                        <img
                            src={user?.photoURL || '/avatar.jpg'}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full border-2 border-green-500"
                        />
                        {user ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="px-4 py-1 border-green-900 text-lg bg-green-700 hover:bg-green-600 rounded-full text-white transition-all"
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
