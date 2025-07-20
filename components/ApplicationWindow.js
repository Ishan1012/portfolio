'use client';
import React, { useEffect, useState } from 'react'
import './styles/ApplicationWindow.css';

export default function ApplicationWindow({ activeWindow, handleEvent }) {
  const [close, setClose] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);

  useEffect(() => {
    if (close && activeWindow?.icon) {
      handleEvent('close', activeWindow.icon);
      setMaximize(false);
      setClose(false);
    }

    if (minimize) {
      handleEvent('min');
      setMinimize(false);
      setMaximize(false);
    }
  }, [close, minimize]);


  if (activeWindow !== null) {
    return (
      <div className='windowContainer'>
        <div className={`window ${maximize ? 'maximize' : ''}`}>
          <div className="titlebar">
            <span className='dot red' onClick={() => setClose(true)}></span>
            <span className='dot yellow' onClick={() => setMaximize(!maximize)}></span>
            <span className='dot green' onClick={() => setMinimize(true)}></span>
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
