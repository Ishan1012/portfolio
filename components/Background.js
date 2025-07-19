'use client';
import Image from 'next/image';
import './styles/Background.css';
import { useState } from 'react';

export default function Background({ background }) {
    
    return (
        <div className="background">
            <Image
                src={"/background/"+background.image}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    );
}
