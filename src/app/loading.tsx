import React from 'react';

function Loading() {
  return (
    <div
      className='absolute top-0 left-0 bg-background z-[999] min-h-dvh w-full flex items-center justify-center loading'>
      <div className="loader-wrapper">
        <div className='loader text-muted'></div>
      </div>
    </div>
  );
}

export default Loading;