import type { Metadata } from 'next';

import '../styles/globals.css';

import { cn } from '@/lib/utils';
import { fontPoppins } from '@/lib/fonts';
import { siteConfig } from '@/config/site';

import Navbar from '@/components/layout/navbar/navbar';
import { BottomNavbar } from '@/components/layout/bottom-navbar';
import { Toaster } from '@/components/ui/sonner';
import { ShopProvider } from '@/components/providers/shop-provider';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: 'alifbinhossain',
      url: 'https://alifbinhossain.vercel.app/',
    },
  ],
  creator: 'alifbinhossain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@AlifBinHossain2',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-poppins antialiased',
          fontPoppins.variable
        )}
      >
        <ShopProvider>
          <Navbar />
          <BottomNavbar />
          {children}
          <Toaster />
        </ShopProvider>
      </body>
    </html>
  );
}
