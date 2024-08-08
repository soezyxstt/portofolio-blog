"use client";

import Dashboard from '@/components/dashboard';
import Services from '@/components/services';
import {useEffect, useState} from "react";
import Loading from "@/app/loading";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ReactLenis from "lenis/react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, []);

  return (
    <main className='bg-background'>
      <ReactLenis root>
        {loading && <Loading/>}
        <Navbar/>
        <Dashboard/>
        <Services/>
        <Projects/>
      </ReactLenis>
    </main>
  );
}
