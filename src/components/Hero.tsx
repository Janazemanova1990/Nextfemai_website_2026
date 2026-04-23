export function Hero() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="border-b-2 border-nearblack">
      {/* Top bar — logo+hamburger on desktop only (mobile uses sticky <Header />) */}
      <div className="flex flex-col sm:flex-row sm:items-stretch border-b-2 border-nearblack">
        <div className="hidden sm:flex flex-1 px-5 py-4 sm:py-2.5 sm:border-r-2 sm:border-nearblack items-center justify-between">
          <img
            src="/nextfem-horizontal-transparent.png"
            alt="Nextfem AI"
            className="h-10 w-auto"
          />
        </div>
        <div className="w-full sm:w-auto flex items-center justify-end sm:justify-start gap-2 px-5 py-2.5 sm:py-0 bg-purple text-white text-[11px] font-black tracking-[0.1em] uppercase">
          Accepting Applications · Closes 30 May
          <span className="relative inline-flex w-2.5 h-2.5 shrink-0">
            <span aria-hidden="true" className="live-dot-ring absolute inset-0 border-2 border-coral" />
            <span className="live-dot relative inline-flex w-2.5 h-2.5 bg-coral" />
          </span>
        </div>
      </div>

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
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">opens in June</div>
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
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">only 12 spots</div>
        </div>
      </div>
    </section>
  )
}
