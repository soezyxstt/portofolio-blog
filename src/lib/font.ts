import { Merriweather, Rajdhani, Kanit } from 'next/font/google';

const merriweather = Merriweather({
  weight: '700',
  display: 'swap',
  variable: '--font-merriweather',
  subsets: ['latin']
});

const rajdhani = Rajdhani({
  weight: '500',
  display: 'swap',
  variable: '--font-rajdhani',
  subsets: ['latin']
});

const kanit = Kanit({
  weight: '700',
  display: 'swap',
  variable: '--font-kanit',
  subsets: ['latin']
});

export { merriweather, rajdhani, kanit };
