import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30"> {/* Increased height to 20 */}
          <div className="flex items-center">
            <img src="/Logo.jpg" alt="Logo" width="90" height="90" /> {/* Adjusted size for balance */}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="px-4 py-2 rounded-md text-base font-medium hover:text-[#2c2cff]">Home</Link>
              <Link to="/about" className="px-4 py-2 rounded-md text-base font-medium hover:text-[#2c2cff]">About</Link>
              <Link to="/services" className="px-4 py-2 rounded-md text-base font-medium hover:text-[#2c2cff]">Services</Link>
              <Link to="/contact" className="px-4 py-2 rounded-md text-base font-medium hover:text-[#2c2cff]">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-5">
            <Link to="/" className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">About</Link>
            <Link to="/services" className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">Services</Link>
            <Link to="/contact" className="block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
