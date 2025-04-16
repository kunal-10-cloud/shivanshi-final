import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Best momos in Haridwar! The creamy paneer momos are absolutely delicious. Great service and ambiance.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    comment: "Amazing food and excellent service. The pasta here is as good as any high-end restaurant. Highly recommended!",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 5,
    comment: "Perfect place for family gatherings. We celebrated my daughter's birthday here and everything was perfect.",
    date: "January 2024"
  }
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom py-12">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-24 right-4 text-spice-600 hover:text-spice-700 font-medium flex items-center gap-1 text-sm"
        >
          <span>← Back</span>
        </button>
        {/* About Us Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
            About <span className="text-spice-500">Us</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Welcome to Shivanshi Fast Food, Haridwar's premier destination for delicious vegetarian cuisine. Since our establishment, we've been serving the community with love and passion for food.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our restaurant specializes in a wide variety of dishes, from mouth-watering momos to delectable pasta. We take pride in using the freshest ingredients and maintaining the highest standards of quality and hygiene.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Shivanshi Fast Food, we believe in creating not just meals, but memorable dining experiences. Our dedicated team works tirelessly to ensure every dish that leaves our kitchen meets our high standards of taste and presentation.
              </p>
            </div>
            <div className="bg-spice-50 p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-spice-600">Location</h3>
                <p className="text-gray-600">123 Main Street, Haridwar, Uttarakhand</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-spice-600">Hours</h3>
                <p className="text-gray-600">Monday - Sunday: 11:00 AM - 10:00 PM</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-spice-600">Contact</h3>
                <p className="text-gray-600">Phone: +91 8171156028, 8006630707</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="pt-16" id="testimonials">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Customer <span className="text-spice-500">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs; 