
import React from 'react';
import { Award, Clock, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <h2 className="section-title">Our <span className="text-spice-500">Story</span></h2>
        <p className="section-subtitle">
          Serving authentic flavors with love and tradition since 2015
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              Founded by food enthusiasts with a passion for authentic Indian cuisine, Shivanshi Fast Food began its journey in the heart of Haridwar with a simple mission: to serve delicious, high-quality food that celebrates the rich culinary heritage of India.
            </p>
            <p className="text-lg">
              What started as a small eatery has now grown into a beloved destination for locals and tourists alike, known for our commitment to freshness, flavor, and friendly service.
            </p>
            <p className="text-lg">
              Every dish at Shivanshi is prepared with carefully selected ingredients and traditional recipes that have been perfected over generations. Our chefs bring decades of experience and a passion for cooking that you can taste in every bite.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Award className="mx-auto text-spice-500 mb-2" size={32} />
                <h3 className="font-semibold">Quality Food</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <UserCheck className="mx-auto text-curry-500 mb-2" size={32} />
                <h3 className="font-semibold">Happy Customers</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Clock className="mx-auto text-leaf-500 mb-2" size={32} />
                <h3 className="font-semibold">Fast Service</h3>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-curry-500 rounded-lg opacity-20 rotate-12"></div>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant Ambiance" 
              className="rounded-lg shadow-xl object-cover h-full w-full z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-spice-500 rounded-lg opacity-20 -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
