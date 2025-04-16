import React from 'react';

const galleryImages = [
  {
    id: 1,
    src: "/images/birthday1.jpg",
    alt: "Young girl in pink dress at birthday celebration",
    description: "Birthday Celebrations"
  },
  {
    id: 2,
    src: "/images/birthday2.jpg",
    alt: "Family celebrating birthday with cake",
    description: "Family Moments"
  },
  {
    id: 3,
    src: "/images/owner.jpg",
    alt: "Restaurant owner in casual attire",
    description: "Meet Our Owner"
  },
  {
    id: 4,
    src: "/images/buffet.jpg",
    alt: "Restaurant buffet setup with decorations",
    description: "Party Setup"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="section-title mb-12">Our <span className="text-spice-500">Moments</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 