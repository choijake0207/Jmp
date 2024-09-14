import React, { useRef, useState, useEffect } from 'react'
import World from './Components/World'
import "./App.css"

export default function App() {
/* Game Loop */
const [gameOn, setGameOn] = useState(false)
const [scrollSpeed, setScrollSpeed] = useState(1)
const [offSet, setOffSet] = useState(0)
const containerRef = useRef(null)
const [containerDim, setContainerDim] = useState({})

useEffect(() => {
  if (containerRef.current) {
    const {width, height} = containerRef.current.getBoundingClientRect()
    setContainerDim({width, height})
  }
}, [])
console.log(containerDim)
console.log(offSet)

const startLoop = () => {
  setGameOn(true)
  initiateScroll()
}

const initiateScroll = () => {
  setInterval(() => {
    setOffSet((prev) => {
      if (prev === -(containerDim.width / 2)) {
        return 0
      } else {
        return prev - scrollSpeed
      }
    })
  }, 16)
}





  return (
    <div className="game">
      <div className="world-container" ref={containerRef}>
        <World  offset={offSet}/>
      </div>
      <button onClick={startLoop}>Click To Start</button>
    </div>
  )
}
