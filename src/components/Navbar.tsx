import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [highlightedContact, setHighlightedContact] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    setIsOpen(false);
    
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

    if (section === 'contact' || section === 'book-table') {
      // Always navigate to home page first
      navigate('/');
      // Then scroll to contact section after a small delay
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
          // If it's a book-table action, highlight the contact details
          if (section === 'book-table') {
            setHighlightedContact('phone');
            // Remove highlight after 3 seconds
            setTimeout(() => setHighlightedContact(null), 3000);
          }
        }
      }, 100);
      return;
    }
    
    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        // Small delay to ensure page has scrolled to top first
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(`/?section=${section}`);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="container-custom px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl sm:text-2xl font-display font-bold text-spice-600">
                Shivanshi <span className="text-curry-500">Fast Food</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              <button onClick={() => handleNavigation('home')} className="nav-link text-sm sm:text-base px-3 py-2 hover:text-spice-500 transition-colors">Home</button>
              <button onClick={() => handleNavigation('gallery')} className="nav-link text-sm sm:text-base px-3 py-2 hover:text-spice-500 transition-colors">Gallery</button>
              <button onClick={() => handleNavigation('about')} className="nav-link text-sm sm:text-base px-3 py-2 hover:text-spice-500 transition-colors">About</button>
              <button onClick={() => handleNavigation('menu')} className="nav-link text-sm sm:text-base px-3 py-2 hover:text-spice-500 transition-colors">Menu</button>
              <button onClick={() => handleNavigation('contact')} className="nav-link text-sm sm:text-base px-3 py-2 hover:text-spice-500 transition-colors">Contact</button>
              <a 
                href="https://www.zomato.com/haridwar/shivanshi-fast-food-ranipur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 bg-spice-500 text-white hover:bg-spice-600 transition-colors flex items-center gap-2 text-sm sm:text-base px-4 py-2 rounded-full"
              >
                <ShoppingBag size={18} />
                Order Now
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <a 
                href="https://www.zomato.com/haridwar/shivanshi-fast-food-ranipur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-spice-500 text-white hover:bg-spice-600 transition-colors flex items-center gap-2 text-sm px-3 py-2 rounded-full"
              >
                <ShoppingBag size={18} />
                Order
              </a>
              <button
                className="text-gray-600 hover:text-spice-500 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-gray-50/95 backdrop-blur-sm z-[60] lg:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <span className="text-xl font-display font-bold text-spice-600">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-spice-500 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-2 p-4">
              <button 
                onClick={() => handleNavigation('home')} 
                className="nav-link text-lg py-3 px-4 text-left hover:text-spice-500 transition-colors rounded-lg hover:bg-white"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('gallery')} 
                className="nav-link text-lg py-3 px-4 text-left hover:text-spice-500 transition-colors rounded-lg hover:bg-white"
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className="nav-link text-lg py-3 px-4 text-left hover:text-spice-500 transition-colors rounded-lg hover:bg-white"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('menu')} 
                className="nav-link text-lg py-3 px-4 text-left hover:text-spice-500 transition-colors rounded-lg hover:bg-white"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavigation('contact')} 
                className="nav-link text-lg py-3 px-4 text-left hover:text-spice-500 transition-colors rounded-lg hover:bg-white"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-white">
            <div className="text-center text-sm text-gray-500">
              © 2024 Shivanshi Fast Food. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20 lg:h-24" />
    </>
  );
};

export default Navbar;
