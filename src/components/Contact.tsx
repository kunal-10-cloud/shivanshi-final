import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-spice-500" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-spice-500" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@shivanshiflavors.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-spice-500" size={24} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">Tehri Visthapit Colony, Subhash Nagar</p>
                  <p className="text-muted-foreground">Haridwar, Uttarakhand 249401</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-spice-500 hover:text-spice-600">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-spice-500 hover:text-spice-600">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-spice-500 hover:text-spice-600">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
