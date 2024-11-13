import React from 'react';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';




export default function Header () {
  return (
    <div>
      <header>
        <h1>Jewelry Store</h1>
      </header>
      <div>
        <span> <UserIcon /></span>
        <span><ShoppingBagIcon /></span>
      </div>
    </div>
  );
}


