'use client';
import React, { useState } from 'react';
import '../styles/FolderExplorer.css';
import Image from 'next/image';

export default function FolderExplorer() {
  const [clicked, setClicked] = useState(null);

  const frameWidth = 80;
  const frameHeight = 80;

  const tasks = [
    { image: 'chrome.png' },
    { image: 'chrome.png' },
    { image: 'chrome.png' },
    { image: 'chrome.png' },
    { image: 'chrome.png' },
  ];

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => {
      setClicked(null);
    }, 150);
  };

  return (
    <div className='folderContainer'>
      <h1 className='title'>Folder Explorer</h1>
      <div className="imageContainer">
        {tasks.map((item, index) => (
          <Image
            key={index}
            className={`image ${clicked === index ? 'clicked' : ''}`}
            src={`/icons/${item.image}`} 
            width={frameWidth}
            height={frameHeight}
            alt={`item-${index}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
