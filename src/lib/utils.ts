import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { FaFacebookF as Facebook, FaWhatsapp } from 'react-icons/fa';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export const getAmountByPercentage = (
  amount: number,
  percentage: number
): number => {
  return amount - (amount / 100) * percentage;
};

export const getSocialIcon = (platform: ISocialPlatform) => {
  switch (platform) {
    case 'facebook':
      return Facebook;
    case 'whatsapp':
      return FaWhatsapp;
    default:
      return Facebook;
  }
};
