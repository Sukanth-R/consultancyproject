import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#133E87] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl ms-5 font-bold pb-1">AUTOMAX</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 gap-4 items-center text-lg me-5">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-gray-300">
                Products <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`absolute z-50 bg-[#CBDCEB] mt-0.2 text-sm text-black rounded shadow-lg w-48 transition-all duration-1000 ease-in-out ${
                  dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link to="/components/products/water" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Water Proof LED Lights</Link>
                <Link to="/product2" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Boat Lights</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Fog Lights</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Two Wheeler Lights</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Converters</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Roof Lamps</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Tail Lamp Assembly</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Side Indicators</Link>
                <Link to="/product3" className="block px-4 py-2 hover:bg-[#133E87] hover:text-white">Decorative Lights</Link>
              </div>
            </div>
            <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Contact & Social Media Section (Visible on Larger Screens) */}
      <div className="hidden md:block bg-gray-200 text-gray-800 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <p className="flex items-center ms-5">
              <FaPhone style={{ transform: "rotate(90deg)" }} className="text-black mr-2" /> +918825967397
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-black mr-2" /> vivekautomax@gmail.com
            </p>
          </div>
          <div className="flex space-x-4 mr-5">
            <p className="text-lg">Follow Us:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#133E87] text-white overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-2">
          <Link to="/home" className="block hover:text-gray-300">Home</Link>
          <Link to="/about" className="block hover:text-gray-300">About</Link>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center w-full text-white text-left">
            Products <ChevronDown size={16} className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="ml-4 space-y-1 rounded shadow-lg bg-[#CBDCEB] px-4 py-2 transition-all">
              <Link to="/product1" className="block py-1 text-gray-900 hover:text-gray-300">Product 1</Link>
              <Link to="/product2" className="block py-1 text-gray-900 hover:text-gray-300">Product 2</Link>
              <Link to="/product3" className="block py-1 text-gray-900 hover:text-gray-300">Product 3</Link>
            </div>
          )}
          <Link to="/gallery" className="block hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className="block hover:text-gray-300 pb-2">Contact Us</Link>
          {/* Contact & Social Media Section (Mobile) */}
          <div className="mt-4 border-t border-gray-400 pt-4">
            <p className="flex items-center py-1">
              <FaPhone style={{ transform: "rotate(90deg)" }} className="text-white mr-2" /> +918825967397
            </p>
            <p className="flex items-center py-1">
              <FaEnvelope className="text-white mr-2" /> vivekautomax@gmail.com
            </p>
            <div className="flex space-x-4 mt-2 p-2">
              <p className="text-lg">Follow Us:</p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;