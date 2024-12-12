import {useState, useEffect} from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
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
      {/* header with brand */}
      <div className={`w-full h-16 flex items-center justify-between px-6 transistion-all duration-200 ${isScrolled ? 'bg-white text-textDark' : 'bg-transparent text-white'}`}>
      <Link to="/" className='uppercase tracking-[0.2em] text-3xl md:text-2xl font-bold mx-auto'>Jewelry store</Link>
        <div className='flex space-x-4'>
        <UserIcon className='h-6 w-6 text-custom-dark' />
        <ShoppingBagIcon className='h-6 w-6 text-custom-dark'/>
        </div>
      </div>
     
      {/* navbar */}
      <div className={`w-full transition-all duration-200 ${isScrolled ? 'bg-white text-textDark shadow' : 'bg-transparent text-white'}`}> 
        {/* menu */}
        <nav className="w-full px-5 py-3">
        <ul className="flex space-x-10 uppercase tracking-widest">
          {categoriesData.categories.map((category) => {
          return (
            <li 
                key={category.name} 
                className="relative group"
                onMouseEnter={() =>handleMouseEnter(category.name)}
                onMouseLeave={handleMouseLeave}
                >
              <Link 
                to={`/products/jewelry/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className="cursor-pointer hover:underline"
                onClick={(e) =>{
                  console.group('Route Navigation');
                  console.log('Category:', category.name);
                  console.log('Generated Path:', `/products/jewelry/${category.name.toLowerCase().replace(/\s+/g, '-')}`);
                  console.trace(); // This will show the call stack
                  console.groupEnd();
                }}
              >
              {category.name}
              </Link>
              {/* drowpdown submenu */}             
                {dropdown === category.name && (           
                <ul className={`absolute top-full left-0 py-4 z-50 ${isScrolled ? 'bg-white text-textDark w-screen' : 'bg-transparent text-white'}`} >
                  {category.subcategories.map((subcategory) => {
                  // console.log("subcategory", subcategory);
                  return (
                    <li key={subcategory} className="py-2  hover:underline cursor-pointer"> 
                    {/* hover: bg-grey-200 */}
                      <Link to={`/products/jewelry/${category.name.toLowerCase().replace(/\s+/g, '-')}/${subcategory
                        .toLowerCase()
                        .replace(/\s+/g, '-', ' ')}`}>{subcategory}</Link>
                    </li>
                    )
                  })}
                </ul>
             
                )
              }
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



