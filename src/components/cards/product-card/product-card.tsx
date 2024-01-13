import Image from 'next/image';
import { cn, getAmountByPercentage } from '@/lib/utils';

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
        ' relative group p-4 border border-l-transparent border-t-transparent hover:border hover:border-primary-dark hover:shadow-2 hover:z-10  bg-white  transition-all duration-300 ease-in flex flex-col justify-between',
        variant === 'hot-deals' &&
          'hover:col-span-2 hover:row-span-2 hover:last:row-span-3'
      )}
    >
      {product.discount && (
        <Badge variant={'destructive'} size={'badge'}>
          Sale {product.discount}%
        </Badge>
      )}

      {variant !== 'hot-deals' && (
        <div className='absolute top-3 right-3 flex flex-col gap-2 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-transform duration-200 ease-in'>
          <AddProductToWishlist product={product} />
          <PreviewProduct product={product} />
        </div>
      )}

      <div className='flex justify-center'>
        <div
          className={cn(
            ' relative  h-[230px] aspect-[127/115]',
            variant === 'hot-deals' && 'group-hover:h-[446px]'
          )}
        >
          <Image fill src={product.image} alt={product.name} />
        </div>
      </div>

      {variant === 'hot-deals' && (
        <div className='hidden group-hover:flex items-center'>
          <AddProductToWishlist product={product} />
          <PreviewProduct product={product} />
        </div>
      )}

      <div
        className={cn(
          'mt-4 flex justify-between items-center',
          variant === 'hot-deals' && 'group-hover:hidden'
        )}
      >
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
