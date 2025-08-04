'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Background from '@/components/Background';
import Taskbar from '@/components/Taskbar';
import DesktopIcons from '@/components/DesktopIcons';
import ApplicationWindow from '@/components/ApplicationWindow';
import getBackgrounds from '@/services/BackgroundService';
import generateDesktopIcons, { generateDesktopTaskList } from '@/services/DesktopIconService';
import generateInitialIcons from '@/services/TaskBarService';
import generateTaskList from '@/services/TaskListService';

const Clock = dynamic(() => import('../components/Clock'), { ssr: false });

export default function Home() {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [activeWindow, setActiveWindow] = useState(null);
  const backgrounds = getBackgrounds();
  const [requirementsForm, setRequirementsForm] = useState([
    backgrounds,
    setSelectedBackground
  ]);
  const [taskList, setTaskList] = useState(generateTaskList(requirementsForm));
  const [desktopTaskList, setDesktopTaskList] = useState(generateDesktopTaskList(taskList));
  const [taskBarIcons, setTaskBarIcons] = useState(generateInitialIcons(taskList));
  const [desktopIcons, setDesktopIcons] = useState(generateDesktopIcons(desktopTaskList));

  const addTask = (icon) => {
    setTaskBarIcons((prev) => [...prev, icon]);
  };

  const removeTask = (icon) => {
    setTaskBarIcons((prev) => prev.filter((item) => item !== icon));
  };

  const handleEvent = (e, icon) => {
    if (e === 'close') {
      if (!['terminal.png', 'folder.png', 'chrome.png', 'settings.svg'].includes(icon)) {
        removeTask(icon);
      }
      setActiveWindow(null);
    } else if (e === 'min') {
      setActiveWindow(null);
    }
  };

  const openWindow = ([rowIndex, iconIndex]) => {
    const desktopItem = desktopIcons?.[rowIndex]?.[iconIndex];
    const active = taskList.find((task) => task.name === desktopItem?.name) || null;
    setActiveWindow(active);

    if (active && !['terminal.png', 'folder.png', 'chrome.png', 'settings.svg'].includes(desktopItem.icon)) {
      addTask(desktopItem.icon);
    }
  };

  const openTask = (taskIcon) => {
    const active = taskList.find((task) => task.icon === taskIcon) || null;
    setActiveWindow(active);
  };

  const currentBg = backgrounds[selectedBackground];

  return (
    <div className="main-container">
      <Background background={currentBg} />
      <DesktopIcons
        desktopIcons={desktopIcons}
        isWhite={currentBg.isIconWhite}
        openWindow={openWindow}
      />
      <ApplicationWindow activeWindow={activeWindow} handleEvent={handleEvent} />
      <Taskbar icons={taskBarIcons} openTask={openTask} />
      <Clock isWhite={currentBg.isWhite} />
    </div>
  );
}
