import { quicksand } from '@/lib/font';
import { cn } from '@/lib/utils';

const RightNav = () => {
  return (
    <div
      id='right-nav'
      className='right-[-100%] transition-all duration-300 fixed *:cursor-pointer gap-8 h-dvh min-w-60 w-[15vw] md:bg-gradient-to-r to-teal-700/15 from-transparent via-25% via-teal-700/5 z-[99999] flex flex-col pr-8 md:pr-[5vw] items-end justify-center'
    >
      <div
        onClick={() => {
          document
            .getElementById('home')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={cn('text-xl font-thin transition-all', quicksand.className)}
      >
        Home
      </div>
      <div
        onClick={() => {
          document
            .getElementById('project')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={cn('text-xl font-thin transition-all', quicksand.className)}
      >
        Projects
      </div>
      <div
        onClick={() => {
          document
            .getElementById('about-me')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={cn('text-xl font-thin transition-all', quicksand.className)}
      >
        About
      </div>
    </div>
  );
};

export default RightNav;
