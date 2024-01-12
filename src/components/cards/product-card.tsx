'use client';

import Image from 'next/image';

import { toast } from 'sonner';
import { getAmountByPercentage } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useShopContext } from '@/components/providers/shop-provider';

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { setCart } = useShopContext();

  return (
    <div className=' relative group p-4 border border-l-transparent border-t-transparent hover:border hover:border-primary-dark hover:shadow-2 hover:z-10  bg-white  transition-all duration-200 ease-in flex flex-col justify-between'>
      {product.discount && (
        <Badge
          variant={'destructive'}
          className='w-fit px-2 py-1 rounded font-normal'
        >
          Sale {100 - product.discount}%
        </Badge>
      )}
      <div className='absolute top-3 right-3 flex flex-col gap-2 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-transform duration-200 ease-in'>
        <Button
          variant={'outline'}
          size={'icon'}
          className='rounded-full bg-white'
        >
          <Image
            height={20}
            width={20}
            src={'/assets/images/icons/heart.svg'}
            alt='Heart Icon'
          />
        </Button>
        <Button
          variant={'outline'}
          size={'icon'}
          className='rounded-full bg-white'
        >
          <Image
            height={20}
            width={20}
            src={'/assets/images/icons/eye.svg'}
            alt='Heart Icon'
          />
        </Button>
      </div>

      <Image width={254} height={230} src={product.image} alt={product.name} />

      <div className='mt-4 flex justify-between items-center'>
        <div>
          <p className='text-sm  text-gray-700  group-hover:text-primary-dark'>
            {product.name}
          </p>

          {product.discount && (
            <p className='text-base space-x-1 '>
              <span className='font-medium text-gray-900'>
                $
                {getAmountByPercentage(product.price, product.discount).toFixed(
                  2
                )}
              </span>

              <span className='text-gray-400 line-through'>
                ${product.price.toFixed(2)}
              </span>
            </p>
          )}
          {!product.discount && (
            <p className='text-base font-medium text-gray-900 '>
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        <Button
          onClick={() => {
            setCart(product.id);
            toast('Added to Cart', {
              icon: '🛒',
            });
          }}
          variant={'secondary'}
          size={'icon'}
          className='rounded-full group-hover:bg-primary'
        >
          <Image
            className='group-hover:hidden'
            width={20}
            height={20}
            src={'/assets/images/icons/shopping-bag.svg'}
            alt='Shopping Bag'
          />
          <Image
            className='hidden group-hover:block'
            width={20}
            height={20}
            src={'/assets/images/icons/bag-white.svg'}
            alt='Shopping Bag'
          />
        </Button>
      </div>
    </div>
  );
};
