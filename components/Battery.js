'use client';
import React, { useEffect, useState } from 'react';

const Battery = ({ color }) => {
  const [batteryLevel, setBatteryLevel] = useState(1); // 1 = 100%
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBattery = () => {
          setBatteryLevel(battery.level);
          setCharging(battery.charging);
        };

        updateBattery(); // initial
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);

        return () => {
          battery.removeEventListener('levelchange', updateBattery);
          battery.removeEventListener('chargingchange', updateBattery);
        };
      });
    }
  }, []);

  const percentage = Math.round(batteryLevel * 100);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <svg width="24" height="12" viewBox="0 0 24 12">
        <rect x="0" y="2" width="2" height="8" fill={color} />
        <rect x="0" y="2" width="20" height="8" rx="2" fill="none" stroke={color} strokeWidth="2" />
        <rect x="21" y="4" width="2" height="4" rx="1" fill={color} />
        <rect
          x="2"
          y="4"
          width={Math.max(1, 16 * batteryLevel)}
          height="4"
          rx="1"
          fill={charging ? 'lime' : batteryLevel <= 0.2 ? 'red' : color}
        />
      </svg>
      {/* <span style={{ fontSize: 15, color: color }}>{percentage}%</span> */}
    </div>
  );
};

export default Battery;
