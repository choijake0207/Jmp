import React from 'react'

export default function World({offset}) {
    const style = {
        position: "absolute",
        transform: `translateX(${offset}px)`,
        background: "purple"
      }
      


  return (
    <div className="world" style={style}>
    <p>Hello</p>
    </div>
  )
}
