'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog } from './aboutMe';
import { quicksand } from '@/lib/font';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

const rawDesign = [
  { title: 'Solidworks 3D Design', value: 95 },
  { title: 'Solidworks Assembly', value: 90 },
  { title: 'Solidworks Drawing', value: 90 },
  { title: 'Solidworks Linkage', value: 90 },
  { title: 'CSS', value: 90 },
  { title: 'Canva', value: 80 },
  { title: 'Solidworks Simulation', value: 70 },
  { title: 'Inventor', value: 70 },
  { title: 'Figma', value: 60 },
  { title: 'Davinchi Resolve', value: 60 },
];

const rawWebdev = [
  { title: 'React', value: 90 },
  { title: 'Next.js', value: 90 },
  { title: 'TailwindCSS', value: 90 },
  { title: 'Prisma', value: 80 },
  { title: 'Vercel', value: 80 },
  { title: 'Node.js', value: 80 },
  { title: 'Express', value: 80 },
  { title: 'PostgreSQL', value: 80 },
  { title: 'MySQL', value: 75 },
  { title: 'AWS', value: 70 },
  { title: 'REST', value: 70 },
  { title: 'Docker', value: 70 },
  { title: 'Azure', value: 70 },
  { title: 'Firebase', value: 65 },
  { title: 'Framer Motion', value: 65 },
  { title: 'Three.js', value: 60 },
];

const rawProgramming = [
  { title: 'JavaScript', value: 99 },
  { title: 'TypeScript', value: 99 },
  { title: 'Python', value: 95 },
  { title: 'Matlab', value: 80 },
  { title: 'Arduino', value: 75 },
  { title: 'C++', value: 70 },
  { title: 'C#', value: 70 },
  { title: 'Java', value: 65 },
  { title: 'R', value: 65 },
  { title: 'Fortran', value: 50 },
  { title: 'PHP', value: 50 },
  { title: 'SQL', value: 50 },
];

const rawmanufacturing = [
  { title: '3D Printing', value: 80 },
  { title: 'Grinding', value: 80 },
  { title: 'Sawing', value: 80 },
  { title: 'Drilling', value: 70 },
  { title: 'Milling', value: 60 },
];

const rawTools = [
  { title: 'VSCode', value: 95 },
  { title: 'GitHub', value: 90 },
  { title: 'Git', value: 90 },
  { title: 'Excel', value: 85 },
];

const ExpertiseDialog = ({ query }: { query?: string }) => {
  const [design, setDesign] = useState(rawDesign);
  const [webdev, setWebdev] = useState(rawWebdev);
  const [programming, setProgramming] = useState(rawProgramming);
  const [manufacturing, setManufacturing] = useState(rawmanufacturing);
  const [tools, setTools] = useState(rawTools);

  const animateValues = () => {
    setDesign((prev) => prev.map((item) => ({ ...item, value: 0 })));
    setWebdev((prev) => prev.map((item) => ({ ...item, value: 0 })));
    setProgramming((prev) => prev.map((item) => ({ ...item, value: 0 })));
    setManufacturing((prev) => prev.map((item) => ({ ...item, value: 0 })));
    setTools((prev) => prev.map((item) => ({ ...item, value: 0 })));

    setTimeout(() => {
      setDesign(rawDesign);
      setWebdev(rawWebdev);
      setProgramming(rawProgramming);
      setManufacturing(rawmanufacturing);
      setTools(rawTools);
    }, 250);
  };

  return (
    <Dialog
      title='Expertise'
      open={query === 'expertise'}
    >
      <ScrollArea className={`px-4 h-96 ${quicksand.className}`}>
        <div className='space-y-6'>
          <Accordion
            type='single'
            collapsible
            className='w-full'
            onValueChange={animateValues}
          >
            <AccordionItem value='1'>
              <AccordionTrigger>
                <h1 className='font-bold text-stone-400'>Design</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-[1px]'>
                  {design.map((item, i) => (
                    <Quality
                      key={i}
                      title={item.title}
                      value={item.value}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='2'>
              <AccordionTrigger>
                <h1 className='font-bold text-stone-400'>
                  Website Development
                </h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-[1px]'>
                  {webdev.map((item, i) => (
                    <Quality
                      key={i}
                      title={item.title}
                      value={item.value}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='3'>
              <AccordionTrigger>
                <h1 className='font-bold text-stone-400'>Programming</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-[1px]'>
                  {programming.map((item, i) => (
                    <Quality
                      key={i}
                      title={item.title}
                      value={item.value}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='4'>
              <AccordionTrigger>
                <h1 className='font-bold text-stone-400'>Manufacturing</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-[1px]'>
                  {manufacturing.map((item, i) => (
                    <Quality
                      key={i}
                      title={item.title}
                      value={item.value}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='5'>
              <AccordionTrigger>
                <h1 className='font-bold text-stone-400'>Tools</h1>
              </AccordionTrigger>
              <AccordionContent>
                <div className='space-y-[1px]'>
                  {tools.map((item, i) => (
                    <Quality
                      key={i}
                      title={item.title}
                      value={item.value}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </Dialog>
  );
};

const Quality = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className='text-sm space-y-1 '>
      <h3 className=''>{title}</h3>
      <Progress
        value={value}
        className='h-1.5'
      />
    </div>
  );
};
export default ExpertiseDialog;
