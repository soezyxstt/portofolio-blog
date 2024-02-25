import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/util/themeProvider';
import { Toaster } from '@/components/ui/sonner';
import { nunitoSans } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Soezyxst',
  description: 'A Portfolio Website of Adi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.className} overflow-auto h-dvh relative`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
