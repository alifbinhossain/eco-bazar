'use client';

import Image from 'next/image';

import Lottie from 'react-lottie';

import LottieFile from '../../../public/assets/lotties/empty-cart.json';

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
import { useShopContext } from '@/components/providers/shop-provider';
import { CartItem } from './cart-item';
import { siteConfig } from '@/config/site';
import { ShopNowButton } from '../buttons/shop-now';

export const Cart = () => {
  const { cart, getCartProducts } = useShopContext();
  const numberOfProducts = cart.length;
  return (
    <div className='flex items-center gap-4 bg-white'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'ghost'} className='relative'>
            <Badge className='absolute -top-1 -right-1 '>
              {numberOfProducts}
            </Badge>
            <Image
              width={24}
              height={24}
              src={'/assets/images/icons/shopping-bag.svg'}
              alt='Cart Icon'
            />
          </Button>
        </SheetTrigger>

        <SheetContent className=' h-full lg:max-w-[440px] flex flex-col bg-white '>
          <SheetHeader>
            <SheetTitle>Shopping Cart ({numberOfProducts})</SheetTitle>
          </SheetHeader>

          <div className='flex-1 overflow-auto scroll pr-8 divide-y'>
            {numberOfProducts === 0 && (
              <div className='flex flex-col gap-8 items-center justify-center h-full text-gray-500'>
                <div className='flex flex-col gap-8 items-center justify-center'>
                  <Lottie
                    height={300}
                    width={300}
                    options={{
                      animationData: LottieFile,
                      loop: true,
                      autoplay: true,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />

                  <p>Your cart is empty!</p>
                </div>

                <ShopNowButton />
              </div>
            )}

            {numberOfProducts > 0 &&
              getCartProducts(siteConfig.popularProducts).map((product) => {
                return <CartItem key={product.name} product={product} />;
              })}
          </div>

          {numberOfProducts > 0 && (
            <SheetFooter className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <p className='text-base font-normal text-gray-900'>
                  {numberOfProducts} Product
                </p>
                <p className='text-base font-semibold text-gray-900'>
                  $
                  {getCartProducts(siteConfig.popularProducts)
                    .reduce((a, b) => a + b.price * b.cartQuantity, 0)
                    .toFixed(2)}
                </p>
              </div>

              <div className='mt-5 space-y-3'>
                <SheetClose asChild>
                  <Button className='w-full rounded-full' type='submit'>
                    Checkout
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    className='w-full rounded-full bg-green-gray-50 hover:bg-green-gray-100 text-primary'
                    type='submit'
                  >
                    Go To Cart
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
      <div>
        <p className='text-gray-700 text-xs'>Shopping Cart :</p>
        <p className='text-gray-900 text-sm font-medium'>
          $
          {getCartProducts(siteConfig.popularProducts)
            .reduce((a, b) => a + b.price * b.cartQuantity, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};
