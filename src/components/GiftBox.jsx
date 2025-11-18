import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GiftBox = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="relative inline-block">
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ y: -2 }}
            onClick={() => setOpen(true)}
          >
            <div className="w-48 h-40 mx-auto rounded-xl bg-gradient-to-br from-[#ffe0ed] via-[#f8dce9] to-[#e8dcff] border border-rose-200/70 shadow-[0_20px_60px_rgba(244,114,182,0.25)]" />
            <div className="w-52 h-4 -mt-40 mx-auto rounded-xl bg-gradient-to-r from-rose-400 to-violet-400" />
            <div className="w-56 h-8 -mt-1 mx-auto rounded-xl bg-gradient-to-r from-[#ffd6e8] to-[#e9defc] border border-rose-200/70 shadow" />
          </motion.div>

          {/* sparkles when open */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -inset-10 pointer-events-none"
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className="absolute text-rose-400/70" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'drop-shadow(0 0 12px rgba(244,114,182,0.6))'
                  }}>✧</span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="mt-10 rounded-3xl bg-white/70 border border-rose-200/70 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(203,182,255,0.25)]"
            >
              <p className="text-rose-900/90 text-xl">
                You unlocked a bundle of happiness, love & magic for the year ahead.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default GiftBox
