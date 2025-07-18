import Background from '@/components/Background'
import Clock from '@/components/Clock'
import Taskbar from '@/components/Taskbar'
import React from 'react'

export default function Home() {
  return (
    <div className='container'>
      <Background />
      <Taskbar />
      <Clock />
    </div>
  )
}
