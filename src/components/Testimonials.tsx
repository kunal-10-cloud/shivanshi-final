
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, name, role, rating, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md relative">
      <Quote className="absolute top-6 right-6 text-spice-100" size={48} />
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            fill={i < rating ? "#FF732D" : "none"} 
            color={i < rating ? "#FF732D" : "#CBD5E0"} 
            size={16} 
          />
        ))}
      </div>
      <p className="mb-6 text-gray-600 relative z-10">{text}</p>
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-spice-500 to-curry-500 flex items-center justify-center text-white font-bold mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "The authentic flavors at Shivanshi took me back to my grandmother's kitchen. The chole bhature was absolutely divine!",
      name: "Priya Sharma",
      role: "Local Food Blogger",
      rating: 5
    },
    {
      text: "Best fast food in Haridwar! The service is quick, the food is always fresh, and the taste is consistently amazing.",
      name: "Rahul Gupta",
      role: "Regular Customer",
      rating: 5
    },
    {
      text: "As a tourist visiting Haridwar, finding Shivanshi was the highlight of my trip. The special thali gave me a perfect taste of local cuisine.",
      name: "Sarah Johnson",
      role: "Tourist",
      rating: 4
    },
    {
      text: "The samosas here are crispy on the outside and perfectly spiced inside. I've been coming here for years and the quality never disappoints!",
      name: "Amit Patel",
      role: "Haridwar Resident",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">What Our <span className="text-spice-500">Customers</span> Say</h2>
        <p className="section-subtitle">
          Hear from our happy customers about their dining experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
