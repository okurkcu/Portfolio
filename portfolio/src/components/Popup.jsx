import React, { useEffect, useState, useRef } from 'react'
import '../css/Popup.css'

const CLOSE_DELAY = 320 // match CSS transition duration in ms

const Popup = ({ onClose }) => {
  const [mounted, setMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // trigger enter animation on next frame
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleRequestClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleRequestClose = () => {
    // start closing animation then notify parent
    if (isClosing) return
    setIsClosing(true)
    timeoutRef.current = setTimeout(() => {
      onClose && onClose()
    }, CLOSE_DELAY)
  }

  const wrapperClass = `popup-wrapper ${mounted && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`.trim()
  const popupClass = `popup ${mounted && !isClosing ? 'open' : ''} ${isClosing ? 'closing' : ''}`.trim()

  return (
    <div className={wrapperClass} onClick={handleRequestClose}>
        <div className={popupClass} onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button className='popup-close' onClick={handleRequestClose} aria-label='Close popup'>×</button>
            {/* content placeholder - replace with your form or content */}
            <div className='popup-content'>
                <h3>Contact Me</h3>
                <p>Thanks for your interest! Drop a message and I'll get back to you.</p>
            </div>
        </div>
    </div>
  )
}

export default Popup