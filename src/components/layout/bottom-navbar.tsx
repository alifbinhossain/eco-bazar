'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

import { Button } from '../ui/button';

export const BottomNavbar = () => {
  const pathName = usePathname();
  return (
    <div className='bg-gray-50'>
      <div className='container flex   items-center justify-between'>
        <div className='flex gap-8 items-center'>
          <Button className='group gap-3 rounded-none py-4 px-8 h-max text-sm relative active:scale-100 transition-none'>
            <Menu />
            All Categories
            <Image
              height={16}
              width={16}
              className='group-hover:rotate-180 transition-transform duration-300'
              src={'/assets/images/icons/chevron-down.svg'}
              alt='Chevron Down'
            />
            <div
              className='absolute bottom-0 left-0 right-0 bg-white translate-y-full h-0 group-hover:h-max transition-all duration-200
            border overflow-hidden'
            >
              <ul className='flex flex-col'>
                {siteConfig.categories.map((e) => (
                  <li
                    key={e.name}
                    className='px-5 py-4 border-b  text-gray-900  hover:bg-primary-dark hover:text-white  transition-colors duration-150'
                  >
                    <Link href={e.href} className='flex items-center gap-3  '>
                      <Image
                        src={e.icon.light}
                        alt={e.name}
                        height={24}
                        width={24}
                      />

                      {e.name}
                    </Link>
                  </li>
                ))}

                <li className='px-5 py-4  text-gray-900  hover:bg-primary-dark hover:text-white  transition-colors duration-150'>
                  <Link href={'/'} className='flex items-center gap-2'>
                    <Image
                      height={16}
                      width={16}
                      className='group-hover:rotate-180 transition-transform duration-300'
                      src={'/assets/images/icons/plus.svg'}
                      alt='Plus Icon'
                    />
                    View all Category
                  </Link>
                </li>
              </ul>
            </div>
          </Button>

          <ul className='flex gap-8 items-center'>
            {siteConfig.mainNavItems.map((e) => (
              <li key={e.name}>
                <Link
                  className={cn(
                    'text-sm font-medium flex items-center gap-2 ',
                    pathName === e.href ? 'text-primary' : 'text-gray-500'
                  )}
                  href={e.href}
                >
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className='text-gray-900 flex items-center gap-2  text-sm font-medium'>
          <Image
            height={28}
            width={28}
            src={'/assets/images/icons/phone.svg'}
            alt='Phone Icon'
          />
          <span>(219) 555-0114</span>
        </p>
      </div>
    </div>
  );
};
