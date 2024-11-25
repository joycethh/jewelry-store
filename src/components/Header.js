import {useState, useEffect} from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import categoriesData from "../data/categories.json"

export default function Header () {
  const [isScrolled, setIsScrolled] = useState (false)

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
      <header className={`fixed top-0 left-0 w-full h-16 p-3 md:p-6 flex items-center justify-between z-50 transistion-all duration-200 
      ${isScrolled ? 'bg-white text-textDark' : 'bg-transparent text-white'}`}>
        <h1 className='uppercase tracking-widest text-3xl md:text-2xl font-bold mx-auto'>jewelry store</h1>
        <div className='flex space-x-4'>
        <UserIcon className='h-6 w-6 text-custom-dark' />
        <ShoppingBagIcon className='h-6 w-6 text-custom-dark'/>
        </div>
        </header>
        <div className={`transition-all duration-200 mt-16 ${isScrolled ? 'bg-white text-textDark' : 'bg-transparent text-white'}`}>
        <Navbar />
        </div>
       
     </>
  
  );
}


