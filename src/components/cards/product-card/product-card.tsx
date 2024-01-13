import Image from 'next/image';

import { cn, getAmountByPercentage } from '@/lib/utils';

import { MyCountDown } from '@/components/my-countdown';
import { Badge } from '@/components/ui/badge';
import { AddProductToCart } from './_actions/add-product-to-cart';
import { PreviewProduct } from './_actions/preview-product';
import { AddProductToWishlist } from './_actions/add-product-to-wishlist';

interface Props {
  product: IProduct;
  variant?: 'popular' | 'hot-deals';
}

export const ProductCard: React.FC<Props> = ({ product, variant }) => {
  return (
    <div
      className={cn(
        ' relative group  border border-l-transparent border-t-transparent hover:border hover:border-primary-dark hover:shadow-2 hover:z-10  bg-white  transition-all duration-300 ease-in flex flex-col justify-between'
      )}
    >
      {product.discount && (
        <div className='absolute top-4 left-4 z-10'>
          <Badge variant={'destructive'} size={'badge'}>
            Sale {product.discount}%
          </Badge>
        </div>
      )}

      <div className=' absolute top-3 right-3 z-10 flex flex-col gap-2 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-transform duration-200 ease-in'>
        <AddProductToWishlist product={product} />
        <PreviewProduct product={product} />
      </div>

      <div className='p-4 pb-0  flex justify-center'>
        <div className={cn(' relative  h-[230px] aspect-[127/115]')}>
          <Image fill src={product.image} alt={product.name} />
        </div>
      </div>

      {variant === 'hot-deals' && (
        <div className='bg-gray-50/50  py-4 flex flex-col items-center'>
          <p className='text-sm text-gray-400 text-center'>
            Hurry up offer ends in
          </p>
          <MyCountDown date={new Date('2024-02-02')} className='mt-2' />
        </div>
      )}

      <div className={cn('p-4 pt-0 mt-4 flex justify-between items-center')}>
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

        <AddProductToCart product={product} />
      </div>
    </div>
  );
};
