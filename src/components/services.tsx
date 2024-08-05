'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { animate, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Services() {
  return (
    <div
      id='services'
      className='min-h-screen bg-background w-full relative py-24 overflow-x-hidden'
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='relative'
      >
        <Skills />
      </motion.div>
    </div>
  );
}

function Skills() {
  const isDesktop = useMediaQuery('(min-width: 768px)', {
    initializeWithValue: false,
  });
  const xTranslation = useMotionValue(0);
  const overlappedW = isDesktop ? 280 : 220;
  const finalX = -overlappedW * skills.length;
  useEffect(() => {
    const controls = animate(xTranslation, [0, finalX], {
      duration: 30,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [xTranslation, finalX]);
  return (
    <motion.div
      className='absolute left-0'
      style={{ x: xTranslation }}
    >
      {skills.map((skill, index) => (
        <div
          key={skill.title}
          className='rounded-[50%] border border-border w-[240px] md:w-[320px] h-[120px] md:h-[160px] absolute flex items-center justify-center'
          style={{ left: index * overlappedW }}
        >
          <div className='flex gap-2 md:gap-4 items-center text-muted'>
            <Image
              src={skill.logo}
              alt={skill.title}
              width={skill.title === 'Solidworks' ? overlappedW * 0.55 : 32}
              height={32}
              className='text-background'
            />
            <h4>{skill.title === 'Solidworks' || skill.title}</h4>
          </div>
        </div>
      ))}
      {skills.map((skill, index) => (
        <div
          key={skill.title}
          className='rounded-[50%] border border-border w-[240px] md:w-[320px] h-[120px] md:h-[160px] absolute flex items-center justify-center'
          style={{ left: index * overlappedW + overlappedW * skills.length  }}
        >
          <div className='flex gap-2 md:gap-4 items-center text-muted'>
            <Image
              src={skill.logo}
              alt={skill.title}
              width={skill.title === 'Solidworks' ? overlappedW * 0.55 : isDesktop ? 32 : 24}
              height={isDesktop ? 32 : 24}
            />
            <h4>{skill.title === 'Solidworks' || skill.title}</h4>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

const skills = [
  {
    title: 'React',
    logo: '/svg/react.svg',
  },
  {
    title: 'Next.js',
    logo: '/svg/next-js.svg',
  },
  {
    title: 'TypeScript',
    logo: '/svg/typescript.svg',
  },
  {
    title: 'Tailwind CSS',
    logo: '/svg/tailwind.svg',
  },
  {
    title: 'Framer Motion',
    logo: '/svg/framer-motion.svg',
  },
  {
    title: 'Prisma ORM',
    logo: '/svg/prisma.svg',
  },
  {
    title: 'PostgreSQL',
    logo: '/svg/postgresql.svg',
  },
  {
    title: 'Google Cloud',
    logo: '/svg/google-cloud.svg',
  },
  {
    title: 'Solidworks',
    logo: '/svg/solidworks.svg',
  },
];
