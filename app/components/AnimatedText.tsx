'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (textRef.current) {
      anime({
        targets: textRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      })
    }
  }, [])

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  )
}

export default AnimatedText