import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodCard from './FoodCard';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Menu categories
export const categories = [
  "All",
  "Chowmin",
  "Momos",
  "Manchurian",
  "Pasta",
  "Macroni",
  "Potatos",
  "Rolls",
  "Rice"
];

// Menu items based on the restaurant's menu
export const menuItems = [
  // Chowmin
  {
    id: 1,
    name: "Veg Chowmin",
    description: "Classic vegetable chowmin",
    price: "₹70.00",
    image: "https://jackslobodian.com/wp-content/uploads/2021/03/Vegetable-Vegan-Chow-Mein-2.jpg",
    category: "Chowmin",
    isVeg: true
  },
  {
    id: 2,
    name: "Paneer Chowmin",
    description: "Chowmin with fresh cottage cheese",
    price: "₹120.00",
    image: "https://parcelkaro.in/wp-content/uploads/2022/12/Paneer-Chowmien.jpg",
    category: "Chowmin",
    isVeg: true
  },
  {
    id: 3,
    name: "Singapuri Chowmin",
    description: "Singapore-style spicy chowmin",
    price: "₹100.00",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=3092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Chowmin",
    isVeg: true
  },
  // Momos (10 PCS Each)
  {
    id: 4,
    name: "Steam Momos",
    description: "Classic steamed vegetable momos (10 PCS)",
    price: "₹70.00",
    image: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Momos",
    isVeg: true
  },
  {
    id: 5,
    name: "Fried Momos",
    description: "Crispy fried vegetable momos (10 PCS)",
    price: "₹80.00",
    image: "https://images.unsplash.com/photo-1738608084602-f9543952188e?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Momos",
    isVeg: true
  },
  {
    id: 6,
    name: "Creamy Momos",
    description: "Momos in rich creamy sauce (10 PCS)",
    price: "₹120.00",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/fa/70/47/creamy-veg-momos.jpg",
    category: "Momos",
    isVeg: true
  },
  {
    id: 7,
    name: "Paneer Fried Momos",
    description: "Crispy fried momos with paneer filling (10 PCS)",
    price: "₹120.00",
    image: "https://www.mrcoconut.in/img/products/23_10_2021_15_53_627_pm.webp",
    category: "Momos",
    isVeg: true
  },
  {
    id: 8,
    name: "Paneer Steam Momos",
    description: "Steamed momos with paneer filling (10 PCS)",
    price: "₹120.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/12/473117403/PQ/SE/CD/113468625/paneer-momos-500x500.png",
    category: "Momos",
    isVeg: true
  },
  {
    id: 9,
    name: "Creamy Paneer Momos",
    description: "Paneer momos in rich creamy sauce (10 PCS)",
    price: "₹140.00",
    image: "https://b.zmtcdn.com/data/dish_photos/70a/ee9f16244a4f993b5ce01780260f170a.png?fit=around|400:400&crop=400:400;*,*",
    category: "Momos",
    isVeg: true
  },
  // Manchurian
  {
    id: 10,
    name: "Fry Manchurian",
    description: "Crispy fried vegetable manchurian",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Manchurian",
    isVeg: true
  },
  {
    id: 11,
    name: "Greavy Manchurian",
    description: "Manchurian balls in flavorful gravy",
    price: "₹90.00",
    image: "https://images.unsplash.com/photo-1645177628189-3a4922e0399b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Manchurian",
    isVeg: true
  },
  {
    id: 12,
    name: "Creamy Manchurian",
    description: "Manchurian in rich creamy sauce",
    price: "₹120.00",
    image: "https://images.unsplash.com/photo-1645177628190-6b4b167ed68b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Manchurian",
    isVeg: true
  },
  // Pasta
  {
    id: 13,
    name: "Plain Pasta",
    description: "Classic vegetable pasta",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Pasta",
    isVeg: true
  },
  {
    id: 14,
    name: "Creamy Pasta",
    description: "Pasta in rich white sauce",
    price: "₹120.00",
    image: "https://www.spendwithpennies.com/wp-content/uploads/2021/11/SWP-2-cream-cheese-pasta-sauce-1.jpg",
    category: "Pasta",
    isVeg: true
  },
  {
    id: 15,
    name: "Red Sauce Pasta",
    description: "Pasta in tangy tomato sauce",
    price: "₹110.00",
    image: "https://static.toiimg.com/thumb/imgsize-178042,msid-93068647,width-600,height-335,resizemode-75/93068647.jpg",
    category: "Pasta",
    isVeg: true
  },
  {
    id: 16,
    name: "Mix Sauce Pasta",
    description: "Pasta in a blend of white and red sauce",
    price: "₹130.00",
    image: "https://everylittlecrumb.com/wp-content/uploads/pinksaucepasta2-scaled.jpg",
    category: "Pasta",
    isVeg: true
  },
  // Macroni
  {
    id: 17,
    name: "Plain Macroni",
    description: "Classic vegetable macroni",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1612152328178-4a6c43c5938b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Macroni",
    isVeg: true
  },
  {
    id: 18,
    name: "Creamy Macroni",
    description: "Macroni in rich creamy sauce",
    price: "₹120.00",
    image: "https://images.unsplash.com/photo-1621996346524-0d0c78eb2b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Macroni",
    isVeg: true
  },
  // Potatos
  {
    id: 19,
    name: "Chilly Potato",
    description: "Spicy crispy potato fingers in chili sauce",
    price: "₹100.00",
    image: "https://images.unsplash.com/photo-1623238913973-21e45cced554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Potatos",
    isVeg: true
  },
  {
    id: 20,
    name: "Creamy Potato",
    description: "Potato fingers in creamy sauce",
    price: "₹120.00",
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Potatos",
    isVeg: true
  },
  {
    id: 21,
    name: "Potato Fingers",
    description: "Classic crispy potato fingers",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Potatos",
    isVeg: true
  },
  // Rolls (2 Pcs)
  {
    id: 22,
    name: "Veg Roll",
    description: "Classic vegetable roll (2 Pcs)",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Rolls",
    isVeg: true
  },
  {
    id: 23,
    name: "Paneer Roll",
    description: "Roll with spiced paneer filling (2 Pcs)",
    price: "₹110.00",
    image: "https://images.unsplash.com/photo-1631452180775-7c5d285cd90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Rolls",
    isVeg: true
  },
  {
    id: 24,
    name: "Veg Kabab",
    description: "Vegetable kabab roll (4 Pcs)",
    price: "₹70.00",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Rolls",
    isVeg: true
  },
  // Rice
  {
    id: 25,
    name: "Plain Fried Rice",
    description: "Classic vegetable fried rice",
    price: "₹80.00",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Rice",
    isVeg: true
  },
  {
    id: 26,
    name: "Paneer Fried Rice",
    description: "Fried rice with paneer",
    price: "₹110.00",
    image: "https://images.unsplash.com/photo-1645177628189-3a4922e0399b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Rice",
    isVeg: true
  },
  // Chilly Paneer (Special)
  {
    id: 27,
    name: "Chilly Paneer",
    description: "Spicy paneer in chili sauce",
    price: "₹150.00",
    image: "https://images.unsplash.com/photo-1631452180775-7c5d285cd90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Specials",
    isVeg: true,
    isPopular: true
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredItems = menuItems.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  const displayedItems = filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">
          Our <span className="text-spice-500">Menu</span>
        </h2>
        
        <div className="flex flex-col gap-8">
          <div className="relative">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {displayedItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 sm:h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.isVeg && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Veg
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-spice-500 font-bold text-sm sm:text-base">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate('/menu')}
            className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-2.5 bg-spice-500 text-white hover:bg-spice-600 transition-colors rounded-full text-sm sm:text-base font-medium"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
