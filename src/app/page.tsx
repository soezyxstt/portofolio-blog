"use client";

import Dashboard from '@/components/dashboard';
import Services from '@/components/services';
import {useEffect, useState} from "react";
import Loading from "@/app/loading";
import Navbar from "@/components/navbar";

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
      {loading && <Loading/>}
      <Navbar/>
      <Dashboard/>
      <Services/>
    </main>
  );
}
