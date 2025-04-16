import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">
              Shivanshi <span className="text-spice-500">Flavors</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Experience the authentic taste of Haridwar with our carefully crafted fast food offerings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-spice-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-spice-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-spice-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-spice-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-spice-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-spice-500 transition-colors">Menu</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-spice-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-spice-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-spice-500" />
                Monday - Friday: 11AM - 10PM
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-spice-500" />
                Saturday - Sunday: 11AM - 11PM
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-spice-500" />
                <div className="flex flex-col">
                  <span>Tehri Visthapit Colony, Subhash Nagar</span>
                  <span>Haridwar, Uttarakhand 249401</span>
                  <a 
                    href="https://maps.app.goo.gl/tiwW56mARz8hq3Mq7?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-spice-500 hover:text-spice-600 transition-colors"
                  >
                    Locate Us →
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-spice-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-spice-500" />
                <span>contact@shivanshiflavors.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Shivanshi Flavors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
