'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

import { Input } from './ui/input';
import { Button } from './ui/button';

interface ISearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
  containerClass?: string;
  inputClass?: string;
  buttonClass?: string;
}

export const SearchBox = React.forwardRef<HTMLInputElement, ISearchBoxProps>(
  ({ onClick, containerClass, inputClass, buttonClass, ...props }, ref) => {
    return (
      <div className={cn('w-[498px] grid grid-cols-4', containerClass)}>
        <div className='col-span-3 flex items-center gap-2  py-3 px-4 border rounded-l-[6px]'>
          <Search />
          <Input
            placeholder='Search'
            className={cn(
              'border-none p-0 h-max rounded-none focus-visible:ring-offset-0 focus-visible:ring-0 text-base placeholder:text-base',
              inputClass
            )}
            ref={ref}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value) {
                onClick();
              }
            }}
            {...props}
          />
        </div>

        <Button
          onClick={() => {
            if (ref !== null) {
              onClick();
            }
          }}
          className={cn(
            'rounded-none h-full w-full rounded-r-[6px]',
            buttonClass
          )}
        >
          Search
        </Button>
      </div>
    );
  }
);

SearchBox.displayName = 'SearchBox';
