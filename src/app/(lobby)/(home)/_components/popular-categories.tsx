import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { siteConfig } from '@/config/site';

import { buttonVariants } from '@/components/ui/button';
import { CategoryCard } from '@/components/cards/category-card';

interface Props {
  categories?: IPopularCategory[];
}
export const PopularCategories: React.FC<Props> = ({ categories }) => {
  //NOTE: categories array will use later when api is ready

  return (
    <section className='pt-20 lg:pt-48'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <h2>Popular Categories</h2>

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

        <div className='mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6'>
          {siteConfig.popularCategories.map((e) => (
            <CategoryCard key={e.name} category={e} />
          ))}
        </div>
      </div>
    </section>
  );
};
