import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        dashboard: 'url(/images/dashboard.jpg)',
      },
      colors: {
        primary: '#EAEAEA',
        background: '#191c22',
        text: '#FFFFFF',
        muted: '#999999',
        border: 'hsla(0, 0%, 100%, 0.1)',
      },
      padding: {
        'main-md': '4rem',
        main: '2rem',
      },
      keyframes: {
        'burger-x-up': {
          '0%': {
            transform: 'translateY(0.25rem)',
            height: 'calc(1.414*0.125rem)',
          },
          '100%': { transform: 'translateY(0)' },
        },
        'burger-x-down': {
          '0%': {
            transform: 'translateY(-0.25rem)',
            height: 'calc(1.414*0.125rem)',
          },
          '100%': { transform: 'translateY(0)' },
        },
        'burger-x-cw': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'rotate(-45deg)' },
        },
        'burger-x-ccw': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'rotate(45deg)' },
        },
      },
      animation: {
        'burger-x-up':
          'burger-x-up 0.3s ease, burger-x-cw 0.3s ease 0.3s forwards',
        'burger-x-down':
          'burger-x-down 0.3s ease, burger-x-ccw 0.3s ease 0.3s forwards',
        'burger-x-up-close':
          'burger-x-up 0.3s ease 0.3s, burger-x-cw 0.3s ease 0s reverse',
        'burger-x-down-close':
          'burger-x-down 0.3s ease 0.3s, burger-x-ccw 0.3s ease 0s reverse',
      },
    },
  },
  plugins: [],
};
export default config;
