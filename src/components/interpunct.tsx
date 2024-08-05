import React, { HTMLAttributes } from 'react';

export default function Interpunct({
  ref,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { ref?: React.Ref<HTMLSpanElement> }) {
  return (
    <span
      ref={ref}
      {...props}
    >
      •
    </span>
  );
}
