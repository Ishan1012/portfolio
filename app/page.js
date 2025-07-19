'use client';
import Background from '@/components/Background'
import Taskbar from '@/components/Taskbar'
import React, { useState } from 'react'

import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const icons = ['terminal.png', 'folder.png', 'chrome.png', 'www.png', 'settings.svg'];
  const selectedBackground = 0;
  const background = [
    {
      image: "background1.jpg",
      isClockWhite: false,
    },
    {
      image: "background2.jpg",
      isClockWhite: true,
    },
    {
      image: "background3.jpg",
      isClockWhite: true,
    },
    {
      image: "background4.jpg",
      isClockWhite: true,
    },
  ];

  return (
    <div className='container'>
      <Background background={background[selectedBackground]} />
      <Taskbar icons={icons} />
      <Clock isClockWhite={background[selectedBackground].isClockWhite} />
    </div>
  )
}
