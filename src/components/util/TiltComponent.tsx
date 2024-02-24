'use client';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import * as TiltPrimitive from 'react-parallax-tilt';

const Tilt = ({
  children,
  tiltMaxAngleX = 2.5,
  tiltMaxAngleY = 2.5,
  glareColor,
  glareEnable = false,
  className,
  ...props
}: { children: ReactNode; className?: string } & TiltPrimitive.TiltProps &
  TiltPrimitive.GlareProps) => {
  return (
    <div className={cn('', className)}>
      <TiltPrimitive.default
        tiltMaxAngleX={tiltMaxAngleX}
        tiltMaxAngleY={tiltMaxAngleY}
        perspective={1000}
        glareColor={glareColor}
        glareEnable={glareEnable}
        {...props}
      >
        {children}
      </TiltPrimitive.default>
    </div>
  );
};

export default Tilt;
