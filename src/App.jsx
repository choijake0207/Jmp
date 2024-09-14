import React, {useEffect, useState, useRef} from 'react'
import "./App.css"

export default function App() {
    const [gameDim, setGameDim] = useState({x: 0, y: 0, height: 0, width: 0})
    const gameRef = useRef(null)
    const boundaries = {leftWall: gameDim.x, rightWall: gameDim.x + gameDim.width, topWall: gameDim.y, bottomWall: gameDim.y - gameDim.height}
    useEffect(() => {
        if (gameRef.current) {
            const property = gameRef.current.getBoundingClientRect()
            setGameDim({x: property.x, y: property.y, height: property.height, width: property.width})
            console.log(gameDim)
        }
    }, [])
        
    console.log(boundaries)

  return (
    <div className="app">
        <div className="game" ref={gameRef}>
            <Sprite/>

        </div>
      
    </div>
  )
}

function Sprite () {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const handleKey = (event) => {
            switch (event.code) {
                case "ArrowUp":
                    setPosition(prev => ({...prev, y: prev.y - 10 }))
                    break;
                case "ArrowRight":
                    setPosition(prev => ({...prev, x: prev.x + 10}))
                    break;
                case "ArrowLeft":
                    setPosition(prev => ({...prev, x: prev.x - 10}))
                    break;
                case "ArrowDown":
                    setPosition(prev => ({...prev, y: prev.y + 10}))
            }
        }
        window.addEventListener("keydown", handleKey)
    }, [])

    const spriteStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
        height: "20px",
        width: "20px",
        background: "white",
        position: "absolute"
    }

    return (
        <div className="sprite" style={spriteStyle}>

        </div>
    )
}
