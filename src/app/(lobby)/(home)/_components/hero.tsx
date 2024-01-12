import Image from 'next/image';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className='pt-14 pb-48 bg-white relative'>
      <div className='container '>
        <Carousel className='w-full'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className=' flex items-center gap-5'>
                  <Image
                    height={564}
                    width={795}
                    src={'/assets/images/hero-banner.png'}
                    alt='Hero Banner'
                  />

                  <div>
                    <p className='text-sm italic'>Welcome to Eco Bazar</p>
                    <h1>
                      Fresh & Healthy <br /> Organic Food
                    </h1>
                    <p className='mt-5 text-green-gray-500'>
                      Free shipping on all your order. we deliver, you enjoy
                    </p>

                    <Button className='mt-8 rounded-full px-10 py-4 h-max text-base'>
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className='absolute left-0 right-0 bottom-0 translate-y-1/2 '>
        <div className='container bg-white rounded-md h-full shadow-1 grid grid-cols-4'>
          {siteConfig.services.map((e) => (
            <div
              key={e.title}
              className=' p-10 border-r last:border-none first:rounded-l-md last:rounded-r-md group hover:bg-primary transition-all duration-200 ease-in'
            >
              <div className='bg-white w-16 h-16 rounded-full p-4 border border-gray-100  '>
                <Image width={40} height={40} src={e.icon} alt={e.title} />
              </div>

              <h6
                className={cn(
                  ' mt-4 text-lg font-semibold  text-gray-900 group-hover:text-white'
                )}
              >
                {e.title}
              </h6>
              <p
                className={cn(
                  'mt-1 text-sm  text-gray-400 group-hover:text-white'
                )}
              >
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
