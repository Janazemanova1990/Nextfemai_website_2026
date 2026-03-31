export function Hero() {
  return (
    <section className="border-b-2 border-nearblack">
      {/* Top bar */}
      <div className="flex items-stretch border-b-2 border-nearblack">
        <div className="flex-1 px-5 py-2.5 border-r-2 border-nearblack flex items-center">
          <img
            src="/nextfem-horizontal-transparent.png"
            alt="Nextfem AI"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center gap-1.5 px-5 bg-purple text-white text-[11px] font-semibold tracking-[0.1em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Accepting applications
        </div>
      </div>

      {/* Main area */}
      <div className="px-8 pt-10 pb-8 grid grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <h1
            className="font-black leading-[0.95] tracking-[-0.04em] mb-5 text-nearblack"
            style={{ fontSize: 'clamp(36px, 6vw, 52px)' }}
          >
            What are<br />
            you <span className="text-outline-purple">building</span><br />
            right now?
          </h1>
          <p className="text-[15px] text-muted-body leading-relaxed max-w-[340px]">
            A peer community for women already building with AI — vibe coding,
            automations, agents. Application only, limited spots.
          </p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="border-2 border-nearblack px-4 py-4 text-center">
            <div className="text-[28px] font-black leading-none">10€</div>
            <div className="text-[11px] text-[#888] uppercase tracking-[0.08em] mt-0.5">per month</div>
          </div>
          <button
            className="bg-coral text-white px-5 py-3.5 text-sm font-bold tracking-[0.03em] whitespace-nowrap cursor-pointer"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for a spot
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 border-t-2 border-nearblack">
        <div className="px-5 py-4 border-r border-border-soft">
          <div className="text-[16px] font-black text-purple leading-none">Founding cohort</div>
          <div className="text-[10px] text-[#888] uppercase tracking-[0.1em] mt-0.5">be one of the first</div>
        </div>
        <div className="px-5 py-4 border-r border-border-soft">
          <div className="text-[24px] font-black text-purple leading-none">1×</div>
          <div className="text-[10px] text-[#888] uppercase tracking-[0.1em] mt-0.5">live / month</div>
        </div>
        <div className="px-5 py-4">
          <div className="text-[16px] font-black text-purple leading-none">Application</div>
          <div className="text-[10px] text-[#888] uppercase tracking-[0.1em] mt-0.5">only</div>
        </div>
      </div>
    </section>
  )
}
