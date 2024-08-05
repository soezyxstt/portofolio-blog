"use client";

import Dashboard from '@/components/dashboard';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className='bg-background'>
      <Dashboard />
      <Services />
    </main>
  );
}
