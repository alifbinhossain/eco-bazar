import type { Metadata } from 'next';

import '../styles/globals.css';

import { cn } from '@/lib/utils';
import { fontPoppins } from '@/lib/fonts';

import Navbar from '@/components/layout/navbar/navbar';
import { BottomNavbar } from '@/components/layout/bottom-navbar';
import { Toaster } from '@/components/ui/sonner';
import { ShopProvider } from '@/components/providers/shop-provider';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
