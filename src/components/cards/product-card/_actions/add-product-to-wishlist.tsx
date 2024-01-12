'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const AddProductToWishlist: React.FC<{ product: IProduct }> = ({
  product,
}) => {
  return (
    <Button variant={'outline'} size={'icon'} className='rounded-full bg-white'>
      <Image
        height={20}
        width={20}
        src={'/assets/images/icons/heart.svg'}
        alt='Heart Icon'
      />
    </Button>
  );
};
