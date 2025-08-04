'use client';
import React, { useState, useEffect } from 'react'
import './styles/Clock.css'
import Battery from './Battery';

export default function Clock({ isWhite }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Only show after client mounts 
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // updates every second

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    if (!isMounted) return null;

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
            hour12: true,
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB').replace(/\//g, '-');
    };


    return (
        <div className='clock-container'>
            <div className="battery">
                <Battery color={isWhite ? '#fff' : '#333'} />
            </div>
            <div className='clock'> 
                <p style={{color: isWhite ? '#fff' : '#333'}} >{formatTime(currentTime)}</p>
                <p style={{color: isWhite ? '#fff' : '#333'}} >{formatDate(currentTime)}</p>
            </div>
        </div>
    );
}
