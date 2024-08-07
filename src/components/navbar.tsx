'use client';

import {contacts, title} from '@/data';
import {motion, useScroll, useTransform} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import Interpunct from './ui/interpunct';
import useWindowSize from "@/hooks/useWindowSize";

export default function Navbar() {
  const {scrollY, scrollYProgress} = useScroll({});
  const {height} = useWindowSize();
  const y = useTransform(scrollY, [0, 300], [164, 64]);
  const scale = useTransform(scrollY, [0, 300], [2, 1]);
  const opacity = useTransform(scrollY, [0, height ?? 500], [0, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", '100%']);

  return (
    <>
      <motion.nav
        initial={{y: 0}}
        transition={{duration: 0.2, type: 'tween'}}
        style={{height: y, minHeight: 64}}
        className='w-full fixed top-0 flex justify-between md:px-main-md px-main items-center z-40 max-w-[100vw]'
      >
        <motion.div style={{opacity}} className="absolute z-0 bg-background w-full h-full top-0 left-0"></motion.div>
        <div className='z-10 border-r border-border'>
          <motion.p
            style={{scale}}
            className='uppercase text-base [transform-origin:left] font-medium w-40'
          >
            <Link
              href={''}
              className=''
            >
              {title}
            </Link>
          </motion.p>
        </div>
        <motion.p
          style={{scale}}
          className='uppercase text-base font-medium hidden md:block z-10'
        >
          Home
        </motion.p>
        <div className='md:w-40 flex justify-end items-center z-10 md:border-l border-border'>
          <BurgerX/>
        </div>
        <motion.div style={{width}} className="h-px bg-border left-0 absolute bottom-0 translate-y-full"></motion.div>
      </motion.nav>
    </>
  );
}

function BurgerX() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      setIsExpanded(false);

      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth'});

      }, 250);
    }
  }

  return (
    <>
      <button
        className={`group relative w-6 h-6 peer ${isExpanded && 'z-50'}`}
        aria-haspopup
        data-state={isExpanded ? 'open' : 'close'}
        onClick={() => setIsExpanded((pv) => !pv)}
      >
        <div
          className='absolute w-6 h-0.5 bg-primary transition-all rounded-sm -translate-y-1 group-data-[state=open]:animate-burger-x-down'></div>
        <div
          className='absolute w-6 h-0.5 bg-primary transition-all rounded-sm translate-y-1 group-data-[state=open]:animate-burger-x-up'></div>
      </button>
      <div
        onClick={() => setIsExpanded(false)}
        className='peer-data-[state=open]:w-[100vw] h-[100vh] fixed backdrop-blur-sm left-0 top-0'
      ></div>
      <ul
        className='bg-[#121519] fixed flex flex-col z-40 h-dvh sm:w-[50vw] py-6 md:py-10 max-w-[85vw] justify-between duration-500 gap-4 top-0 px-10 sm:px-14 md:px-20 ease-out transition-all peer-data-[state=open]:translate-x-0 right-0 translate-x-full'>
        <div className=''></div>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.55}}
          className='space-y-6'
        >
          <h2 className='text-3xl sm:text-5xl md:text-7xl'>Navigate To?</h2>
          <div className='flex flex-col'>
            {['Home', 'Services', 'Projects', "Contacts"].map((title) => (
              <Link
                href={`#${title.toLowerCase()}`}
                key={title}
                scroll={false}
                className='hover:bg-indigo-600 font-semibold rounded-full hover:px-4 py-2 w-32 transition-all'
                onClick={() => handleScroll(title.toLowerCase())}
              >
                {title}
              </Link>
            ))}
          </div>
        </motion.div>
        <div className='flex font-medium text-sm gap-2'>
          <Link
            href={'https://www.linkedin.com/in/' + contacts.linkedin}
            target='_blank'
            className=''
          >
            linkedin
          </Link>
          <Interpunct className='text-cyan-500'/>
          <Link
            href={'https://instagram.com/' + contacts.instagram}
            target='_blank'
            className=''
          >
            instagram
          </Link>
        </div>
      </ul>
    </>
  );
}
