import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery1.jpg",
    alt: "Young girl in pink dress at birthday celebration",
    description: "Birthday Celebrations"
  },
  {
    id: 2,
    src: "/images/gallery2.jpg",
    alt: "Family celebrating birthday with cake",
    description: "Family Moments"
  },
  {
    id: 3,
    src: "/images/menu-display.jpg",
    alt: "Our delicious menu offerings",
    description: "Our Menu"
  },
  {
    id: 4,
    src: "/images/gallery4.jpg",
    alt: "Restaurant buffet setup with decorations",
    description: "Party Setup"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verify image loading
    galleryImages.forEach(image => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => console.log(`Image loaded successfully: ${image.src}`);
      img.onerror = () => console.error(`Error loading image: ${image.src}`);
    });
  }, []);

  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Handle navigation
  const handleNavigation = (section: string) => {
    if (section === 'home') {
      navigate('/');
      return;
    }
    navigate(`/?section=${section}`);
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom py-12">
        <button 
          onClick={() => handleNavigation('home')}
          className="absolute top-24 right-4 text-spice-600 hover:text-spice-700 font-medium flex items-center gap-1 text-sm"
        >
          <span>← Back</span>
        </button>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center sm:text-left mb-8">
          Our <span className="text-spice-500">Gallery</span>
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our vibrant collection of moments, celebrations, and delicious creations at Shivanshi Fast Food.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  console.error(`Error loading image: ${image.src}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage; 