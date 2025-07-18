'use client';
import Background from '@/components/Background'
import Taskbar from '@/components/Taskbar'
import React, { useState } from 'react'

import dynamic from 'next/dynamic';
import LoadingPage from '@/components/LoadingPage';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className='loading'>
      {bootComplete ? (
        <div className='container'>
        <Background />
        <Taskbar />
        <Clock />
      </div>
      ) : (
        <LoadingPage onComplete={() => setBootComplete(true)} />
      )}
    </div>
  )
}
