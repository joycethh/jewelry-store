import {useState, useEffect} from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';




export default function Header () {
  const [isScrolled, setIsScrolled] = useState (0);

  useEffect (() =>{
    const handleScroll = () => {
      setIsScrolled(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  });

  return (
    <div className='bg-red'>
      <h1>scroll position: {isScrolled} px</h1>
    </div>
  )
  // const [isScrolled, setIsScrolled] = useState (false)

  // useEffect(() =>{
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50)
  //   };

  //   window.addEventListener ('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener ('scroll', handleScroll)
  //   }
  // })
  // return (
  
  //     <header className={`fixed top-0 left-0 w-full p-3 md:p-6 flex items-center justify-between z-50 transistion-all duration-200  ${isScrolled ? 'bg-white text-textDark' : 'bg-transparent text-white'}`}>
  //       <h1 className='text-lg md:text-2xl font-bold mx-auto'>Jewelry Store</h1>
  //       <div className='flex space-x-4'>
  //       <UserIcon className='h-6 w-6 text-custom-dark' />
  //       <ShoppingBagIcon className='h-6 w-6 text-custom-dark'/>
  //       </div>
  //       </header>
  
  // );
}


