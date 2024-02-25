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
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav
      className='flex flex-col transition-all fixed w-full h-16 duration-300 ease-in-out top-[calc(var(--navbar-height)-4rem)] justify-center px-6 md:px-12 text-gray-400 shadow-sm font-mono z-50'
      role='navigation'
    >
      <NavigationMenu className='z-50'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger >
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
    <NavigationMenuContent className='' >
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
              <h1 className='bg-[#1c1c1e] [&>img]:hidden [&>img]:md:block px-4 py-8 rounded-lg min-w-32 md:w-40 flex flex-col justify-center md:justify-end gap-4 bg-gradient-to-br via-red-600 from-15% from-blue-700 to-yellow-400 via-70%'>
                <Image
                  src='/images/sw.png'
                  alt='Solidworks'
                  width={60}
                  height={60}
                />
                3D Design
              </h1>
              <ul className='flex justify-center flex-col w-40 my-4'>
                <li>
                  <h1 className=''>Solidworks</h1>
                  <p className='text-sm text-[#a3a3a3]'>
                    Powerful 3D design software for 3D modeling and drawing
                  </p>
                </li>
              </ul>
            </div>
            <div className='flex gap-8 items-stretch'>
              <h1 className='px-4 py-8 rounded-lg min-w-32 [&>img]:hidden [&>img]:md:block md:w-40 flex-col flex justify-center md:justify-end bg-gradient-to-br from-green-700 from-15%  to-blue-600'>
                <Image
                  src='/images/sql.png'
                  alt='Web Development'
                  width={40}
                  height={40}
                  className='ml-auto'
                />
                <Image
                  src='/images/nextjs.png'
                  alt='Web Development'
                  width={60}
                  height={60}
                />
                <Image
                  src='/images/nodejs.png'
                  alt='Web Development'
                  width={60}
                  height={60}
                  className='ml-auto mb-3'
                />
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
                <Separator />
                <li>
                  <h1 className=''>SQL</h1>
                  <p className='text-sm text-[#a3a3a3]'>
                    Standard language for relational database management
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-8 items-stretch col-span-2'>
            <h1 className=' px-4 py-8 rounded-lg min-w-32 md:w-40 [&>img]:hidden [&>img]:md:block flex flex-col justify-center md:justify-end bg-gradient-to-br via-teal-600 from-15% via-60% from-green-600 to-cyan-700'>
              <Image
                src='/images/python.png'
                alt='Python'
                width={40}
                height={40}
                className='ml-auto'
              />
              <Image
                src='/images/matlab.png'
                alt='Matlab'
                width={40}
                height={40}
              />
              <Image
                src='/images/cpp.png'
                alt='C/C++'
                width={40}
                height={40}
                className='ml-auto mb-4'
              />
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
