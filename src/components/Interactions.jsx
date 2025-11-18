import React, { useEffect } from 'react'

const Interactions = () => {
  useEffect(() => {
    const trail = []
    const max = 10
    const move = (e) => {
      const dot = document.createElement('span')
      dot.className = 'cursor-trail'
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      document.body.appendChild(dot)
      trail.push(dot)
      if (trail.length > max) {
        const first = trail.shift()
        first && first.remove()
      }
      setTimeout(() => dot.remove(), 900)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return null
}

export default Interactions
