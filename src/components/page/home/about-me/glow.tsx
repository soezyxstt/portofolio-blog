import { type RefObject } from 'react';

const Glow = ({}: {ref: RefObject<HTMLDivElement>}) => {
  return <div className='[box-shadow:0_0_9999px_1px_#047857] w-0.5 h-0.5 absolute'></div>;
}

export default Glow;