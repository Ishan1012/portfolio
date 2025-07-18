import React, { useState, useEffect } from 'react'
import './styles/LoadingPage.css';

const bootLines = [
  '[ OK ] Starting udev Kernel Device Manager...',
  '[ OK ] Mounted /proc',
  '[ OK ] Mounted /sys',
  '[ OK ] Started Network Manager.',
  '[ OK ] Reached target Host and Network.',
  '[FAILED] Starting Bluetooth Service.',
  '[ OK ] Started GNOME Display Manager.',
  '[ OK ] Started Authorization Manager.',
  '[ OK ] Started Application Initialization.',
  '[ OK ] Boot complete. Loading UI...'
];

export default function LoadingPage({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, bootLines[index]]);
      index++;
      if (index >= bootLines.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000); // pause before showing main app
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="boot-screen">
      <pre>
        {visibleLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </pre>
    </div>
  );
}
