import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Plans', path: '/plans' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              {/* mix-blend-multiply helps remove the white background from the logo */}
              <img
                src="/logo.png"
                alt="Gym Logo"
                className="h-16 w-auto object-contain mix-blend-multiply"
                style={{ mixBlendMode: 'multiply' }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-semibold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-500 hover:border-b-2 hover:border-orange-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 border-2 border-orange-600 text-sm font-bold rounded-md text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Join Now
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-white bg-orange-600'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Contact Button */}
            <div className="grid grid-cols-2 gap-2 mt-4 px-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-center px-3 py-3 rounded-md text-sm font-bold text-orange-600 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className="text-center px-3 py-3 rounded-md text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-md"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
