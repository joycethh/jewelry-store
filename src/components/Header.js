import {useState, useEffect} from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import categoriesData from "../data/categories.json"

export default function Header () {
  const [isScrolled, setIsScrolled] = useState (false)
  const [dropdown, setDropdown] = useState(null);
  const handleMouseEnter = (category) =>{
   
      return setDropdown(category)
  } 
  const handleMouseLeave = () => setDropdown (null)

  useEffect(() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener ('scroll', handleScroll)
    return () => {
      window.removeEventListener ('scroll', handleScroll)
    }
  })
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50" >
      {/* real header */}
      <div className={`w-full h-16 flex items-center justify-between px-6 transistion-all duration-200 ${isScrolled ? 'bg-white text-textDark' : 'bg-transparent text-white'}`}>
      <h1 className='uppercase tracking-widest text-3xl md:text-2xl font-bold mx-auto'>jewelry store</h1>
        <div className='flex space-x-4'>
        <UserIcon className='h-6 w-6 text-custom-dark' />
        <ShoppingBagIcon className='h-6 w-6 text-custom-dark'/>
        </div>
      </div>

      {/* navbar */}
        <div className={`w-full transition-all duration-200 ${isScrolled ? 'bg-white text-textDark shadow-md' : 'bg-transparent text-white'}`}>
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
        </div>
        </header>
        
       
     </>
  
  );
}



