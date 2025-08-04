import React from 'react'
import '../styles/FolderExplorer.css'

export default function FolderExplorer({ tasks }) {
  return (
    <div className='settingsContainer'>
      <h1 className='title'>Background Settings</h1>
      <div className="imageContainer">
        {
          tasks.map((item, index) => (
            <Image
              key={index}
              className={`image ${clicked === index ? 'clicked' : ''}`}
              src={"/background/" + item.image}
              width={frameWidth}
              height={frameHeight}
              alt={'background' + index}
              onClick={() => handleClick(index)}
            />
          ))
        }
      </div>
    </div>
  )
}
