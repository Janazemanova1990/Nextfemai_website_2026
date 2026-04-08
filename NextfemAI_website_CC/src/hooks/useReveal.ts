import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    // jsdom / SSR fallback — nothing to observe, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, revealed }
}
