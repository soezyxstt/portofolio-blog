const Boxes = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const borders = [
    'border-t-2 border-stone-500',
    'border-r-2 border-teal-500',
    'border-b-2 border-cyan-500',
    'border-l-2 border-red-500',
    'bordder-t-2 border-yellow-500',
    'border-r-2 border-green-500',
    'border-b-2 border-blue-500',
    'border-l-2 border-purple-500',
    'border-t-2 border-pink-500',
    'border-r-2 border-rose-500',
    'border-b-2 border-stone-500',
    'border-l-2 border-teal-500',
    'border-t-2 border-cyan-500',
    'border-r-2 border-red-500',
    'border-b-2 border-yellow-500',
    'border-l-2 border-green-500',
    'border-t-2 border-blue-500',
    'border-r-2 border-purple-500',
  ];
  const getRandomBorder = () => {
    return (
      borders[Math.floor(Math.random() * borders.length)] +
      borders[Math.floor(Math.random() * borders.length)]
    );
  };

  return (
    <div className='fixed left-1/4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] z-0 pointer-events-none skew-y-[14deg] skew-x-[-48deg] opacity-30'>
      {rows.map((_, i) => (
        <div
          key={i}
          className='flex flex-col'
        >
          {cols.map((_, j) => (
            <div
              key={j}
              className={`w-12 h-12 ${getRandomBorder()}`}
            ></div>
          ))}
          )
        </div>
      ))}
    </div>
  );
};

export default Boxes;
