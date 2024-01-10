import Image from 'next/image';

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
    <section className='py-14 bg-white'>
      <div className='container'>
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
    </section>
  );
};
