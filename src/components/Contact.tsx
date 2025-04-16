import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactProps {
  highlightedContact?: string | null;
}

const Contact: React.FC<ContactProps> = ({ highlightedContact }) => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-8 sm:py-12 lg:py-16">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-spice-600 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or want to book a table? We'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-spice-600 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className={cn(
                  "flex items-start space-x-4 p-4 rounded-lg transition-all duration-300",
                  highlightedContact === 'phone' ? "bg-spice-50 border border-spice-200" : ""
                )}>
                  <div className="bg-spice-50 p-3 rounded-full">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">+91 8171156028</p>
                    <p className="text-gray-600">+91 8006630707</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <div className="bg-spice-50 p-3 rounded-full">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 break-all">info@shivanshifastfood.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <div className="bg-spice-50 p-3 rounded-full">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">Tehri Visthapit Colony, Subhash Nagar</p>
                    <p className="text-gray-600">Haridwar, Uttarakhand 249407</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <div className="bg-spice-50 p-3 rounded-full">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-spice-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Opening Hours</h4>
                    <p className="text-gray-600">Open Daily: 10AM - 10PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
