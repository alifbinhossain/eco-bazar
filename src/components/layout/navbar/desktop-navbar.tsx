'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import { BrandLogo } from '@/components/brand-logo';
import { SearchBox } from '@/components/search-box';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

const DesktopNavbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='py-6'>
      <div className='container flex items-center justify-between'>
        <BrandLogo />
        <SearchBox
          ref={inputRef}
          onClick={() => {
            if (inputRef.current?.value) {
              alert(inputRef.current?.value);
            }
          }}
        />

        <div className='flex items-center gap-4'>
          <Sheet>
            <SheetTrigger asChild>
              <Button size={'icon'} variant={'ghost'} className='relative'>
                <Badge className='absolute -top-1 -right-1 '>5</Badge>
                <Image
                  width={24}
                  height={24}
                  src={'/assets/images/icons/heart.svg'}
                  alt='Wishlist Icon'
                />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Wishlist</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>

              <SheetFooter>
                <SheetClose asChild>
                  <Button type='submit'>Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Separator className='h-5' orientation={'vertical'} />

          <Sheet>
            <SheetTrigger asChild>
              <Button size={'icon'} variant={'ghost'} className='relative'>
                <Badge className='absolute -top-1 -right-1 '>8</Badge>
                <Image
                  width={24}
                  height={24}
                  src={'/assets/images/icons/shopping-bag.svg'}
                  alt='Cart Icon'
                />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>

              <SheetFooter>
                <SheetClose asChild>
                  <Button type='submit'>Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <div>
            <p className='text-gray-700 text-xs'>Shopping Cart :</p>
            <p className='text-gray-900 text-sm font-medium'>$57.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
