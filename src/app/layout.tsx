import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { name } from '@/data';
import { cn } from '@/lib/utils';
import type {ReactNode} from "react";

const montserrat = Montserrat({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'adihnursyam',
  description: `Portfolio website for ${name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' className='relative overflow-x-hidden'>
      <body className={cn(montserrat.className, 'text-text')}>
        {children}
      </body>
    </html>
  );
}
