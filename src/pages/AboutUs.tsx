import React from 'react';
import { ArrowLeft, Clock, MapPin, Phone, Heart, Leaf, Award, Users } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="pt-20">
        <div className="container-custom px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="relative mb-8 sm:mb-12">
              <Link to="/" className="fixed top-24 right-4 z-50">
                <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:text-spice-500">
                  <ArrowLeft size={16} />
                  Back
                </Button>
              </Link>
              
              <div className="text-center max-w-3xl mx-auto pt-8 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-spice-600 mb-4 sm:mb-6">
                  About Us
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                  Bringing the authentic flavors of Haridwar to your plate since 2020
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-12 sm:space-y-16">
              {/* Story Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-spice-600">Our Story</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Welcome to Shivanshi Fast Food, where we bring the authentic flavors of Haridwar to your plate. 
                    Our journey began with a simple mission: to serve delicious, high-quality fast food that captures 
                    the essence of Indian street food culture.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Founded in the heart of Haridwar, Shivanshi Fast Food has been serving the community with 
                    love and dedication. We take pride in using fresh, locally-sourced ingredients to create 
                    dishes that are both traditional and innovative.
                  </p>
                </div>
                <div className="bg-spice-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-spice-500 mb-2 sm:mb-4" />
                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Passion</h3>
                      <p className="text-sm sm:text-base text-gray-600">Cooking with love and dedication</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                      <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-spice-500 mb-2 sm:mb-4" />
                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Freshness</h3>
                      <p className="text-sm sm:text-base text-gray-600">Locally-sourced ingredients</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-spice-500 mb-2 sm:mb-4" />
                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Quality</h3>
                      <p className="text-sm sm:text-base text-gray-600">Consistent excellence</p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-spice-500 mb-2 sm:mb-4" />
                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">Community</h3>
                      <p className="text-sm sm:text-base text-gray-600">Serving with care</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Values Section */}
              <section className="bg-spice-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-spice-600 text-center mb-8 sm:mb-12">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-4">Quality First</h3>
                    <p className="text-sm sm:text-base text-gray-600">We use only the finest ingredients and maintain the highest standards in food preparation.</p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-4">Authentic Taste</h3>
                    <p className="text-sm sm:text-base text-gray-600">Our recipes are carefully crafted to bring you the true flavors of Indian street food.</p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-4">Customer Care</h3>
                    <p className="text-sm sm:text-base text-gray-600">Your satisfaction is our priority. We strive to provide excellent service every time.</p>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-4">Clean & Hygienic</h3>
                    <p className="text-sm sm:text-base text-gray-600">We maintain strict hygiene standards to ensure your safety and well-being.</p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-spice-600 text-center mb-8 sm:mb-12">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-spice-50 p-2 sm:p-3 rounded-full">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-spice-500" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">Phone Numbers</h3>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base text-gray-600 break-all">+91 8171156028</p>
                      <p className="text-sm sm:text-base text-gray-600 break-all">+91 8006630707</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-spice-50 p-2 sm:p-3 rounded-full">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-spice-500" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">Address</h3>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base text-gray-600 break-words">Tehri Visthapit Colony, Subhash Nagar</p>
                      <p className="text-sm sm:text-base text-gray-600 break-words">Haridwar, Uttarakhand 249407</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-spice-50 p-2 sm:p-3 rounded-full">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-spice-500" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900">Opening Hours</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">Open Daily: 10AM - 10PM</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs; 