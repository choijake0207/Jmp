import React from 'react'

export default function Block({x, y, width, height}) {
    const blockStyle = {
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        background: "black"
    }

  return (
    <div className="block" style={blockStyle}>
      
    </div>
  )
}
