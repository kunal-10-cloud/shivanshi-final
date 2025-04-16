import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    // Always scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (section === 'book-table') {
      navigate('/');
      // Then scroll to contact section after a small delay
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return;
    }
    
    navigate(`/${section}`);
  };

  return (
    <section id="home" className="relative overflow-hidden hero-pattern min-h-screen flex items-center">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16">
        <div className="lg:w-[45%] z-10 animate-fade-in pr-8 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Authentic <span className="text-spice-500">Flavors</span> of Haridwar
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-muted-foreground max-w-xl">
            Experience the rich tastes and aromas of traditional Indian fast food at Shivanshi Fast Food - where every bite tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              className="button-primary flex items-center gap-2 text-base sm:text-lg px-8 py-3"
              onClick={() => navigate('/menu')}
            >
              View Our Menu
              <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-spice-500 text-spice-500 hover:bg-spice-50 text-base sm:text-lg px-8 py-3"
              onClick={() => handleNavigation('book-table')}
            >
              Book a Table
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <Clock className="text-curry-500" size={24} />
              <span className="text-base sm:text-lg">Open Daily: 10AM - 10PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-spice-500" size={24} />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg">Tehri Visthapit Colony, Subhash Nagar</span>
                <span className="text-base sm:text-lg">Haridwar, Uttarakhand 249407</span>
                <a 
                  href="https://maps.app.goo.gl/tiwW56mARz8hq3Mq7?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-spice-500 hover:text-spice-600 text-sm sm:text-base mt-1 flex items-center gap-1"
                >
                  Locate Us <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-[50%] z-10 relative animate-fade-in mt-12 lg:mt-0">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Interior of Shivanshi Fast Food restaurant with people enjoying meals" 
              className="rounded-2xl shadow-2xl object-cover h-[500px] lg:h-[600px] xl:h-[700px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
