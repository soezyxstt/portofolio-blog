'use client';

import { title } from '@/data';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { type Dispatch, type SetStateAction, useRef, useState } from 'react';

export default function Navbar() {
  const scrollDir = useScrollDirection();
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ width: 0, left: 0, opacity: 0 });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrollDir === 'up' || show ? 0 : -100 }}
        transition={{ duration: 0.2, type: 'tween' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className='h-20 w-full fixed top-0 flex justify-between md:px-main-md px-main items-center z-10'
      >
        <Link href={''} className=''>{title}</Link>
        <ul className='md:flex gap-2 relative py-2 hidden'>
          {['Projects', 'About', 'Contact'].map((title, index) => (
            <Tab
              title={title}
              key={title}
              index={index}
              setPosition={setPosition}
            />
          ))}
          <Cursor position={position} />
        </ul>
        <BurgerX />
      </motion.nav>
      <div
        className={`h-4 fixed top-0 w-full z-50 ${
          show && 'pointer-events-none'
        }`}
        onMouseEnter={() => setShow(true)}
      ></div>
    </>
  );
}

function Tab({
  title,
  index,
  setPosition,
}: {
  title: string;
  index: number;
  setPosition: Dispatch<
    SetStateAction<{ width: number; left: number; opacity: number }>
  >;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const w = ref.current?.offsetWidth!;
  const l = ref.current?.offsetLeft!;
  return (
    <Link
      href={`#${title.toLowerCase()}`}
      ref={ref}
      className='px-4 relative'
      onMouseEnter={() => setPosition({ left: l, width: w, opacity: 1 })}
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {title}
    </Link>
  );
}

function Cursor({
  position,
}: {
  position: { width: number; left: number; opacity: number };
}) {
  return (
    <motion.div
      animate={position}
      className='h-0.5 bg-primary rounded-sm absolute bottom-0'
    ></motion.div>
  );
}

function BurgerX() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <button
        className={`group md:hidden relative w-6 h-6 peer ${isExpanded && 'z-50'}`}
        aria-haspopup
        data-state={isExpanded ? 'open' : 'close'}
        onClick={() => setIsExpanded((pv) => !pv)}
      >
        <div className='absolute w-6 h-0.5 bg-primary transition-all rounded-sm -translate-y-1 group-data-[state=open]:translate-y-0 group-data-[state=open]:rotate-45 group-data-[state=open]:h-[calc(1.414*0.125rem)]'></div>
        <div className='absolute w-6 h-0.5 bg-primary transition-all rounded-sm translate-y-1 group-data-[state=open]:translate-y-0 group-data-[state=open]:-rotate-45 group-data-[state=open]:h-[calc(1.414*0.125rem)]'></div>
      </button>
      <ul className='md:hidden bg-background fixed flex flex-col h-dvh w-full justify-center duration-300 gap-4 top-0 pr-20 text-right transition-all peer-data-[state=open]:left-0 left-full'>
        {['Projects', 'About', 'Contact'].map((title) => (
          <Link href={`#${title.toLowerCase()}`} key={title}>{title}</Link>
        ))}
      </ul>
    </>
  );
}
