import {cn} from '@/lib/utils';
import {useEffect, useRef} from 'react';
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
import Interpunct from './ui/interpunct';

export default function Dashboard() {
  return (
    <div
      id='home'
      className='min-h-dvh h-dvh overflow-hidden flex flex-col w-full justify-end relative pb-[20vh] bg-dashboard bg-cover bg-center bg-no-repeat'>
      {['I am a web developer', 'Creative software & 3D designer'].map(
        (text, index) => (
          <div
            className='relative flex text-[3rem] md:text-[5.5rem] text-nowrap text-transparent'
            key={text}
          >
            {text}
            <Text
              text={text}
              index={index}
            />
          </div>
        )
      )}
      <div className="absolute -bottom-4 w-full h-8 bg-background rounded-t-[50%]"></div>
    </div>
  );
}

function Text({text, index}: { text: string; index: number }) {
  const [ref, {width}] = useMeasure();
  const lastWord = text.split(' ').slice(-1)[0];
  const colors: { [key: string]: string } = {
    designer: 'orange',
    developer: 'turquoise',
  };
  const step = index % 2 === 0 ? 1 : -1;
  const scope = useTimelineAnimation(
    [
      ...lastWord
        .split('')
        .map(
          (_char, i) =>
            [
              `.div-${lastWord}-${i}`,
              {scaleX: -1, color: colors[lastWord.toLowerCase()]},
              TRANSITION,
            ] as Animation
        ),
      ...lastWord
        .split('')
        .map(
          (_char, i) =>
            [
              `.div-${lastWord}-${i}`,
              {scaleX: 1, color: index === 1 ? 'transparent' : "white"},
              TRANSITION,
            ] as Animation
        ),
    ],
    Infinity
  );
  const gap = 30;
  const xTranslation = useMotionValue(0);
  const finalX = -(width + gap) * step;
  useEffect(() => {
    const controls = animate(xTranslation, [0, finalX], {
      duration: 20,
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
      className={`absolute bottom-0 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}
      style={{x: xTranslation}}
    >
      <div
        className={cn(
          'mix-blend-difference flex *:text-text',
          index === 1 && '*:text-transparent [-webkit-text-stroke:_2px_white]'
        )}
        ref={scope}
        style={{gap: gap}}
      >
        <h2
          className='flex'
          style={{gap: gap}}
          ref={ref}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
          <Interpunct/>
        </h2>
        <h2
          className='flex'
          style={{gap: gap}}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
          <Interpunct/>
        </h2>
        <h2
          className='flex'
          style={{gap: gap}}
        >
          {text.split(' ').slice(0, -1).join(' ')}{' '}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
          </div>
          <Interpunct/>
        </h2>
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

    void handleAnimate();

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
