import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="focus-ring fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-card/80 text-text backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-glow cursor-pointer"
          aria-label="Back to top"
        >
          <FiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
