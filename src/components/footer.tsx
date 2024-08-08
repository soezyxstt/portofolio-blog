import React from 'react';
import {Copyright} from "lucide-react";

function Footer() {
  return (
    <footer className='h-16 w-full border-t border-border flex items-center justify-center'>
      <p className="uppercase text-[0.5rem] font-light flex gap-1 items-center"><Copyright size={10} /> 2024 adi haditya nursyam</p>
    </footer>
  );
}

export default Footer;