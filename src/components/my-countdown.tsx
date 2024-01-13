'use client';

import Image from 'next/image';

import Countdown, {
  CountdownRenderProps,
  CountdownProps,
} from 'react-countdown';

import { cn } from '@/lib/utils';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className='flex items-center gap-2 justify-center'>
        <div className='flex flex-col items-center'>
          <span className='text-base text-gray-900 font-medium'>{days}</span>
          <span className='text-[10px] font-medium text-gray-400'>Days</span>
        </div>

        <Image
          width={4}
          height={24}
          src={'/assets/images/icons/collon.svg'}
          alt='Collon'
        />

        <div className='flex flex-col items-center'>
          <span className='text-base text-gray-900 font-medium'>{hours}</span>
          <span className='text-[10px] font-medium text-gray-400'>Hours</span>
        </div>

        <Image
          width={4}
          height={24}
          src={'/assets/images/icons/collon.svg'}
          alt='Collon'
        />

        <div className='flex flex-col items-center'>
          <span className='text-base text-gray-900 font-medium'>{minutes}</span>
          <span className='text-[10px] font-medium text-gray-400'>Minutes</span>
        </div>

        <Image
          width={4}
          height={2}
          src={'/assets/images/icons/collon.svg'}
          alt='Collon'
        />

        <div className='flex flex-col items-center'>
          <span className='text-base text-gray-900 font-medium'>{seconds}</span>
          <span className='text-[10px] font-medium text-gray-400'>Seconds</span>
        </div>
      </div>
    );
  }
};

export const MyCountDown: React.FC<
  Partial<CountdownProps> & { date: Date; className?: string }
> = ({ date, className, ...props }) => {
  return (
    <div className={cn(className)}>
      <Countdown date={date} renderer={renderer} {...props} />
    </div>
  );
};
