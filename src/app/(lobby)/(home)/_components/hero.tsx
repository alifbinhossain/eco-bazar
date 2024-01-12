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
      <div className='container overflow-hidden lg:overflow-visible'>
        <Carousel className='w-full'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className=' flex flex-col-reverse xl:flex-row xl:items-center gap-5'>
                  <div className='relative w-[320px] sm:w-[500px] md:w-[600px] 2xl:w-[795px] aspect-[265/188] '>
                    <Image
                      fill
                      src={'/assets/images/hero-banner.png'}
                      alt='Hero Banner'
                    />
                  </div>

                  <div className='flex-1'>
                    <p className='text-sm italic'>Welcome to Eco Bazar</p>
                    <h1>
                      Fresh & Healthy <br /> Organic Food
                    </h1>
                    <p className='mt-3 lg:mt-5 text-green-gray-500'>
                      Free shipping on all your order. we deliver, you enjoy
                    </p>

                    <Button className='mt-8 rounded-full px-6 py-3 lg:px-10 lg:py-4 h-max text-sm lg:text-base'>
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='invisible lg:visible' />
          <CarouselNext className='invisible lg:visible' />
        </Carousel>
      </div>

      <div className='lg:absolute left-0 right-0 bottom-0 lg:translate-y-1/2 '>
        <div className='container bg-white rounded-md h-full shadow-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
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
