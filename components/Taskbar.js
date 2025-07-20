'use client';
import React, { useEffect, useState } from 'react'
import './styles/Taskbar.css';
import Image from 'next/image';

export default function Taskbar({ icons, openTask }) {
    const [clicked, setClicked] = useState(null);
    const [iconHeight, iconWidth] = [50, 50];

    const handleClick = (index) => {
        setClicked(index);
        setTimeout(() => {
            setClicked(null)
            openTask(icons[index]);
        }, 150);
    }

    return (
        <footer className='taskbar'>
            <div className='background'></div>
            {
                icons.map((icon, index) => (
                    <Image
                        key={index} 
                        style={{ width: iconWidth+'px', height: iconHeight+'px' }}
                        className={`icons ${clicked === index ? 'clicked' : ''}`}
                        src={'/icons/' + icon}
                        width={iconWidth}
                        height={iconHeight}
                        alt={icon}
                        onClick={() => handleClick(index)}
                        priority
                    />
                ))
            }
        </footer>
    )
}
