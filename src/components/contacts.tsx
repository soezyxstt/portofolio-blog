import {motion, type MotionValue, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import {type ReactNode, useRef} from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import {AtSign, Github, Instagram, Linkedin, Twitter} from "lucide-react";
import {contacts as dataContacts} from "@/data";
import {cn} from "@/lib/utils";

function Contacts() {
  const ref = useRef(null)
  const {width, height} = useWindowSize();
  const {scrollYProgress} = useScroll({target: ref, offset: ["0.1 1", "end end"]})

  const percent = useTransform(scrollYProgress, [0, 1], [0, 100])

  const background = useMotionTemplate`conic-gradient(#fff ${percent}%, hsla(0, 0%, 100%, 0.1) 0%)`
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1]);

  const contactX = useTransform(scrollYProgress, [0, 0.5, 1], [width! * 0.3, width! * 0.1, 0]);
  const contactY = useTransform(scrollYProgress, [0, 0.5, 1], [height! * 0.3, height! * 0.1, 0]);

  const wannaX = useTransform(scrollYProgress, [0, 0.5, 1], [-width! * 0.3, -width! * 0.1, 0]);
  const wannaY = useTransform(scrollYProgress, [0, 0.5, 1], [-height! * 0.3, -height! * 0.1, 0]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div ref={ref} id='contacts' className='h-[calc(300vh-4rem)] w-full'>
      <div className="sticky top-0 h-[calc(100vh-4rem)] z-30">
        <div className="w-full h-full overflow-hidden flex flex-col justify-between py-16 px-[10%]">
          <motion.div style={{y: contactY, x: contactX, opacity}}
                      className="text-2xl pt-16 md:text-4xl font-light text-muted [letter-spacing:0.2em] uppercase">Contact
          </motion.div>
          <div className="flex items-center justify-center">
            <motion.div style={{rotate}} className="rounded-full relative">
              <motion.div style={{background}} className='w-16 h-16 relative grid place-items-center rounded-full bg-border md:w-24 md:h-24'>
                <div
                  className="grid place-items-center w-[calc(4rem-2px)] h-[calc(4rem-2px)] rounded-full md:w-[calc(6rem-2px)] md:h-[calc(6rem-2px)] bg-background absolute">HMU
                </div>
              </motion.div>
              <div className="absolute left-1/2 top-1/2">
                {contacts.map((contact, index) => (
                  <Icon key={index} {...contact} index={index} scrollYProgress={scrollYProgress} width={width!}/>)
                )}
              </div>
            </motion.div>
          </div>
          <motion.div
            style={{y: wannaY, x: wannaX, opacity}}
            className="text-right text-2xl md:text-4xl font-medium text-transparent [-webkit-text-stroke:_1px_white]">
            Wanna Talk?
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

const contacts = [{
  icon: <Instagram size={32}/>,
  href: 'https://www.instagram.com/' + dataContacts.instagram
},
  {
    icon: <AtSign size={32}/>,
    href: 'https://mail.google.com/mail/?view=cm&to=' + dataContacts.email
  },
  {
    icon: <Github size={32}/>,
    href: 'https://github.com/' + dataContacts.github
  },
  {
    icon: <Linkedin size={32}/>,
    href: 'https://www.linkedin.com/in/' + dataContacts.linkedin
  },
  {
    icon: <Twitter size={32}/>,
    href: 'https://twitter.com/' + dataContacts.x
  }
]

function Icon({icon, href, className, index, scrollYProgress, width}: {
  icon: ReactNode,
  href: string,
  className?: string,
  scrollYProgress: MotionValue<number>,
  index: number,
  width: number,
}) {
  const isDesktop = width > 768;
  const rotate = useTransform(scrollYProgress, [0, 1], [index * 72, 360 + index * 287])
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 1],
    [isDesktop ? 300 : 100, isDesktop ? 400 : 200, 0, isDesktop ? -250 : -150])
  return (
    <motion.div style={{rotate}} className='absolute'>
      <motion.div whileHover={{rotate: index === 0 ? 360 : index * 72}}
                  transition={{type: 'tween'}}
                  className={cn("border border-muted duration-1000 rounded-full absolute group hover:shadow-contact md:hover:shadow-contact-md", className)}
                  style={{x}}>
        <Link href={href}
              target='_blank'
              className='flex justify-center items-center duration-300 w-16 h-16 md:w-32 md:h-32 group-hover:scale-125'>
          {icon}
        </Link>
      </motion.div>
    </motion.div>
  )
}