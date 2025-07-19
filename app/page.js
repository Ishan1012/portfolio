'use client';
import Background from '@/components/Background'
import Taskbar from '@/components/Taskbar'
import React, { useState } from 'react'

import dynamic from 'next/dynamic';
import DesktopIcons from '@/components/DesktopIcons';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const icons = ['terminal.png', 'folder.png', 'chrome.png', 'www.png', 'settings.svg'];
  const selectedBackground = 0;
  const background = [
    {
      image: "background1.jpg",
      isWhite: false,
      isIconWhite: false,
    },
    {
      image: "background2.jpg",
      isWhite: true,
      isIconWhite: false,
    },
    {
      image: "background3.jpg",
      isWhite: true,
      isIconWhite: false,
    },
    {
      image: "background4.jpg",
      isWhite: true,
      isIconWhite: false,
    },
  ];
  const desktopIcons = [
    [
      {
        name: 'resume',
        icon: 'pdf.png',
      },
      {
        name: 'projects',
        icon: 'folder.png',
      },
      {
        name: 'terminal',
        icon: 'terminal.png',
      },
      {
        name: 'contact',
        icon: 'word.png',
      },
    ],
    [
      {
        name: 'demo',
        icon: 'chrome.png',
      },
      {
        name: 'settings',
        icon: 'settings.svg',
      },
      {
        name: 'images',
        icon: 'folder.png',
      },
    ]

  ];
  const taskList = [
    {
      title: 'resume',
      filename: 'resume.pdf',
      icon: 'pdf.png',
      
    }
  ];

  return (
    <div className='container'>
      <Background background={background[selectedBackground]} />
      <DesktopIcons desktopIcons={desktopIcons} isWhite={background[selectedBackground].isIconWhite} />
      
      <Taskbar icons={icons} />
      <Clock isWhite={background[selectedBackground].isWhite} />
    </div>
  )
}
