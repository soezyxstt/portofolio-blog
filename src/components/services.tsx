import {useMediaQuery} from '@/hooks/useMediaQuery';
import {animate, motion, useMotionValue} from 'framer-motion';
import Image from 'next/image';
import {type ReactNode, useEffect} from 'react';
import {FlipWords} from "@/components/ui/flip-words";
import {Cable, FileBox, Webhook} from "lucide-react";
import PinContainer from "@/components/aceternity/3d-pin";

const initial = {opacity: 0, y: 10};
const whileInView = {opacity: 1, y: 0};
const transition = {duration: 0.5, ease: 'easeInOut', delay: 0.3};

export default function Services() {
  return (
    <>
      <div
        id='services'
        className='h-max bg-background w-full min-h-screen relative overflow-hidden pt-32 space-y-10'
      >
        <div className="md:pl-20 space-y-10 md:space-y-16 px-6">
          <motion.div initial={initial} whileInView={whileInView} transition={transition} className="md:space-y-6">
            <h2
              className='text-text text-2xl md:text-5xl'>{"More than just design,"}</h2>
            <h2
              className='text-text text-2xl md:text-5xl'>{"It's"} <span>all about <FlipWords
              words={["pleasing", "convenient", "appealing"]}/> experiences</span></h2>
          </motion.div>
          <Cards/>
        </div>
      </div>
      <Skills/>
    </>
  );
}

function Cards() {
  return (
    <div className='relative flex gap-8 md:gap-12 flex-col md:flex-row items-center'>
      <Card
        title='UI/UX Design'
        description='Designing user interfaces and user experiences that are intuitive, engaging, and visually appealing.'
        Icon={Cable}
      >
        <Image src={'/images/figma.png'} alt={'Figma'} width={300} height={300}
               className='w-44 aspect-video border-muted border rounded-lg'/>
      </Card>
      <Card
        title='Web Development'
        description='Building responsive and performant web applications with modern technologies and best practices.'
        Icon={Webhook}
      >
        <Image src={'/images/web-pemira.png'} alt={'Pemira KM ITB'} width={300} height={300}
               className='w-44 aspect-video border-muted border rounded-lg'/>
      </Card>
      <Card
        title='3D Modeling'
        description='Creating 3D models and visualizations for products, prototypes, and architectural designs.'
        Icon={FileBox}
      >
        <Image src={'/images/model.png'} alt={'3D Model'} width={300} height={300}
               className='w-44 aspect-video border-muted border rounded-lg'/>
      </Card>
    </div>
  )
}

function Card({title, description, Icon, children}: {
  title: string,
  description: string,
  Icon: typeof Cable,
  children?: ReactNode
}) {
  return (
    <PinContainer containerClassName='w-80 aspect-[15/16]' titleChildren={children}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        className='bg-background cursor-pointer'
      >
        <div
          className="w-80 aspect-[15/16] flex flex-col justify-between relative border border-border transition duration-500 group-hover/pin:border-muted">
          <div
            className="absolute top-28 right-8 hidden md:block rotate-12 z-0 text-border text-2xl group-hover/pin:opacity-0 transition duration-500">Hover
            Me
          </div>
          <div
            className="absolute top-28 md:hidden right-8 rotate-12 z-0 text-border text-2xl group-hover/pin:opacity-0 transition duration-500">Click
            Me
          </div>
          <div className="flex justify-end">
            <div className="relative h-px w-48 bg-border my-16">
              <div
                className='absolute h-full w-0 top-0 right-0 bg-muted transition-all duration-300 group-hover/pin:w-full'></div>
              <div
                className="absolute h-[50px] bg-border w-[50px] overflow-hidden flex items-center justify-center rounded-full left-0 -translate-x-full top-1/2 -translate-y-1/2">
                <div
                  className="absolute bg-muted group-hover/pin:w-[50px] right-0 h-[50px] rounded-full delay-300 duration-300 transition-all w-0"></div>
                <div className="h-[48px] w-[48px] bg-background rounded-full z-[1] flex items-center justify-center">
                  <Icon
                    className='group-hover/pin:text-muted text-border w-6 h-6 delay-300 duration-300 transition-all'/>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className='flex gap-4 items-center'>
              <h3 className='text-text text-xl'>{title}</h3>
            </div>
            <p className='text-muted mt-4'>{description}</p>
          </div>
        </div>
      </motion.div>
    </PinContainer>
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
      initial={initial}
      animate={whileInView}
      transition={transition}
      className='h-[160px] mt-10 md:mt-0 bg-background md:h-[200px] border-y border-border flex items-center relative overflow-x-hidden'
    >
      <div className="absolute h-full w-20 md:w-48 border-l border-border right-0 top-0 z-[1] bg-background"></div>
      <motion.div
        style={{x: xTranslation}}
        className='h-[120px] md:h-[160px] '
      >
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className='rounded-[50%] border border-border w-[240px] md:w-[320px] h-[120px] md:h-[160px] absolute flex items-center justify-center'
            style={{left: index * overlappedW}}
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
            style={{left: index * overlappedW + overlappedW * skills.length}}
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
      </motion.div>
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
    title: 'Figma',
    logo: '/svg/figma.svg',
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
