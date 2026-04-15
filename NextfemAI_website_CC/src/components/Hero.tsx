import { useState } from 'react'

const navItems = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Is this for you?', id: 'for-you' },
  { label: 'What you get', id: 'what-you-get' },
  { label: 'Apply', id: 'apply' },
]

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 200
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <section className="border-b-2 border-nearblack">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-stretch border-b-2 border-nearblack">
        <div className="flex-1 px-5 py-4 sm:py-2.5 sm:border-r-2 sm:border-nearblack flex items-center justify-between">
          <img
            src="/nextfem-horizontal-transparent.png"
            alt="Nextfem AI"
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="block sm:hidden p-2 -mr-2 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0e0d12" strokeWidth="2.5" strokeLinecap="square">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-end sm:justify-start gap-1.5 px-5 py-2.5 sm:py-0 bg-purple text-white text-[11px] font-black tracking-[0.1em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Accepting applications
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="block sm:hidden bg-white border-b-2 border-nearblack">
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

      {/* Main area */}
      <div className="px-8 pt-12 pb-10 sm:pt-20 sm:pb-16 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-stretch sm:items-end">
        <div>
          <h1 className="text-[clamp(40px,6.5vw,76px)] font-black leading-[0.95] tracking-[-0.04em] mb-9 text-nearblack">
            <span className="hero-line hero-line-1">What are</span>
            <span className="hero-line hero-line-2">you <span className="text-outline-purple building-reveal">working on</span></span>
            <span className="hero-line hero-line-3">with AI right now?</span>
          </h1>
          <p className="text-[19px] text-muted-body leading-relaxed max-w-[420px]">
            <strong className="font-bold text-nearblack">A peer community for women</strong>{' '}
            actively working with AI on practical use cases. Application only,
            limited spots.
          </p>
        </div>
        <div className="hero-fade-up flex flex-col items-stretch sm:items-end gap-4">
          <div className="w-full sm:w-auto border-2 border-nearblack px-4 py-3.5 sm:py-4 flex flex-row sm:flex-col items-baseline sm:items-center justify-center gap-1.5 sm:gap-0 text-center">
            <div className="text-[28px] font-black leading-none">10€</div>
            <div className="text-[11px] text-muted-subtle uppercase tracking-[0.08em] sm:mt-0.5">per month</div>
          </div>
          <button
            className="w-full sm:w-auto bg-coral text-white px-6 py-4 text-sm font-bold tracking-[0.04em] uppercase whitespace-nowrap cursor-pointer transition-all duration-150 hover:bg-nearblack active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            style={{ boxShadow: '4px 4px 0px #0e0d12' }}
            onClick={() => scrollToId('apply')}
          >
            Apply to join →
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-wipe-right grid grid-cols-1 sm:grid-cols-3 border-t-2 border-nearblack">
        <div className="px-5 py-4 border-b-2 sm:border-b-0 sm:border-r-2 border-nearblack">
          <svg
            className="mb-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ada2cc"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <div className="text-[20px] font-black text-nearblack leading-none">Cohort 2</div>
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">now open</div>
        </div>
        <div className="px-5 py-4 border-b-2 sm:border-b-0 sm:border-r-2 border-nearblack">
          <svg
            className="mb-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ada2cc"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" />
          </svg>
          <div className="text-[20px] font-black text-nearblack leading-none">2× live sessions</div>
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">per month</div>
        </div>
        <div className="px-5 py-4">
          <svg
            className="mb-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ada2cc"
            strokeWidth="2"
            strokeLinecap="square"
          >
            <rect x="3" y="11" width="18" height="11" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <div className="text-[20px] font-black text-nearblack leading-none">Application only</div>
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">limited spots</div>
        </div>
      </div>
    </section>
  )
}
