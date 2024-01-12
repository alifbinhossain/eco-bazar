'use client';

import React from 'react';

import { BrandLogo } from '@/components/brand-logo';
import { SearchBox } from '@/components/search-box';
import { Separator } from '@/components/ui/separator';
import { Cart } from '@/components/cart/cart';
import { Wishlist } from '@/components/wishlist/wishlist';

const DesktopNavbar = () => {
  return (
    <div className='py-6 bg-white'>
      <div className='container flex items-center justify-between'>
        <BrandLogo />
        <SearchBox
          handleClick={(e) => {
            alert(e.current?.value);
          }}
        />

        <div className='flex items-center gap-4'>
          <Wishlist />
          <Separator className='h-5' orientation={'vertical'} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
