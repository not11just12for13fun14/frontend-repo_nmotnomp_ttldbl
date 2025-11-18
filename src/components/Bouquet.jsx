import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Petal = ({ delay }) => (
  <motion.span
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 200, opacity: [0, 1, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeOut' }}
    className="absolute text-rose-300"
    style={{ left: `${Math.random() * 100}%`, filter: 'drop-shadow(0 4px 10px rgba(244,114,182,0.4))' }}
  >
    ❀
  </motion.span>
)

const Bouquet = () => {
  const [bloom, setBloom] = useState(false)

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative h-64">
          <motion.div
            onClick={() => setBloom(true)}
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: bloom ? 1.05 : 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-[#ffe2ee] via-[#f7e7ff] to-[#fff1f6] border border-rose-200/70 shadow-[0_20px_60px_rgba(203,182,255,0.25)] flex items-center justify-center cursor-pointer"
          >
            <div className="relative">
              <div className={`transition-all duration-700 ${bloom ? 'scale-100 opacity-100' : 'scale-75 opacity-80'}`}>
                <div className="w-6 h-6 rounded-full bg-rose-400 mx-auto" />
                <div className="mt-2 grid grid-cols-3 gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-rose-300" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* falling petals */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <Petal key={i} delay={i * 0.3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bouquet
