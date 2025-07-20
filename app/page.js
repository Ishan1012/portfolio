'use client';
import Background from '@/components/Background'
import Taskbar from '@/components/Taskbar'
import React, { useState, useEffect } from 'react'

import dynamic from 'next/dynamic';
import DesktopIcons from '@/components/DesktopIcons';
import ApplicationWindow from '@/components/ApplicationWindow';
import PdfViewer from '@/components/TaskCollection/PdfViewer';
import BackgroundSettings from '@/components/TaskCollection/BackgroundSettings';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [activeWindow, setActiveWindow] = useState(null);
  const [icons, setIcons] = useState(['terminal.png', 'folder.png', 'chrome.png', 'settings.svg']);
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
      name: 'resume',
      filename: 'resume.pdf',
      icon: 'pdf.png',
      content: <PdfViewer filename={'resume.pdf'} />,
    },
    {
      name: 'settings',
      filename: 'settings',
      icon: 'settings.svg',
      content: <BackgroundSettings background={background} setSelectedBackground={setSelectedBackground} />,
    },
  ];

  const addTask = (icon) => {
    setIcons((prevItems) => [...prevItems, icon]);
  };

  const removeTask = (icon) => {
    setIcons((prevItems) => prevItems.filter(item => item !== icon));
  };

  const handleEvent = (e, icon) => {
    if (e === 'close') {
      if (icon !== 'terminal.png' && icon !== 'folder.png' && icon !== 'chrome.png' && icon !== 'settings.svg') {
        removeTask(icon);
      }
      setActiveWindow(null);
    }
  }

  const openWindow = ([rowIndex, iconIndex]) => {
    const active = taskList.find((task) => task.name === desktopIcons?.[rowIndex]?.[iconIndex]?.name) || null;
    setActiveWindow(active);
    if (active) {
      if (desktopIcons[rowIndex][iconIndex].icon !== 'terminal.png' && desktopIcons[rowIndex][iconIndex].icon !== 'folder.png' && desktopIcons[rowIndex][iconIndex].icon !== 'chrome.png' && desktopIcons[rowIndex][iconIndex].icon !== 'settings.svg') {
        addTask(desktopIcons[rowIndex][iconIndex].icon);
      }
    }
  };

  const openTask = (taskIcon) => {
    const active = taskList.find((task) => task.icon === taskIcon) || null;
    setActiveWindow(active);
  }

  return (
    <div className='main-container'>
      <Background background={background[selectedBackground]} />
      <DesktopIcons desktopIcons={desktopIcons} isWhite={background[selectedBackground].isIconWhite} openWindow={openWindow} />
      <ApplicationWindow activeWindow={activeWindow} handleEvent={handleEvent} />
      <Taskbar icons={icons} openTask={openTask} />
      <Clock isWhite={background[selectedBackground].isWhite} />
    </div>
  )
}
