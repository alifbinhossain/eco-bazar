'use client';

import Image from 'next/image';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { useShopContext } from '@/components/providers/shop-provider';

interface Props {
  product: IProduct;
}
export const CartProduct: React.FC<Props> = ({ product }) => {
  const { removeCart } = useShopContext();
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
          <h6 className=' capitalize text-sm font-normal text-gray-900'>
            {product.name}
          </h6>

          <p className='text-gray-900 text-sm font-semibold'>
            $ {product.price.toFixed(2)}
          </p>
        </div>
      </div>

      <Button
        onClick={() => {
          removeCart(product.id);
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
