'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Separator } from '../ui/separator';
import { LuMailPlus, LuGithub } from 'react-icons/lu';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { ScrollArea } from '../ui/scroll-area';

const Navbar = () => {
  return (
    <nav
      className='flex fixed w-full h-16 top-0 justify-between items-center px-6 md:px-12 text-gray-400 shadow-sm font-mono z-50'
      role='navigation'
    >
      <NavigationMenu className=''>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className='text-lg'>Expertise</div>
            </NavigationMenuTrigger>
            <Expertise />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className='text-lg'>Contact</div>
            </NavigationMenuTrigger>
            <Contact />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

const Contact = () => {
  return (
    <NavigationMenuContent className=''>
      <div className='flex p-6 flex-col gap-6'>
        <h1 className='text-xl gap-1 flex flex-col'>
          Social <Separator />
        </h1>
        <div className='flex md:flex-row flex-col gap-8'>
          <Link
            href='https://mail.google.com/mail/?view=cm&fs=1&to=soezyxst@gmail.com'
            target='_blank'
            className='border border-[--muted-text] p-4 rounded-lg w-60'
          >
            <div className='flex gap-2 items-center'>
              <LuMailPlus />
              Email
            </div>
            <p className='text-[--muted-text] text-sm w-full text-end'>
              soezyxst@gmail.com
            </p>
          </Link>
          <Link
            href='https://instagram.com/adihnursyam'
            target='_blank'
            className='border border-[--muted-text] p-4 rounded-lg w-60'
          >
            <div className='flex gap-2 items-center'>
              <FaInstagram />
              Instagram
            </div>
            <p className='text-[--muted-text] text-sm w-full text-end'>
              @adihnursyam
            </p>
          </Link>
        </div>
        <div className='flex md:flex-row flex-col gap-8'>
          <Link
            href='https:/github.com/soezyxstt'
            target='_blank'
            className='border border-[--muted-text] p-4 rounded-lg w-60'
          >
            <div className='flex gap-2 items-center'>
              <LuGithub />
              Github
            </div>
            <p className='text-[--muted-text] text-sm w-full text-end'>
              @soezyxstt
            </p>
          </Link>
          <Link
            href='https://twitter.com/soezyxstt'
            target='_blank'
            className='border border-[--muted-text] p-4 rounded-lg w-60'
          >
            <div className='flex gap-2 items-center'>
              <FaXTwitter />
              Twitter
            </div>
            <p className='text-[--muted-text] text-sm w-full text-end'>
              @soezyxstt
            </p>
          </Link>
        </div>
      </div>
    </NavigationMenuContent>
  );
};

const Expertise = () => {
  return (
    <NavigationMenuContent className=''>
    <ScrollArea className='h-[calc(100vh-10rem)] md:h-auto w-auto'>
        <div className='p-6 flex flex-col gap-8 max-w-[calc(100vw-4rem)]'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex gap-8 items-stretch'>
              <h1 className='bg-[#1c1c1e] p-3 rounded-lg w-32 md:w-40 flex items-center'>
                3D Design
              </h1>
              <ul className='flex justify-center flex-col w-40 my-4'>
                <li>
                  <h1 className=''>Solidworks</h1>
                  <p className='text-sm text-[#a3a3a3]'>
                    Powerful 3D design software for 3D design and drawing
                  </p>
                </li>
              </ul>
            </div>
            <div className='flex gap-8 items-stretch'>
              <h1 className='bg-[#1c1c1e] p-3 rounded-lg w-32 md:w-40 flex items-center'>
                Web Dev
              </h1>
              <ul className='flex justify-center flex-col gap-4 w-60 my-4'>
                <li>
                  <h1 className=''>Node JS</h1>
                  <p className='text-sm text-[#a3a3a3]'>
                    Feature rich backend framework
                  </p>
                </li>
                <Separator />
                <li>
                  <h1 className=''>Next JS</h1>
                  <p className='text-sm text-[#a3a3a3]'>
                    Fullstack web framework based on React
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-8 items-stretch col-span-2'>
            <h1 className='bg-[#1c1c1e] p-3 rounded-lg w-32 md:w-40 flex items-center'>
              Programming
            </h1>
            <ul className='flex justify-center flex-col gap-4 flex-1 my-4'>
              <li>
                <h1 className=''>Python</h1>
                <p className='text-sm text-[#a3a3a3]'>
                  Python is versatile, used in data science, web development,
                  automation, and more.
                </p>
              </li>
              <Separator />
              <li>
                <h1 className=''>Matlab</h1>
                <p className='text-sm text-[#a3a3a3]'>
                  Programming platform for analysis, design, and modeling of
                  systems and products using a matrix-based language.
                </p>
              </li>
              <Separator />
              <li>
                <h1 className=''>C/C++</h1>
                <p className='text-sm text-[#a3a3a3]'>
                  Powerful general-purpose programming language that supports
                  various programming paradigms, including procedural and
                  object-oriented.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </ScrollArea>
      </NavigationMenuContent>
  );
};

export default Navbar;
