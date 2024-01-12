'use client';

import Image from 'next/image';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { useShopContext } from '@/components/providers/shop-provider';

interface Props {
  product: ICartProduct;
}
export const CartItem: React.FC<Props> = ({ product }) => {
  const { removeFromCart } = useShopContext();
  return (
    <div className='flex items-center justify-between py-2'>
      <div className='flex items-center gap-2'>
        <Image
          width={120}
          height={100}
          src={product.image}
          alt={product.name}
        />

        <div>
          <h6 className='capitalize text-sm font-normal text-gray-900'>
            {product.name}
          </h6>

          <p className='mt-1 text-sm  space-x-1'>
            <span className='font-normal text-gray-500'>
              {product.cartQuantity} {product.unit}
            </span>
            <span className='font-normal text-gray-500'>x</span>
            <span className='font-semibold text-gray-900'>
              $ {product.price.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <Button
        onClick={() => {
          removeFromCart(product.id);
          toast('Product removed from cart');
        }}
        variant={'ghost'}
        size={'icon'}
        className='rounded-full'
      >
        <Image
          width={24}
          height={24}
          src={'/assets/images/icons/close.svg'}
          alt='Close Icon'
        />
      </Button>
    </div>
  );
};
