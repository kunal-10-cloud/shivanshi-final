
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular?: boolean;
  isVeg?: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  description,
  price,
  image,
  isPopular = false,
  isVeg = true
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {isPopular && (
          <div className="absolute top-2 right-2 bg-curry-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
        <div className={cn(
          "absolute top-2 left-2 w-5 h-5 rounded-full p-0.5",
          isVeg ? "bg-green-100" : "bg-red-100"
        )}>
          <div className={cn(
            "w-full h-full rounded-full", 
            isVeg ? "bg-green-500" : "bg-red-500"
          )}></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-spice-600 font-bold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mt-2">{description}</p>
        <Button className="w-full mt-4 bg-spice-100 hover:bg-spice-200 text-spice-600 flex items-center justify-center gap-2">
          <ShoppingBag size={16} />
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
