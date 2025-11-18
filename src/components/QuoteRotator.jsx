import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quotes = [
  'You are rare, Sneha ✨',
  'Softest soul. Brightest heart.',
  'A birthday queen, always.',
  'Stay magical, Sneha 🌸',
]

const QuoteRotator = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/50 border border-rose-200/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(203,182,255,0.25)]">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-medium text-rose-900/90">
              {quotes[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default QuoteRotator
