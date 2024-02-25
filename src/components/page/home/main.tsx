'use client';

import Navbar from '@/components/util/navbar';
import TopTracker from '@/components/util/topTracker';
import { useRef } from 'react';
import CursorFollower from '@/components/util/cursorFollower';
import { useEventListener } from '@/hooks/useEventListener';
import RightNav from '@/components/util/rightNav';
import Boxes from '@/components/boxes';

export default function Main({ children }: { children?: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const timeoutArray: NodeJS.Timeout[] = [];

  useEventListener(
    'scroll',
    () => {
      timeoutArray.forEach((timeout) => clearTimeout(timeout));

      const root = document.documentElement || document.body;
      const scroll = mainRef.current?.scrollTop || 0;
      const vh = window.innerHeight / 100;

      const current = Number(root.style.getPropertyValue('--scroll'));
      const dir = current > scroll ? 'up' : 'down';

      if (dir === 'up') {
        root.style.setProperty('--navbar-height', '4rem');
      } else {
        root.style.setProperty('--navbar-height', '0rem');
      }
      if (root) {
        root.style.setProperty('--scroll', scroll.toString());
        root.style.setProperty('--vh', vh.toString());
      }

      const typingName = document.getElementById('typing-name');

      if (scroll > 90 * vh && scroll < 150 * vh) {
        typingName?.classList.remove('animate-typing');
      } else {
        typingName?.classList.add('animate-typing');
      }

      if (scroll > 90 * vh) {
        timeoutArray.push(
          setTimeout(() => {
            root.style.setProperty('--navbar-height', '0rem');
          }, 1000)
        );
      }

      if (scroll >= 200 * vh - 10) {
        document
          .getElementsByClassName('about-me')[0]
          .classList.add('opacity-100');
      } else if (scroll >= 150 * vh) {
        document
          .getElementsByClassName('about-me')[0]
          .classList.remove('opacity-100');
      }

      const aboutCard = document.getElementsByClassName('about-card');
      if (aboutCard[0]) {
        if (scroll >= 190 * vh && scroll <= 280 * vh) {
          aboutCard[0].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 200 * vh) / 80 / vh, 0, 1)};`
          );
        }
        if (scroll >= 240 * vh && scroll <= 320 * vh) {
          aboutCard[1].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 240 * vh) / 80 / vh, 0, 1)};`
          );
        }
        if (scroll >= 280 * vh && scroll <= 360 * vh) {
          aboutCard[2].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 280 * vh) / 80 / vh, 0, 1)};`
          );
        }
        if (scroll >= 320 * vh && scroll <= 400 * vh) {
          aboutCard[3].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 320 * vh) / 80 / vh, 0, 1)};`
          );
        }
        if (scroll >= 360 * vh && scroll <= 440 * vh) {
          aboutCard[4].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 360 * vh) / 80 / vh, 0, 1)};`
          );
        }

        const startCard = 282.5;

        if (scroll >= startCard * vh) {
          aboutCard[0].setAttribute(
            'style',
            `transform: translateY(${scroll - startCard * vh}px);
          opacity: 1`
          );
        }
        if (scroll >= (startCard + 25) * vh && scroll <= 440 * vh) {
          aboutCard[1].setAttribute(
            'style',
            `transform: translateY(${
              scroll - (startCard + 25) * vh
            }px) translateX(120%);
          opacity: 1`
          );
        }
        if (scroll >= (startCard + 50) * vh && scroll <= 440 * vh) {
          aboutCard[2].setAttribute(
            'style',
            `transform: translateY(${scroll - (startCard + 50) * vh}px);
          opacity: 1`
          );
        }
        if (scroll >= (startCard + 75) * vh && scroll <= 440 * vh) {
          aboutCard[3].setAttribute(
            'style',
            `transform: translateY(${
              scroll - (startCard + 75) * vh
            }px) translateX(120%);
          opacity: 1`
          );
        }
        if (scroll >= (startCard + 100) * vh) {
          aboutCard[4].setAttribute(
            'style',
            `transform: translateY(${scroll - (startCard + 100) * vh}px);
          opacity: 1`
          );
        }
      }

      const mobileAboutCard =
        document.getElementsByClassName('mobile-about-card');
      const cardLine = document.getElementsByClassName('card-line');
      if (mobileAboutCard[0]) {
        if (scroll >= 190 * vh && scroll <= 220 * vh) {
          mobileAboutCard[0].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 160 * vh) / 40 / vh, 0, 1)};`
          );
          cardLine[0].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 190 * vh) / 30 / vh, 0, 1)};
            height: ${clamp((scroll - 200 * vh) / 20 / vh, 0, 1) * 20}vh;`
          );
        }
        if (scroll >= 220 * vh && scroll <= 260 * vh) {
          mobileAboutCard[1].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 200 * vh) / 40 / vh, 0, 1)};`
          );
          cardLine[1].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 220 * vh) / 40 / vh, 0, 1)};
            height: ${clamp((scroll - 220 * vh) / 40 / vh, 0, 1) * 20}vh;`
          );
        }
        if (scroll >= 260 * vh && scroll <= 300 * vh) {
          mobileAboutCard[2].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 240 * vh) / 60 / vh, 0, 1)};`
          );
          cardLine[2].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 260 * vh) / 40 / vh, 0, 1)};
            height: ${clamp((scroll - 260 * vh) / 40 / vh, 0, 1) * 20}vh;`
          );
        }
        if (scroll >= 300 * vh && scroll <= 360 * vh) {
          mobileAboutCard[3].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 300 * vh) / 60 / vh, 0, 1)};`
          );
          cardLine[3].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 300 * vh) / 60 / vh, 0, 1)};
            height: ${clamp((scroll - 300 * vh) / 60 / vh, 0, 1) * 20}vh;`
          );
        }
        if (scroll >= 340 * vh && scroll <= 440 * vh) {
          mobileAboutCard[4].setAttribute(
            'style',
            `opacity: ${clamp((scroll - 340 * vh) / 60 / vh, 0, 1)};`
          );
        }
        if (scroll >= 200 * vh && scroll <= 260 * vh) {
          mobileAboutCard[1].classList.add('animate-timeline-to-l');
          mobileAboutCard[1].classList.remove('translate-x-[120%]');
        } else if (scroll >= 260 * vh && scroll <= 330 * vh) {
          mobileAboutCard[2].classList.add('animate-timeline-to-r');
          mobileAboutCard[2].classList.remove('translate-x-[-120%]');
        } else if (scroll >= 300 * vh && scroll <= 370 * vh) {
          mobileAboutCard[1].classList.remove('animate-timeline-to-l');
          mobileAboutCard[1].classList.add('translate-x-[120%]');
          mobileAboutCard[3].classList.remove('translate-x-[120%]');
          mobileAboutCard[3].classList.add('animate-timeline-to-l');
        } else if (scroll >= 360 * vh) {
          mobileAboutCard[2].classList.remove('animate-timeline-to-r');
          mobileAboutCard[2].classList.add('translate-x-[-120%]');
          mobileAboutCard[4].classList.add('animate-timeline-to-r');
          mobileAboutCard[4].classList.remove('translate-x-[-120%]');
        } else {
          mobileAboutCard[1].classList.remove('animate-timeline-to-l');
          mobileAboutCard[2].classList.remove('animate-timeline-to-r');
          mobileAboutCard[3].classList.remove('animate-timeline-to-l');
          mobileAboutCard[4].classList.remove('animate-timeline-to-r');
          mobileAboutCard[1].classList.add('translate-x-[120%]');
          mobileAboutCard[2].classList.add('translate-x-[-120%]');
          mobileAboutCard[3].classList.add('translate-x-[120%]');
          mobileAboutCard[4].classList.add('translate-x-[-120%]');
        }
      }

      const rightNav = document.getElementById('right-nav');
      if (rightNav) {
        if (scroll > 0 && scroll < 100 * vh) {
          rightNav?.children[0].classList.add(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
          rightNav?.children[1].classList.remove(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
        } else if (scroll >= 100 * vh && scroll < 200 * vh) {
          rightNav?.children[1].classList.add(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
          rightNav?.children[0].classList.remove(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
          rightNav?.children[2].classList.remove(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
        } else if (scroll >= 200 * vh) {
          rightNav?.children[2].classList.add(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
          rightNav?.children[1].classList.remove(
            '!text-lg',
            'md:!text-xl',
            '!font-semibold',
            'text-teal-600'
          );
        }
        rightNav?.setAttribute('style', `right: 0;`);
        rightNav?.classList.add('pointer-events-none');
        timeoutArray.push(
          setTimeout(() => {
            rightNav?.setAttribute('style', `right: -100%;`);
          }, 1000)
        );
        timeoutArray.push(
          setTimeout(() => {
            rightNav?.classList.remove('pointer-events-none');
          }, 100)
        );
      }
    },
    mainRef
  );

  return (
    <main
      ref={mainRef}
      id='main'
      className='flex cursor-none h-full flex-col scroll-smooth items-center bg-black text-stone-200 *:flex snap-y snap-mandatory overflow-y-scroll relative '
    >
      <CursorFollower mainRef={mainRef} />
      <Navbar />
      <Boxes />
      <RightNav />
      <TopTracker mainRef={mainRef} />
      {children}
    </main>
  );
}

function clamp(num: number, min: number, max: number, tolerance = 0.1) {
  return num <= min + tolerance ? min : num >= max - tolerance ? max : num;
}
