import useWindowSize from "@/hooks/useWindowSize";
import {motion, type MotionValue, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";
import Image from "next/image";

const NUMBER_OF_PROJECTS = 5;

function Projects() {
  const {width, height} = useWindowSize();
  const hProj = 100;
  const totalHeight = hProj * NUMBER_OF_PROJECTS + 175 + 200 + 20 + 200;

  const PEN_RATIO = 220 / 669;
  const PEN_WIDTH = Math.min((width ?? 500) * 0.725, 800);

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]})

  // pen
  const xTransPenTop = useTransform(scrollYProgress, [285 / totalHeight, 475 / totalHeight, 1 - 100 / totalHeight, 1],
    [0, 0.7 * (width ?? 500) / 2 + 2 * PEN_WIDTH * PEN_RATIO, 0.7 * (width ?? 500) / 2 + 2 * PEN_WIDTH * PEN_RATIO, 0])
  const xTransPenBot = useTransform(scrollYProgress, [285 / totalHeight, 475 / totalHeight, 1 - 100 / totalHeight, 1],
    [0, -0.7 * (width ?? 500) / 2, -0.7 * (width ?? 500) / 2, 0]);
  const marginBottom = useTransform(scrollYProgress, [0, 1], [1.75 * height!, 0]);

  // work
  const fS = useTransform(scrollYProgress, [20 / totalHeight, 200 / totalHeight, 250 / totalHeight],
    [24, 800, 24]);
  const fontSize = useMotionTemplate`${fS}px`;
  const textOpacity = useTransform(scrollYProgress, [80 / totalHeight, 120 / totalHeight], [1, 0]);
  const heightWork = useTransform(scrollYProgress, [20 / totalHeight, 200 / totalHeight, 250 / totalHeight],
    [30, 1200, 30]);

  const opacity = useTransform(scrollYProgress, [100 / totalHeight, 200 / totalHeight, 220 / totalHeight],
    [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [70 / totalHeight, 200 / totalHeight, 250 / totalHeight],
    [1, width! / 4, 1]);

  return (
    <>
      <div id='projects' ref={ref} className='bg-background'>
        <h2
          className='w-full text-2xl sticky top-1/2 pointer-events-none md:text-4xl whitespace-nowrap text-muted items-center h-[15vh] md:h-[20vh] flex justify-center z-front'>
          <motion.div style={{height: heightWork}} className="overflow-hidden relative w-screen">
            <motion.span
              style={{fontSize, opacity: textOpacity}}
              className='absolute absolute-center'
            >My Work
            </motion.span>
          </motion.div>
          <div className="absolute w-screen h-screen overflow-hidden">
            <motion.div style={{scale, opacity}}
                        className="absolute rounded-full w-4 h-4 bg-muted left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></motion.div>
          </div>
        </h2>
        <div className='h-[200vh] w-full'/>
        <motion.div
          className="flex pointer-events-none items-center sticky w-screen over justify-center top-1/2 z-10"
          style={{marginBottom}}>
          <div className='absolute overflow-x-hidden w-screen flex items-center' style={{height: PEN_WIDTH * 65 / 669}}>
            <div className='absolute left-1/2 -translate-x-1/2'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img src={'/svg/pen-bot.svg'} alt='pen-bot' className='absolute bg-background z-[1]'
                          style={{
                            width: PEN_WIDTH * PEN_RATIO,
                            bottom: (PEN_WIDTH * 50 / 669 - PEN_WIDTH * PEN_RATIO * 42 / 220) / 2,
                            x: xTransPenBot
                          }}/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img src={'/svg/pen-top.svg'} alt='pen-top' className='sticky'
                          style={{minWidth: PEN_WIDTH, x: xTransPenTop}}/>
            </div>
          </div>
        </motion.div>
        {webProjects.map((project, i) => <Card_3D key={i + project.url} index={i} {...project}
                                                  src={project.src} scrollYProgress={scrollYProgress}
                                                  totalHeight={totalHeight} width={width!} h={hProj}/>)}
        <div className="h-[200vh]"></div>
      </div>
    </>
  );
}

export default Projects;

function Card_3D({title, url, index, src, scrollYProgress, totalHeight, width, h}: {
  url: string,
  title: string,
  index: number,
  src: string,
  scrollYProgress: MotionValue<number>,
  totalHeight: number,
  width: number,
  h: number
}) {
  const isEven = index % 2 === 0;
  const isDesktop = width > 768;
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress: progress} = useScroll({target: ref, offset: ["0.5 1", "1 1"]})

  const start = (500 + index * h) / totalHeight;
  const end = (600 + index * h) / totalHeight;
  const end2 = (700 + index * h) / totalHeight;

  const rotateX = useTransform(progress, [0.5, 1], [20, 1]);
  const scale1 = useTransform(progress, [0, 1], [0.7, 1]);
  const scale2 = useTransform(scrollYProgress, [start, end], [1, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const x = useTransform(scrollYProgress, [start, end, end2], [0, 0.5 * (isEven ? 1 : -1) * width, 0]);

  const scale = useMotionTemplate`min(${scale1}, ${scale2})`;
  const skewY = useTransform(progress, [0, 0.5, 1], [0, 0, isEven ? -5 : 5]);

  return (
    <>
      <div
        ref={ref}
        className={`sticky top-0 flex justify-center items-center h-screen`}
        style={{perspective: '1000px'}}>
        <motion.div
          style={{rotateX, scale, x, opacity, transformStyle: 'preserve-3d'}}
          className={`md:h-[60vh] md:w-[calc(60vh*1.75)] w-[75vw] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse justify-between'}`}>
          <motion.div className="aspect-[16/10] md:h-full w-[75vw]" style={{skewY}}
                      whileHover={{translateX: isEven ? -10 : 10, translateY: -14}} transition={{duration: 1}}>
            <Image src={src} alt={title} width={750} height={750} quality={100}
                   className='object-cover object-center w-full h-full hover:shadow-project hover:md:shadow-project-md duration-1000 transition-all'/>
          </motion.div>
          <div
            className={`flex-col justify-between h-fit md:h-full gap-16 flex py-6 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
            <h4 className='uppercase text-sm text-muted md:text-right'
                style={{letterSpacing: "0.2em", textAlign: isDesktop ? 'left' : isEven ? "right" : "left"}}>Website</h4>
            <div className="flex flex-col gap-4">
              <h3 className='text-3xl'>{title}</h3>
              <Link href={url}
                    className='uppercase group text-sm relative py-2 hover:pl-2 duration-500 ease-in-out transition-all'
                    style={{letterSpacing: '0.2em'}}>
                Visit
                <div className="absolute h-px w-full max-w-32 bg-border bottom-0 left-0">
                  <div
                    className="absolute h-px bg-text w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

const webProjects = [
  {
    url: "https://pemirakmitb.com",
    title: "Pemilu Raya KM ITB 2024",
    src: '/images/projects/pemira.png'
  },
  {
    url: "https://pwa-hmm.vercel.app",
    title: "Progressive Web App HMM ITB",
    src: '/images/projects/pwa.png'
  },
  {
    url: 'https://oskmitb.com',
    title: 'OSKM ITB 2023/2024',
    src: '/images/projects/oskm.png'
  },
  {
    url: 'https://iecom2022.com',
    title: 'Industrial Engineering Competition 2022',
    src: '/images/projects/iecom.png'
  },
  {
    url: 'https://pemilu-hmm.vercel.app',
    title: 'Pemilu HMM ITB 2024',
    src: '/images/projects/pemilu-hmm.png'
  }
]