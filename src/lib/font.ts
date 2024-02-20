import { Merriweather, Rajdhani, Kanit } from 'next/font/google';
import { Roboto_Mono, Quicksand } from 'next/font/google';

const merriweather = Merriweather({
  weight: '700',
  display: 'swap',
  variable: '--font-merriweather',
  subsets: ['latin'],
});

const rajdhani = Rajdhani({
  weight: '500',
  display: 'swap',
  variable: '--font-rajdhani',
  subsets: ['latin'],
});

const kanit = Kanit({
  weight: '700',
  display: 'swap',
  variable: '--font-kanit',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const quicksand = Quicksand({
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export { merriweather, rajdhani, kanit, robotoMono, quicksand };
