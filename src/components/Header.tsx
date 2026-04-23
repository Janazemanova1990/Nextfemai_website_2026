import { useEffect, useState } from 'react'

const navItems = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Is this for you?', id: 'for-you' },
  { label: 'What you get', id: 'what-you-get' },
  { label: 'Apply', id: 'apply' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    // Wait two frames so React commits the close and the browser re-lays
    // out before we measure — otherwise scroll targets the old document
    // geometry (with the dropdown open) and overshoots.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  }

  const solid = scrolled || menuOpen

  return (
    <header
      className={`sticky top-0 z-50 sm:hidden transition-colors duration-200 ${
        solid ? 'bg-white border-t-2 border-b-2 border-nearblack' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <img
          src="/nextfem-horizontal-transparent.png"
          alt="Nextfem AI"
          className="h-8 w-auto"
        />
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="p-2 -mr-2 cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e0d12"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="bg-white border-t-2 border-nearblack">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-5 py-4 text-[15px] font-bold tracking-[0.04em] uppercase text-nearblack border-b border-nearblack last:border-b-0 hover:bg-bg-cream cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
