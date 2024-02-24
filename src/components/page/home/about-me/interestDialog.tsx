import { quicksand } from '@/lib/font';
import { Dialog } from './aboutMe';

const InterestDialog = ({ query, interest }: { query?: string; interest?: string }) => {
  return (
    <Dialog
      title='Interest'
      open={query === 'interest'}
    >
      <div
        className={`px-4 grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-5 mt-6  ${quicksand.className} w-[80%] mx-auto font-bold text-blue-50`}
      >
        <div className='flex justify-center items-center'>
          <div className=' relative bg-cover bg-center aspect-square flex justify-center items-center rounded-xl border border-stone-500 w-32 bg-gradient-to-bl from-neutral-600 via-gray-800 to-zinc-900'>
            <img
              src='/images/music.png'
              alt='music'
              className='absolute opacity-25'
            />
            <h1>Music</h1>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' relative bg-cover bg-center aspect-square flex justify-center items-center rounded-xl border border-stone-500 w-32 bg-gradient-to-bl from-neutral-600 via-gray-800 to-zinc-900'>
            <img
              src='/images/game.png'
              alt='music'
              className='absolute opacity-25'
            />
            <h1>Gaming</h1>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' relative bg-cover bg-center aspect-square flex justify-center items-center rounded-xl border border-stone-500 w-32 bg-gradient-to-bl from-neutral-600 via-gray-800 to-zinc-900'>
            <img
              src='/images/react.png'
              alt='music'
              className='absolute opacity-25'
            />
            <h1>Programming</h1>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' relative bg-cover bg-center aspect-square flex justify-center items-center rounded-xl border border-stone-500 w-32 bg-gradient-to-bl from-neutral-600 via-gray-800 to-zinc-900'>
            <img
              src='/images/pingpong.png'
              alt='music'
              className='absolute opacity-25'
            />
            <h1>Table Tennis</h1>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default InterestDialog;
