'use client';
import Background from '@/components/Background'
import Taskbar from '@/components/Taskbar'
import React, { useState } from 'react'

import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className='container'>
      <Background />
      <Taskbar />
      <Clock />
    </div>
  )
}
