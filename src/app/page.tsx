"use client";

import Dashboard from '@/components/dashboard';
import Services from '@/components/services';
import {useEffect, useState} from "react";
import Loading from "@/app/loading";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ReactLenis from "lenis/react";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";

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
      <ReactLenis root options={{lerp: 0.25}}>
        {loading && <Loading/>}
        <Navbar/>
        <Dashboard/>
        <Services/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </ReactLenis>
    </main>
  );
}
