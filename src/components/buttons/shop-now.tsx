'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

export const ShopNowButton: React.FC<ButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        'gap-4 rounded-full px-6 py-3 lg:px-10 lg:py-4 h-max text-sm lg:text-base',
        className
      )}
      {...props}
    >
      Shop Now
      <Image
        width={16}
        height={16}
        src={'/assets/images/icons/arrow-right.svg'}
        alt='Right Arrow'
      />
    </Button>
  );
};
