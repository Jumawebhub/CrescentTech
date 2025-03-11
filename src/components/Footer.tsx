import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c2cff] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CrescentTech</h3>
            <p className="text-sm">
              Providing innovative technology solutions for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254114411122</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>crescentsolutionstechn@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi Street, Kenya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CrescentechKe/" className="hover:text-gray-300"><Facebook className="h-6 w-6" /></a>
              <a href="https://x.com/CrescentechKe" className="hover:text-gray-300"><Twitter className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/crescentechke/" className="hover:text-gray-300"><Instagram className="h-6 w-6" /></a>
              <a href="https://ke.linkedin.com/crescentechke" className="hover:text-gray-300"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#4444ff] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()}  CrescentTech. All rights reserved. Powered By Jumawebhub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;