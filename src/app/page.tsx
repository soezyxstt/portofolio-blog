"use client";

import Dashboard from '@/components/dashboard';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className='flex min-h-dvh flex-col items-center justify-between w-full'>
      <Dashboard />
      <Services />
    </main>
  );
}
