'use client';
import Image from 'next/image';
import './styles/Background.css';
import { useState } from 'react';

export default function Background() {

    const [background, setBackground] = useState("/background/background1.jpg");
    
    return (
        <div className="background">
            <Image
                src={background}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    );
}
