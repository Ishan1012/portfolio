'use client';
import React, { useEffect, useState } from 'react'
import './styles/ApplicationWindow.css';

export default function ApplicationWindow({ activeWindow, handleEvent }) {
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (!close) return;
    handleEvent('close', activeWindow.icon);
    setClose(false);
    setClose(false);
  }, [close]);

  if (activeWindow !== null ) {
    return (
      <div className='windowContainer'>
        <div className='window'>
          <div className="titlebar">
            <span className='dot red' onClick={() => setClose(true)}></span>
            <span className='dot yellow'></span>
            <span className='dot green'></span>
          </div>
          <div className="content">{activeWindow.content}</div>
        </div>
      </div>
    )
  }
  else {
    return <></>;
  }
}
