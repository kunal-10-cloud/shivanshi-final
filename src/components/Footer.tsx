import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    // Always scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (section === 'gallery') {
      navigate('/gallery');
      return;
    }
    
    if (section === 'menu') {
      navigate('/menu');
      return;
    }

    if (section === 'about') {
      navigate('/about');
      return;
    }

    if (section === 'home') {
      navigate('/');
      return;
    }

    if (section === 'contact') {
      navigate('/');
      // Then scroll to contact section after a small delay
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-spice-500" />
                <div>
                  <p className="font-medium">+91 8171156028</p>
                  <p className="font-medium">+91 8006630707</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spice-500 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Tehri Visthapit Colony, Subhash Nagar, Haridwar, Uttarakhand 249407
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/tiwW56mARz8hq3Mq7?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-spice-500 hover:text-spice-600 text-sm mt-1 flex items-center gap-1"
                  >
                    Locate Us <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-spice-500" />
                <p className="text-gray-300">Open Daily: 10AM - 10PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('menu')} 
                  className="text-gray-300 hover:text-spice-500 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about')} 
                  className="text-gray-300 hover:text-spice-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')} 
                  className="text-gray-300 hover:text-spice-500 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('gallery')} 
                  className="text-gray-300 hover:text-spice-500 transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shivanshi Fast Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
