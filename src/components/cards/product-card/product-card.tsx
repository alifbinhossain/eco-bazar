import Image from 'next/image';
import { getAmountByPercentage } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';
import { AddProductToCart } from './_actions/add-product-to-cart';
import { PreviewProduct } from './_actions/preview-product';
import { AddProductToWishlist } from './_actions/add-product-to-wishlist';

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className=' relative group p-4 border border-l-transparent border-t-transparent hover:border hover:border-primary-dark hover:shadow-2 hover:z-10  bg-white  transition-all duration-200 ease-in flex flex-col justify-between'>
      {product.discount && (
        <Badge variant={'destructive'} size={'badge'}>
          Sale {product.discount}%
        </Badge>
      )}
      <div className='absolute top-3 right-3 flex flex-col gap-2 invisible group-hover:visible translate-y-4 group-hover:translate-y-0 transition-transform duration-200 ease-in'>
        <AddProductToWishlist product={product} />
        <PreviewProduct product={product} />
      </div>

      <div className='flex justify-center'>
        <Image
          width={254}
          height={230}
          src={product.image}
          alt={product.name}
        />
      </div>

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

        <AddProductToCart product={product} />
      </div>
    </div>
  );
};
