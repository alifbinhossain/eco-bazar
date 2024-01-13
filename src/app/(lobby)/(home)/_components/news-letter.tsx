'use client';

import { SearchBox } from '@/components/search-box';
import { siteConfig } from '@/config/site';
import { getSocialIcon } from '@/lib/utils';
import Link from 'next/link';

export const NewsLetter = () => {
  return (
    <section className='py-12'>
      <div className='container flex items-center justify-between'>
        <div className='w-[448px]'>
          <h4 className='text-2xl text-gray-900 font-semibold'>
            Subscribe our Newsletter
          </h4>
          <p className='mt-2 text-sm text-gray-400 font-normal'>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        <SearchBox
          disableIcon
          containerClass='rounded-full'
          buttonClass='rounded-full'
          inputContainerClass='rounded-l-full border-transparent'
          placeholder='Your Email Address'
          buttonText='Subscribe'
          handleClick={(e) => {
            alert(e.current?.value);
          }}
        />

        <div className='flex items-center gap-4 '>
          {siteConfig.socials.map((e) => {
            const SocialIcon = getSocialIcon(e.platform);
            return (
              <Link
                target='_blank'
                className='h-10 w-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 ease-in'
                key={e.platform}
                href={e.url}
              >
                <SocialIcon size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
