'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import anime from 'animejs'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && sectionRef.current) {
      anime({
        targets: sectionRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      })
    }
  }, [inView])

  return (
    <div ref={ref}>
      <section ref={sectionRef} className={className}>
        {children}
      </section>
    </div>
  )
}

export default AnimatedSection