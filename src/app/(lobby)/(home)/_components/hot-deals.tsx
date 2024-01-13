import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ProductCard } from '@/components/cards/product-card/product-card';

export const HotDeals = () => {
  return (
    <section className='bg-white py-24'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <h2>Hot Deals</h2>

          <Link
            href={'/'}
            className={buttonVariants({
              variant: 'ghost',
              className: 'gap-1 text-primary font-medium',
            })}
          >
            View All
            <ArrowRight />
          </Link>
        </div>

        <div className='mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border border-r-0 border-b-0'>
          {siteConfig.popularProducts.map((e) => (
            <ProductCard key={e.name} product={e} variant='hot-deals' />
          ))}
        </div>
      </div>
    </section>
  );
};
