'use client';
import React, { useState } from 'react'
import './styles/Taskbar.css';
import Image from 'next/image';

export default function Taskbar() {
    const [clicked, setClicked] = useState(false);
    const [iconHeight, iconWidth] = [50, 50];
    const icons = ['terminal.png', 'folder.png', 'chrome.png', 'www.png', 'settings.svg'];

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150);
    }

    return (
        <footer className='taskbar'>
            <div className='background'></div>
            {
                icons.map((icon, index) => (
                    <Image
                        key={index} 
                        className={`icons ${clicked ? 'clicked' : ''}`}
                        src={'/icons/' + icon}
                        width={iconWidth}
                        height={iconHeight}
                        alt={icon}
                        onClick={handleClick}
                    />
                ))
            }
        </footer>
    )
}
