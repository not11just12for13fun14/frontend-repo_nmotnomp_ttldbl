import React from 'react'
import Hero from './components/Hero'
import LetterCard from './components/LetterCard'
import QuoteRotator from './components/QuoteRotator'
import ComplimentGenerator from './components/ComplimentGenerator'
import GiftBox from './components/GiftBox'
import Bouquet from './components/Bouquet'
import MusicToggle from './components/MusicToggle'
import Interactions from './components/Interactions'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8dce9] via-[#efe6ff] to-[#fff6fb] text-rose-900">
      {/* magical sparkly scroll parallax layer */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,192,203,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(203,182,255,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,228,225,0.18),transparent_40%)]" />
      </div>

      <Hero />
      <LetterCard />
      <QuoteRotator />
      <ComplimentGenerator />
      <GiftBox />
      <Bouquet />

      <MusicToggle />
      <Interactions />

      <footer className="py-12 text-center text-rose-900/60">
        Made with love for Sneha ✨
      </footer>
    </div>
  )
}

export default App
