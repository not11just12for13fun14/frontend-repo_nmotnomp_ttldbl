import React, { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const MusicToggle = () => {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        await audio.play()
        setPlaying(true)
      } catch (e) {
        // ignored
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/70 border border-rose-200/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(203,182,255,0.25)] text-rose-900 hover:bg-white/90 transition"
        aria-label="Toggle music"
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className="text-sm">{playing ? 'Pause' : 'Music'}</span>
      </button>
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2c582fa418.mp3?filename=lofi-study-112191.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default MusicToggle
