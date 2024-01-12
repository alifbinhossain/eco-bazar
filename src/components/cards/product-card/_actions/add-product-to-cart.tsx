'use client';

import Image from 'next/image';

import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useShopContext } from '@/components/providers/shop-provider';

export const AddProductToCart: React.FC<{ product: IProduct }> = ({
  product,
}) => {
  const { addToCart, removeFromCart, cart } = useShopContext();
  const isProductInCart = cart.find((item) => item.id === product.id);
  return (
    <Button
      onClick={() => {
        if (isProductInCart) {
          removeFromCart(product.id);
          toast('Removed from Cart');
          return;
        }
        addToCart({
          id: product.id,
          quantity: 1,
        });
        toast('Added to Cart', {
          icon: '🛒',
        });
      }}
      variant={'secondary'}
      size={'icon'}
      className={cn(
        'group rounded-full hover:bg-primary-dark',
        isProductInCart && 'bg-primary '
      )}
    >
      <Image
        className={cn('block', isProductInCart && 'hidden')}
        width={20}
        height={20}
        src={'/assets/images/icons/shopping-bag.svg'}
        alt='Shopping Bag'
      />
      <Image
        className={cn('hidden', isProductInCart && 'block')}
        width={20}
        height={20}
        src={'/assets/images/icons/bag-white.svg'}
        alt='Shopping Bag'
      />
    </Button>
  );
};
