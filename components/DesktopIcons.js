'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import './styles/DesktopIcons.css';

export default function DesktopIcons({ desktopIcons, isWhite, openWindow }) {
    const [clicked, setClicked] = useState([null, null]);
    const [iconHeight, iconWidth] = [50, 50];

    const handleClick = (rowIndex, iconIndex) => {
        setClicked([rowIndex, iconIndex]);
        openWindow([rowIndex, iconIndex])
        setTimeout(() => setClicked([null, null]), 150);
    }

    return (
        <div className='container'>
            {
                desktopIcons.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((appIcon, iconIndex) => (
                            <div
                                className={`app ${clicked[0] === rowIndex && clicked[1] === iconIndex ? 'clicked' : ''}`}
                                onClick={() => handleClick(rowIndex, iconIndex)}
                                key={iconIndex}
                            >

                                <div className="icons">
                                    <Image
                                        src={'/icons/' + appIcon.icon}
                                        width={iconWidth}
                                        height={iconHeight}
                                        alt={appIcon.name}
                                    />
                                    <span className="iconName" style={{ color: isWhite ? '#fff' : '#333' }}>{appIcon.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))

            }
        </div>
    )
}
