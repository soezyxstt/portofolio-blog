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
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {ChevronUp} from "lucide-react";

export default function Dashboard() {
  function handleScroll() {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div
      id='home'
      className='h-dvh overflow-hidden flex flex-col w-full justify-end relative pb-[20vh] bg-dashboard bg-cover bg-center bg-no-repeat'>
      {['I am a web developer', 'Creative software & 3D designer'].map(
        (text, index) => (
          <div
            className='relative flex text-[3rem] md:text-[5.5rem] text-transparent z-10'
            key={text}
          >
            {text[0]}
            <Text
              text={text}
              index={index}
            />
          </div>
        )
      )}
      <div className="absolute w-full h-full bg-background/20 top-0 left-0 z-0"></div>
      <div
        onClick={handleScroll}
        className='absolute left-1/2 -translate-x-1/2 text-sm md:text-base bottom-0 pb-2 md:pb-4 flex justify-center cursor-pointer transition hover:-translate-y-3 hover:text-text text-muted duration-500'>
        Scroll
        <div className="absolute top-0 -translate-y-full *:-translate-x-1/2">
          <ChevronUp className='absolute bottom-0 animate-fading'
                     style={{animationDelay: "0s", animationDuration: "1.5s"}}/>
          <ChevronUp className='absolute bottom-3 md:bottom-4 animate-fading'
                     style={{animationDelay: "0.5s", animationDuration: "1.5s"}}/>
          <ChevronUp className='absolute bottom-6 md:bottom-8 animate-fading'
                     style={{animationDelay: "1s", animationDuration: "1.5s"}}/>
        </div>
      </div>
    </div>
  );
}

function Text({text, index}: { text: string; index: number }) {
  const [ref, {width}] = useMeasure();
  const isDesktop = useMediaQuery('(min-width: 768px)', {initializeWithValue: false});
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
  const gap = isDesktop ? 30 : 20;
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
          'flex *:text-text',
          index === 1 && '*:text-transparent [-webkit-text-stroke:_1px_white] md:[-webkit-text-stroke:_2px_white]'
        )}
        ref={scope}
        style={{gap: gap}}
      >
        <h2
          className='flex gap-[0.25em]'
          ref={ref}
        >
          {text.split(' ').slice(0, -1).map((word) => (<span key={text + word}>{word}</span>))}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
            <Interpunct style={{marginLeft: gap}}/>
          </div>
        </h2>
        <h2
          className='flex gap-[0.25em]'
        >
          {text.split(' ').slice(0, -1).map((word) => (<span key={text + word}>{word}</span>))}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
            <Interpunct style={{marginLeft: gap}}/>
          </div>
        </h2>
        <h2
          className='flex gap-[0.25em]'
        >
          {text.split(' ').slice(0, -1).map((word) => (<span key={text + word}>{word}</span>))}
          <div className='flex'>
            {lastWord.split('').map((char, index) => (
              <div
                key={text + lastWord + index}
                className={`div-${lastWord}-${index}`}
              >
                {char}
              </div>
            ))}
            <Interpunct style={{marginLeft: gap}}/>
          </div>
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
