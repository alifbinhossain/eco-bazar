'use client';

import Image from 'next/image';
import { useState } from 'react';

import { toast } from 'sonner';
import { Minus, Plus } from 'lucide-react';

import { siteConfig } from '@/config/site';
import { getAmountByPercentage } from '@/lib/utils';

import { useShopContext } from '@/components/providers/shop-provider';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { SharePost } from '@/components/share-post';
import Link from 'next/link';

export const PreviewProduct: React.FC<{ product: IProduct }> = ({
  product,
}) => {
  const { getCartProducts, addToCart } = useShopContext();
  const currentQuantity = getCartProducts(siteConfig.popularProducts).find(
    (item) => item.id === product.id
  )?.cartQuantity;

  const [quantity, setQuantity] = useState(currentQuantity || 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className='p-10 sm:max-w-[1320px] bg-white'>
        <div className='flex'>
          <Image
            height={556}
            width={556}
            src={product.image}
            alt={product.name}
          />

          <div className='flex-1'>
            <div className='flex items-center gap-2 '>
              <h2 className='capitalize'>{product.name}</h2>
              {product.status === 'in_stock' && (
                <Badge variant={'success'} size={'badge'}>
                  In Stock
                </Badge>
              )}

              {product.status === 'out_stock' && (
                <Badge
                  variant={'destructive'}
                  size={'badge'}
                  className='bg-destructive/10 hover:bg-destructive/30 text-destructive'
                >
                  Out of Stock
                </Badge>
              )}
            </div>

            {product.available_stocks && (
              <p className='mt-3 text-sm font-medium text-gray-800'>
                Available Stocks :{' '}
                <span className='text-gray-600 font-normal'>
                  {product.available_stocks}
                </span>
              </p>
            )}

            {product.discount && (
              <div className='flex items-center mt-6 gap-3'>
                <div className='flex items-center  gap-1'>
                  <p className='line-through text-lg'>
                    ${product.price.toFixed(2)}
                  </p>
                  <p className='text-primary-dark text-2xl font-medium'>
                    $
                    {getAmountByPercentage(
                      product.price,
                      product.discount
                    ).toFixed(2)}
                  </p>
                </div>

                <Badge
                  variant={'destructive'}
                  size={'badge'}
                  className='px-3 rounded-full bg-destructive/10 text-destructive hover:bg-destructive/30'
                >
                  {product.discount}% Off
                </Badge>
              </div>
            )}
            {!product.discount && (
              <p className='mt-6 text-primary-dark text-2xl font-medium'>
                ${product.price.toFixed(2)}
              </p>
            )}

            <Separator className='w-full my-6' />

            <div className='flex items-center gap-2'>
              <p className='text-sm font-normal text-gray-900'>Share Item :</p>
              <SharePost url='/' platforms={['facebook', 'whatsapp']} />
            </div>
            <p className='mt-4 line-clamp-8 text-gray-500 text-sm font-normal leading-[150%]'>
              {product.description}
            </p>

            <div className='mt-6 py-4 border-y flex justify-between items-stretch gap-3 '>
              <div className='flex items-center p-2 rounded-full border'>
                <Button
                  onClick={() => {
                    setQuantity(Math.max(1, quantity - 1));
                  }}
                  size={'icon'}
                  variant={'secondary'}
                  className='rounded-full'
                >
                  <Minus size={14} />
                </Button>

                <p className='w-10 text-center'>{quantity}</p>
                <Button
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                  size={'icon'}
                  variant={'secondary'}
                  className='rounded-full'
                >
                  <Plus size={14} />
                </Button>
              </div>

              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    quantity,
                  });

                  toast('Added to Cart', {
                    icon: '🛒',
                  });
                }}
                className='rounded-full flex-1 flex items-center justify-center gap-4 bg-primary'
              >
                <p className='text-white text-base font-semibold'>
                  Add to Cart
                </p>
                <Image
                  width={16}
                  height={16}
                  src={'/assets/images/icons/cart.svg'}
                  alt='Bag'
                />
              </button>

              <button className='w-[52px] h-[52px] rounded-full bg-[#20B5261A]/10 flex items-center justify-center'>
                <Image
                  height={20}
                  width={20}
                  src={'/assets/images/icons/heart.svg'}
                  alt={'Wishlist Icon'}
                />
              </button>
            </div>

            <p className='mt-6 text-sm font-medium text-gray-900'>
              Category :{' '}
              <span className='text-gray-500 font-normal'>
                {product.category}
              </span>
            </p>
            {product.tags?.length ? (
              <p className='mt-3 text-sm font-medium text-gray-900 flex items-center gap-2'>
                Tags :{' '}
                <div className='space-x-1.5'>
                  {product.tags.map((tag) => (
                    <Link
                      href={'/'}
                      key={tag}
                      className='text-gray-500 font-normal hover:underline hover:text-gray-900'
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </p>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
