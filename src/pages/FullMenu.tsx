import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import FoodCard from '@/components/FoodCard';
import { menuItems, categories } from '@/components/Menu';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="section-padding pt-24">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-title">Complete <span className="text-spice-500">Menu</span></h1>
          <Link to="/" className="fixed top-24 right-4 z-50">
            <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:text-spice-500">
              <ArrowLeft size={16} />
              Back
            </Button>
          </Link>
        </div>
        
        <div className="relative mb-12">
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
            <div className="flex gap-1.5 min-w-full">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className={cn(
                    "whitespace-nowrap px-3 py-1.5 text-sm",
                    "rounded-md transition-all duration-200",
                    "hover:bg-gray-100",
                    activeCategory === category 
                      ? "bg-gray-100 text-spice-600 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              isPopular={item.isPopular}
              isVeg={item.isVeg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenu; 