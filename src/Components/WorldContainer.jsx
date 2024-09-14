import React from 'react'

export default function WorldContainer({children}) {


    const containerStyle = {
        position: "absolute",
        border: "2px solid black",
        width: "1000px",
        height: "500px",
        transform: "translateY(-10%)",
        overflow: "hidden"
    }


  return (
    <div className="world-container" style={containerStyle}>
        {children}
    </div>
  )
}
