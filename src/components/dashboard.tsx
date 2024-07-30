import { cn } from '@/lib/utils';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useRef } from 'react';
import {
  animate,
  type DOMKeyframesDefinition,
  type DynamicAnimationOptions,
  type ElementOrSelector,
  motion,
  useAnimate,
  useMotionValue,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

const font = Space_Grotesk({ subsets: ['latin'] });

export default function Dashboard() {
  return (
    <div
      className={cn(
        'min-h-dvh flex flex-col w-full justify-end mix-blend-difference overflow-x-hidden relative pb-32 md:pb-0',
        font.className
      )}
    >
      {[
        "I'm a software engineer",
        "I'm a graphic designer",
        "I'm a web developer",
      ].map((text, index) => (
        <div
          className='relative flex text-[4.5rem] md:text-[8rem] text-nowrap uppercase text-black'
          key={text}
        >
          {text}
          <Text
            text={text}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

function Text({ text, index }: { text: string; index: number }) {
  const [ref, { width }] = useMeasure();
  const lastword = text.split(' ').slice(-1)[0];
  const colors: {[key: string]: string} = {
    engineer: 'orange',
    designer: 'magenta',
    developer: 'cyan',
  };
  const scope = useTimelineAnimation(
    [
      ...lastword
        .split('')
        .map(
          (_char, index) =>
            [
              `.div-${lastword}-${index}`,
              { scaleX: -1, color: colors[lastword.toLowerCase()] },
              TRANSITION,
            ] as Animation
        ),
      ...lastword
        .split('')
        .map(
          (_char, index) =>
            [
              `.div-${lastword}-${index}`,
              { scaleX: 1, color: 'white' },
              TRANSITION,
            ] as Animation
        ),
    ],
    Infinity
  );
  const step = index % 2 === 0 ? 1 : -1;
  const gap = 30;
  const xTranslation = useMotionValue(0);
  const finalX = (-(width + gap) / 3) * step;
  useEffect(() => {
    const controls = animate(xTranslation, [0, finalX], {
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [xTranslation, finalX]);

  return (
    <motion.div
      key={text}
      ref={ref}
      className={`absolute bottom-0 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}
      style={{ x: xTranslation }}
      whileHover={{ backgroundColor: 'maroon' }}
    >
      <div
        className='mix-blend-difference flex text-white '
        ref={scope}
        style={{ gap: gap }}
      >
        <p
          className='flex'
          style={{ gap: gap }}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastword.split('').map((char, index) => (
              <div
                key={text + lastword + index}
                className={`div-${lastword}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
        </p>
        <p
          className='flex'
          style={{ gap: gap }}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastword.split('').map((char, index) => (
              <div
                key={text + lastword + index}
                className={`div-${lastword}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
        </p>
        <p
          className='flex'
          style={{ gap: gap }}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastword.split('').map((char, index) => (
              <div
                key={text + lastword + index}
                className={`div-${lastword}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
        </p>
      </div>
    </motion.div>
  );
}

const TRANSITION: DynamicAnimationOptions = {
  duration: 0.2,
  ease: 'easeInOut',
  delay: 0.2,
};

type Animation = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?
];

type Keyframes = Animation | Keyframes[];

function useTimelineAnimation(keyframes: Keyframes[], count: number = 1) {
  const [scope, animate] = useAnimate();
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, []);

  async function processAnimation(keyframe: Keyframes) {
    if (Array.isArray(keyframe[0])) {
      await Promise.all(
        keyframe.map(async (frame) => {
          await processAnimation(frame as Animation);
        })
      );
    } else {
      await animate(...(keyframe as Animation));
    }
  }

  async function handleAnimate() {
    for (let i = 0; i < count; i++) {
      for (const keyframe of keyframes) {
        if (!mounted.current) return;

        await processAnimation(keyframe);
      }
    }
  }
  return scope;
}
