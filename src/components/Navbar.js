import { Link } from "react-router-dom";
import { useState } from "react";
import categoriesData from "../data/categories.json";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(null);
    const handleMouseEnter = (category) =>{
     
        return setDropdown(category)
    } 
    const handleMouseLeave = () => setDropdown (null)

  return (
    <nav className="border-2 bg-transparent w-full shadow transition-all duration-200">
     
     {/* menu */}
      <ul className="flex justify-center space-x-8 py-4 text-white uppercase tracking-wide">
        {categoriesData.categories.map((category) => {
        //   console.log("category", category);
          return (
            <li 
                key={category.name} 
                className="relative"
                onMouseEnter={() =>handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
                >
              <span>{category.name}</span>
              
              
              {/* submenu */}
              <ul className="absolute group top-full left-0 bg-white text-textDark shadow-lg py-2">
                {dropdown === category.name && category.subcategories.map((subcategory) => {
                //   console.log("subcategory", subcategory);
                  return (
                    <li key={subcategory} className="px-4 py-2 hover: underline cursor-pointer">
                      <Link to={`/products/jewelry-by-${category.name.toLowerCase()}/${subcategory
                        .toLowerCase()
                        .replace(' ', '-')}`}>{subcategory}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
