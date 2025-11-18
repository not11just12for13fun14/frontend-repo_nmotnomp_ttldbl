import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const compliments = [
  'You glow in the softest way 💗',
  'Your smile is pure magic ✨',
  'You make the world gentle 🌸',
  'You deserve all the softness today.',
]

const ComplimentGenerator = () => {
  const [msg, setMsg] = useState(null)
  const [visible, setVisible] = useState(false)

  const showCompliment = () => {
    const next = compliments[Math.floor(Math.random() * compliments.length)]
    setMsg(next)
    setVisible(true)
    setTimeout(() => setVisible(false), 1800)
  }

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-xl text-center">
        <button
          onClick={showCompliment}
          className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-rose-800 bg-gradient-to-r from-[#ffeaf2] to-[#efe6ff] border border-rose-300/60 shadow-[0_10px_30px_rgba(244,114,182,0.25)] hover:shadow-[0_14px_40px_rgba(203,182,255,0.35)] transition-all duration-500">
          <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 blur-md transition pointer-events-none" />
          <span className="relative">Tap for a Sweet Compliment ✨</span>
        </button>

        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="mt-8 inline-block rounded-2xl px-6 py-4 bg-white/70 border border-rose-200/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(203,182,255,0.25)]">
              <p className="text-rose-900/90 text-lg">{msg}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ComplimentGenerator
