'use client';

import Image from 'next/image';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Wishlist = () => {
  return (
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
      <SheetContent className='w-full'>
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
