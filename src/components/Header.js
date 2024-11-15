import React from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';




export default function Header () {
  return (
  
      <header className='fixed top-5 left-0 w-full p-3 md:p-6 flex items-center justify-between bg-lilac hover:bg-transparent duration-300 z-10'>
        <h1 className='text-lg md:text-2xl font-bold mx-auto'>Jewelry Store</h1>
        <div className='flex space-x-4'>
        <UserIcon className='h-6 w-6 text-custom-dark' />
        <ShoppingBagIcon className='h-6 w-6 text-custom-dark'/>
        </div>
        </header>
  
  );
}


