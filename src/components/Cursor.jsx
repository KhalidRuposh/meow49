import { useEffect, useRef, useState } from 'react'

// Classic smooth custom cursor: small retro dot + trailing outline ring.
// Uses CSS cursor:url() for an instant SVG fallback before JS mounts the ring.
// Desktop (pointer: fine) only; disabled under reduced-motion.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return undefined

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor')

    let x = -100
    let y = -100
    let rx = -100
    let ry = -100
    let raf
    let entered = false

    const show = () => {
      if (!entered) {
        entered = true
        setVisible(true)
      }
    }

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      setHovering(!!e.target.closest?.('a, button, [role="button"]'))
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
      show()
    }

    const onLeave = () => {
      entered = false
      setVisible(false)
    }

    const loop = () => {
      rx += (x - rx) * 0.13
      ry += (y - ry) * 0.13
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* trailing ring */}
      <div
        ref={ringRef}
        className={`cursor-ring-el ${hovering ? 'cursor-ring-hover' : ''}`}
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
      {/* center dot */}
      <div
        ref={dotRef}
        className={`cursor-dot-el ${hovering ? 'cursor-dot-hover' : ''}`}
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  )
}
