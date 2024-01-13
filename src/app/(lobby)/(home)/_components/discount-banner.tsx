import { ShopNowButton } from '@/components/buttons/shop-now';
import Image from 'next/image';

export const DiscountBanner = () => {
  return (
    <section className='pt-24 bg-white'>
      <div className='container p-14 h-[358px] relative rounded-[10px] overflow-hidden flex justify-end items-center'>
        <Image
          fill
          src={'/assets/images/discount-banner.png'}
          alt='Discount Banner'
        />

        <div className='relative z-10 max-w-[410px]'>
          <p className='text-base text-white font-medium'>Summer Sale</p>
          <h2 className='mt-3text-[3.5rem] space-x-2'>
            <span className='font-semibold text-warning '>37%</span>
            <span className='text-white font-normal'>OFF</span>
          </h2>
          <p className='mt-4 text-base text-white font-normal'>
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <ShopNowButton className='mt-7' />
        </div>
      </div>
    </section>
  );
};
