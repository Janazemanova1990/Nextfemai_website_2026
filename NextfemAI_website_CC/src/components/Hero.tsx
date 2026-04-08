export function Hero() {
  return (
    <section className="border-b-2 border-nearblack">
      {/* Top bar */}
      <div className="flex items-stretch border-b-2 border-nearblack">
        <div className="flex-1 px-5 py-2.5 border-r-2 border-nearblack flex items-center">
          <img
            src="/nextfem-horizontal-transparent.png"
            alt="Nextfem AI"
            className="h-10 w-auto"
          />
        </div>
        <div className="flex items-center gap-1.5 px-5 bg-purple text-white text-[11px] font-black tracking-[0.1em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Accepting applications
        </div>
      </div>

      {/* Main area */}
      <div className="px-8 pt-10 pb-8 grid grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <h1 className="text-[clamp(48px,8vw,96px)] font-black leading-[0.85] tracking-[-0.04em] mb-5 text-nearblack">
            <span className="hero-line hero-line-1">What are</span>
            <span className="hero-line hero-line-2">you <span className="text-outline-purple building-reveal">building</span></span>
            <span className="hero-line hero-line-3">right now?</span>
          </h1>
          <p className="text-[15px] text-muted-body leading-relaxed max-w-[340px]">
            A peer community for women already building with AI — vibe coding,
            automations, agents. Application only, limited spots.
          </p>
        </div>
        <div className="hero-fade-up flex flex-col items-end gap-4">
          <div className="border-2 border-nearblack px-4 py-4 text-center">
            <div className="text-[28px] font-black leading-none">10€</div>
            <div className="text-[11px] text-muted-subtle uppercase tracking-[0.08em] mt-0.5">per month</div>
          </div>
          <button
            className="bg-coral text-white px-6 py-4 text-sm font-bold tracking-[0.04em] uppercase whitespace-nowrap cursor-pointer transition-all duration-150 hover:bg-nearblack active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            style={{ boxShadow: '4px 4px 0px #0e0d12' }}
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for a spot
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-wipe-right grid grid-cols-3 border-t-2 border-nearblack">
        <div className="px-5 py-4 border-r-2 border-nearblack">
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
          <div className="text-[20px] font-black text-purple leading-none">Founding cohort</div>
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">be one of the first</div>
        </div>
        <div className="px-5 py-4 border-r-2 border-nearblack">
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
          <div className="text-[20px] font-black text-purple leading-none">1× live</div>
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
          <div className="text-[20px] font-black text-purple leading-none">Application only</div>
          <div className="text-[13px] text-muted-subtle uppercase tracking-[0.1em] mt-1">limited spots</div>
        </div>
      </div>
    </section>
  )
}
