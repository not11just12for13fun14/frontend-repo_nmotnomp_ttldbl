import React from 'react'
import { motion } from 'framer-motion'

const LetterCard = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-[2px] bg-gradient-to-br from-rose-200 via-rose-300/60 to-amber-200/70">
          <div className="rounded-3xl backdrop-blur-xl bg-white/40 border border-rose-300/50 p-10">
            <h2 className="text-3xl sm:text-4xl font-serif text-rose-900/90 mb-4">A Letter For You 💌</h2>
            <div className="text-rose-900/80 text-lg leading-relaxed font-[var(--font-manrope)]">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mb-4">
                Dear Sneha,
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25 }} viewport={{ once: true }} className="mb-4">
                Today is for your softness—the gentle way you light a room, the quiet kindness that lingers, the magic you leave with every smile.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="mb-4">
                May this year be filled with tender mornings, pastel sunsets, warm laughter, and little sparkles that follow you wherever you go.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.55 }} viewport={{ once: true }} className="mb-4">
                You are loved beyond measure, cherished in quiet ways, and celebrated today with all the glow your heart deserves.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="">Happy Birthday, beautiful soul. ✨
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LetterCard
