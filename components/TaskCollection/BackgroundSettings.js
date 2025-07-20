'use client';
import React, { useState } from 'react'
import '../styles/BackgroundSettings.css';
import Image from 'next/image';

export default function BackgroundSettings({ background, setSelectedBackground }) {
    const [clicked, setClicked] = useState(null);
    const [frameWidth, frameHeight] = [180, 50];

    const handleClick = (index) => {
        setClicked(index);
        setTimeout(() => {
            setClicked(null);
            setSelectedBackground(index);
        }, 150);
    }

    return (
        <div className='settingsContainer'>
            <h1 className='title'>Background Settings</h1>
            <div className="imageContainer">
                {
                    background.map((item, index) => (
                        <Image
                            key={index}
                            className={`image ${clicked === index ? 'clicked' : ''}`}
                            src={"/background/"+item.image}
                            width={frameWidth}
                            height={frameHeight}
                            alt={'background'+index}
                            onClick={() => handleClick(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
