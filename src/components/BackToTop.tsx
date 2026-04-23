import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-40 w-10 h-10 bg-turquoise border-2 border-nearblack flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
        visible ? 'opacity-70 hover:opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e0d12"
        strokeWidth="2.5"
        strokeLinecap="square"
      >
        <polyline points="6 14 12 8 18 14" />
      </svg>
    </button>
  )
}
