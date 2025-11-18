import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function burstConfetti(container) {
  if (!container) return
  const colors = ['#f4a4c6', '#f8dce9', '#cbb6ff', '#ffd1e6', '#f7caca', '#e7d7ff', '#f4c2c2', '#e9b7c6', '#e7b6a1']
  const count = 40
  const rect = container.getBoundingClientRect()
  const originX = rect.width / 2
  const originY = rect.height / 2

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti-piece'
    const size = Math.random() * 8 + 6
    piece.style.width = `${size}px`
    piece.style.height = `${size * 0.6}px`
    piece.style.background = colors[Math.floor(Math.random() * colors.length)]
    piece.style.left = `${originX}px`
    piece.style.top = `${originY}px`
    piece.style.transform = `rotate(${Math.random() * 360}deg)`

    const dx = (Math.random() - 0.5) * 2
    const dy = (Math.random() - 0.8) * 2
    const tx = dx * (120 + Math.random() * 180)
    const ty = dy * (160 + Math.random() * 260)
    piece.style.setProperty('--tx', `${tx}px`)
    piece.style.setProperty('--ty', `${ty}px`)
    piece.style.setProperty('--rz', `${Math.random() * 540 - 270}deg`)

    container.appendChild(piece)
    setTimeout(() => piece.remove(), 1600)
  }
}

const Hero = () => {
  const containerRef = useRef(null)
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dreamy gradient overlay to blend pastel tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8dce9]/80 via-[#e9defc]/70 to-[#fff1f6]/80 pointer-events-none" />

      {/* soft bokeh lights */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70">
        <div className="bokeh bokeh-1" />
        <div className="bokeh bokeh-2" />
        <div className="bokeh bokeh-3" />
      </div>

      {/* floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`floating-heart`} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            opacity: 0.25 + Math.random() * 0.35,
            filter: 'drop-shadow(0 2px 8px rgba(255,182,193,0.6))'
          }}>💖</span>
        ))}
      </div>

      {/* content */}
      <div ref={containerRef} className="relative z-10 flex min-h-[90vh] items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-extrabold bg-gradient-to-br from-rose-500 via-pink-500 to-violet-500 text-transparent bg-clip-text drop-shadow-[0_8px_30px_rgba(244,114,182,0.35)]">
            Happy Birthday Sneha ✨💖
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="mt-4 text-lg sm:text-xl text-rose-900/80">
            Celebrating your softness, beauty, magic & warmth.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10">
            <button
              onClick={() => burstConfetti(containerRef.current)}
              className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-rose-800 bg-gradient-to-r from-[#ffe4ef] to-[#efe3ff] border border-rose-300/60 shadow-[0_10px_30px_rgba(240,149,171,0.35)] hover:shadow-[0_14px_40px_rgba(203,182,255,0.45)] transition-all duration-500">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-200/0 via-rose-300/30 to-violet-200/0 opacity-0 group-hover:opacity-100 blur-md transition" />
              <span className="relative">Begin the Magic 🎀</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
