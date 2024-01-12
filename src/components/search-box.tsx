'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ISearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClick: (e: React.MutableRefObject<HTMLInputElement | null>) => void;
  containerClass?: string;
  inputClass?: string;
  buttonClass?: string;
}

export const SearchBox: React.FC<ISearchBoxProps> = ({
  handleClick,
  containerClass,
  inputClass,
  buttonClass,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={cn('w-[498px] grid grid-cols-4 bg-white', containerClass)}>
      <div className='col-span-3 flex items-center gap-2  py-3 px-4 border rounded-l-[6px]'>
        <Search />
        <Input
          placeholder='Search'
          className={cn(
            'bg-transparent border-none p-0 h-max rounded-none focus-visible:ring-offset-0 focus-visible:ring-0 text-base placeholder:text-base',
            inputClass
          )}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value) {
              handleClick(inputRef);
            }
          }}
          {...props}
        />
      </div>

      <Button
        onClick={() => {
          if (inputRef !== null && inputRef.current?.value) {
            handleClick(inputRef);
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
};

SearchBox.displayName = 'SearchBox';
