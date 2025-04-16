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
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={cn(
                "border-spice-200 hover:border-spice-300",
                activeCategory === category 
                  ? "bg-spice-500 text-white hover:bg-spice-600 border-spice-500"
                  : "bg-white text-foreground"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
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