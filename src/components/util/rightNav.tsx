import { quicksand } from '@/lib/font';
import { cn } from '@/lib/utils';

const RightNav = () => {
  return (
    <div
      id='right-nav'
      className='right-[-100%] *:md:text-lg *:text-sm hover:right-0 transition-all duration-500 fixed *:cursor-pointer gap-5 md:gap-8 h-dvh w-fit md:w-[15vw] md:bg-gradient-to-r to-teal-700/15 from-transparent via-25% via-teal-700/5 z-[99999] flex flex-col pr-8 md:pr-[5vw] items-end justify-center'
    >
      <a href='#home'
        className={cn(' transition-all', quicksand.className)}
      >
        Home
      </a>
      <a href='#project'
        className={cn(' transition-all', quicksand.className)}
      >
        Projects
      </a>
      <a href='#about-me'
        className={cn(' transition-all', quicksand.className)}
      >
        About
      </a>
    </div>
  );
};

export default RightNav;
