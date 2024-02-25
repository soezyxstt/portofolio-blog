import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';
import * as DialogPrimitive from '../../../ui/dialog';
import { type DialogProps } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Cross2Icon } from '@radix-ui/react-icons';
import { robotoMono } from '@/lib/font';
import EduDialog from './eduDialog';
import ExpertiseDialog from './expertiseDialog';
import InterestDialog from './interestDialog';
import WorkDialog from './workDialog';
import Card from '@/components/page/home/about-me/aboutCard';

const age = () => {
  const now = new Date();
  const birthDate = new Date('2004-06-26');

  const monthDiff = now.getMonth() - birthDate.getMonth();
  const yearDiff = now.getFullYear() - birthDate.getFullYear();

  return (yearDiff + monthDiff / 12).toFixed(2);
};

const AboutMe = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const query = searchParams?.q as string | undefined;
  const interest = searchParams?.i as string | undefined;

  return (
    <div
      id='about-me'
      className='min-h-[315dvh] w-full h-[315dvh] px-6 md:px-0 md:py-6 overflow-hidden'
    >
      <h1 className='about-me text-4xl font-bold -rotate-90 fixed top-[50vh] -translate-y-[50%] hidden md:block opacity-0 transition-opacity z-0'>
        About Me
      </h1>
      <Separator
        orientation='vertical'
        className='ml-[10vw] hidden md:block'
      />
      <div className='flex flex-col md:ml-[8vw] md:py-16 w-full'>
        <div className='md:hidden mt-10 mb-4 text-3xl font-bold'>About Me</div>
        <div className='md:grid grid-cols-2 md:gap-x-32 md:gap-y-10 relative w-full '>
          <div className='absolute text-4xl opacity-50 left-[50vh] top-[45vh] -translate-y-[50%]'>
            Scroll to See More
          </div>
          <div
            className={`md:hidden w-0.5 top-[40vh] absolute bg-teal-600 [box-shadow:0_0_20px_1px_#14b8a6bb] left-[10vw] opacity-0 transition-all rounded-[50%] card-line`}
          ></div>
          <div
            className={`md:hidden w-0.5 top-[100vh] absolute bg-teal-600 [box-shadow:0_0_20px_1px_#14b8a6bb] left-[10vw] opacity-0 transition-all rounded-[50%] card-line`}
          ></div>
          <div
            className={`md:hidden w-0.5 top-[160vh] absolute bg-teal-600 [box-shadow:0_0_20px_1px_#14b8a6bb] left-[10vw] opacity-0 transition-all rounded-[50%] card-line`}
          ></div>
          <div
            className={`md:hidden w-0.5 top-[220vh] absolute bg-teal-600 [box-shadow:0_0_20px_1px_#14b8a6bb] left-[10vw] opacity-0 transition-all rounded-[50%] card-line`}
          ></div>
          <Card
            href='/?q=profile'
            title='Profile'
            top='md:top-[80vh]'
            img='/images/guntur.png'
          >
            <p>{"Here's my personal information, use it properly!"}</p>
          </Card>
          <Card
            href='/?q=education'
            title='Education'
            top='md:top-[120vh] top-[60vh]'
            left='translate-x-[120%]'
            img='/images/itb.png'
          >
            <p>{"Want to see my study journey? Check it out!"}</p>
          </Card>
          <Card
            href='/?q=expertise'
            top='md:top-[160vh] top-[120vh]'
            title='Expertise'
            left='translate-x-[-120%] md:translate-x-0'
            img='/images/react.png'
          >
            <p>{"Know more about things that I'm capable into"}</p>
          </Card>
          <Card
            href='/?q=interest'
            title='Interest'
            top='md:top-[200vh] top-[180vh]'
            left='translate-x-[120%]'
            img='/images/pingpong.png'
          >
            <p>{"There's so much stuff that I love to do, yet here's the top"}</p>
          </Card>
          <Card
            href='/?q=work'
            title='Work with Me'
            top='md:top-[240vh] top-[240vh]'
            left='translate-x-[-120%] md:translate-x-0'
            img='/images/recruitment.png'
          >
            <p>{"Interested in working with me? Just text me"} </p>
          </Card>
        </div>
        <Dialogs
          query={query}
          interest={interest}
        />
      </div>
    </div>
  );
};

const Dialogs = ({
  query,
  interest,
}: {
  query?: string;
  interest?: string;
}) => {
  return (
    <div>
      <Dialog
        title='Profile'
        open={query === 'profile'}
      >
        <div className=' space-y-2 px-4 border border-neutral-600 py-3 md:py-5 rounded'>
          <h1 className='font-semibold text-center md:text-left'>
            Personal Information
          </h1>
          <table
            className={cn('table-auto w-full font-thin', robotoMono.className)}
          >
            <tbody className=' divide-y-2 divide-stone-500 *:*:px-3 *:*:py-1 [&>tr>*:first-child]:pr-6'>
              <tr>
                <td>Name</td>
                <td>Adi Haditya Nursyam</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{`Around ${age()}`}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Indonesia, West Java</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>Undergraduate Student</td>
              </tr>
              <tr>
                <td>Languange</td>
                <td>{'Bahasa, English, Sundanese'}</td>
              </tr>
            </tbody>
          </table>
          <Separator className='dark:bg-neutral-600 h-0.5'/>
          <h1 className='font-semibold text-center md:text-left'>
            Contact Information
          </h1>
          <table
            className={cn('table-auto font-thin w-full', robotoMono.className)}
          >
            <tbody className=' divide-y-2 divide-stone-500 *:*:px-3 *:*:py-1  [&>tr>*:first-child]:pr-6'>
              <tr>
                <td>Email</td>
                <td>soezyxst@gmail.com</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>soezyxst</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>soezyxstt</td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>adihnursyam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Dialog>
      <EduDialog query={query} />
      <ExpertiseDialog query={query} />
      <InterestDialog
        query={query}
        interest={interest}
      />
      <WorkDialog query={query} />
    </div>
  );
};

export const Dialog = ({
  title,
  children,
  ...props
}: {
  title?: string;
  children?: ReactNode;
} & DialogProps) => {
  return (
    <DialogPrimitive.Dialog {...props}>
      <DialogPrimitive.DialogContent>
        <DialogPrimitive.DialogHeader>
          <DialogPrimitive.DialogTitle className='px-4'>
            {title}
          </DialogPrimitive.DialogTitle>
        </DialogPrimitive.DialogHeader>
        {children}
        <Link href='/?q='>
          <DialogPrimitive.DialogClose className='absolute hover:rotate-90 transition-all right-4 top-4 rounded-full opacity-70 ring-offset-white hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400'>
            <Cross2Icon />
            <span className='sr-only'>Close</span>
          </DialogPrimitive.DialogClose>
        </Link>
      </DialogPrimitive.DialogContent>
    </DialogPrimitive.Dialog>
  );
};

export default AboutMe;
