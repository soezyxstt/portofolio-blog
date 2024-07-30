import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { name } from '@/data';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soezyxst',
  description: `Portfolio website for ${name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(quicksand.className, 'bg-background text-white min-h-dvh')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
