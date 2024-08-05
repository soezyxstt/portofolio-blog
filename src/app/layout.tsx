import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { name } from '@/data';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

const montserrat = Montserrat({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'adihnursyam',
  description: `Portfolio website for ${name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(montserrat.className, 'text-text')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
