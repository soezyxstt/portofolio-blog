import useWindowSize from "@/hooks/useWindowSize";
import {motion, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const NUMBER_OF_PROJECTS = 5;

function Projects() {
  const {width, height} = useWindowSize();
  const isDesktop = useMediaQuery('(min-width: 768px)', {initializeWithValue: false});
  const hProj = isDesktop ? 80 : 60;
  const totalHeight = hProj * NUMBER_OF_PROJECTS + 75 + 20;

  const PEN_RATIO = 220 / 669;
  const PEN_WIDTH = Math.min((width ?? 500) * 0.725, 800);

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "end end"]})
  // pen
  const xTransPenTop = useTransform(scrollYProgress, [125 / totalHeight, 175 / totalHeight], [0, 0.8 * (width ?? 500) / 2 + PEN_WIDTH * PEN_RATIO])
  const xTransPenBot = useTransform(scrollYProgress, [125 / totalHeight, 175 / totalHeight], [0, -0.8 * (width ?? 500) / 2]);
  const y1 = useTransform(scrollYProgress, [0.05, 125 / totalHeight], [0, (height ?? 500) / 2]);
  const y2 = useTransform(scrollYProgress, [125 / totalHeight, 1], [0, (height ?? 500) / 100 * (totalHeight - 125)]);
  const transform = useMotionTemplate`translateY(calc(${y1}px + ${y2}px))`;

  return (
    <div id='projects' ref={ref} className='min-h-[300vh] bg-background overflow-hidden relative'
         style={{perspective: '1000px'}}>
      <h2 className='w-full text-2xl md:text-4xl text-muted h-[15vh] md:h-[20vh] items-center flex justify-center'>My
        Work</h2>
      <motion.div className="flex items-center sticky w-full justify-center top-0 mb-[75vh]" style={{transform}}>
        <div className='absolute' style={{left: `calc(50% - ${PEN_WIDTH * PEN_RATIO}px)`}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={'/svg/pen-bot.svg'} alt='pen-bot' className='absolute bg-background z-[1]'
                      style={{
                        width: PEN_WIDTH * PEN_RATIO,
                        bottom: (PEN_WIDTH * 50 / 669 - PEN_WIDTH * PEN_RATIO * 42 / 220) / 2,
                        x: xTransPenBot
                      }}/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={'/svg/pen-top.svg'} alt='pen-top' className='sticky'
                      style={{width: PEN_WIDTH, x: xTransPenTop}}/>
        </div>
      </motion.div>
      {webProjects.map((project, i) => <Card_3D key={i + project.url} index={i} {...project}
                                                src={project.src}/>)}
    </div>
  );
}

export default Projects;

function Card_3D({title, url, index, src}: {
  url: string,
  title: string,
  index: number,
  src: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress: progress} = useScroll({target: ref, offset: ["0.25 1", "1 1"]})
  const rotateX = useTransform(progress, [0, 1], [12, 0]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  return (
    <motion.div
      ref={ref}
      className={`sticky top-4 flex justify-center md:h-[80vh] h-[60vh] items-center`}
      style={{rotateX, scale, opacity}}>
      <div
        className={`md:h-[60vh] md:w-[calc(60vh*1.75)] w-[75vw] flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse justify-between'}`}>
        <Image src={src} alt={title} width={750} height={750} quality={100}
               className='md:h-full object-cover object-center md:w-[80vh] w-[75vw]'/>
        <div
          className={`flex-col justify-between h-fit md:h-full gap-16 flex py-6 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
          <h4 className='uppercase text-sm text-muted' style={{letterSpacing: "0.2em"}}>Website</h4>
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
      </div>
    </motion.div>
  )
}

const webProjects = [
  {
    url: "https://pemirakmitb.com",
    title: "Pemilu Raya KM ITB",
    src: '/images/projects/pemira.png'
  },
  {
    url: "https://pwa-hmm.vercel.app",
    title: "PWA HMM ITB",
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
    title: 'Pemilu HMM ITB',
    src: '/images/projects/pemilu-hmm.png'
  }
]