import React, {useEffect, useState} from 'react'

export default function World({speed}) {
    const [xOffset, setXOffset] = useState(0)
    useEffect(() => {
        const moveWorld = () => {
            setXOffset((prev) => {
                if (prev <= -window.innerWidth) {
                    return 0
                }

                return prev - speed
            })
        }
        const interval = setInterval(() => {
            moveWorld()
        }, 32)
    }, [])

    console.log(window.innerWidth)
    console.log(xOffset)

    const worldStyle = {
        background: "linear-gradient(to top, black , grey)",
        backgroundRepeat: "repeat-x",
        transform: `translateX(${xOffset}px)`,
        position: "absolute",
        top: "0",
        left: "0",
        width: "200%",
        height: "100vh",
        border: "1px solid red"
    }
  return (
    <div className="world" style={worldStyle}>
      <p>This Is The World</p>
    </div>
  )
}
