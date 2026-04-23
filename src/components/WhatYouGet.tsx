import { useReveal } from '../hooks/useReveal'

const cards = [
  {
    title: 'Private WhatsApp group',
    body: "A small, active community. Share what you're working on, ask real questions, get responses from women doing the same thing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Two live sessions a month',
    body: 'Twice a month we get on a call. Women sharing real use cases, asking questions, thinking out loud together.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Application-only access',
    body: 'We keep the group small on purpose. Everyone comes in at a similar level — no explaining from scratch, no one feeling left behind.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Curious, no judgment',
    body: "No one's showing off. Just women sharing what they're working on, asking real questions, and learning from each other.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export function WhatYouGet() {
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <section
      id="what-you-get"
      ref={ref}
      data-revealed={revealed}
      className="section-reveal px-8 py-12 border-b-2 border-nearblack"
    >
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        What you get
      </p>
      <h2 className="text-[clamp(26px,3.2vw,38px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        One offer.<br />Small group.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 border border-border-soft sm:border-0 mb-8">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`group p-7 bg-white text-nearblack hover:bg-turquoise ${i < cards.length - 1 ? 'border-b border-border-soft' : ''} sm:border sm:border-border-soft`}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-[20px] font-bold mb-2">{card.title}</h3>
            <p className="text-[16px] text-muted-body group-hover:text-nearblack leading-[1.6]">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Price bar */}
      <div className="bg-brand-purple border-2 border-nearblack px-6 py-6 flex flex-col items-center text-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-6">
        <p className="text-[13px] text-white leading-relaxed uppercase tracking-[0.08em] font-semibold">
          Keeps the community running<br />and the group committed.
        </p>
        <div className="sm:text-right">
          {/* Mobile: stacked 10€ / per month / Cancel any time */}
          <div className="sm:hidden">
            <div className="text-[40px] font-black text-white leading-none tracking-[-0.03em]">10€</div>
            <div className="text-[15px] text-white leading-none mt-1">per month</div>
            <div className="text-[11px] text-white/80 mt-1.5 uppercase tracking-[0.1em]">Cancel any time</div>
          </div>
          {/* Desktop: 10€ per month inline + caption */}
          <div className="hidden sm:block">
            <div className="text-[40px] font-black text-white leading-none tracking-[-0.03em]">
              10€<span className="text-[28px] font-semibold ml-1.5">per month</span>
            </div>
            <div className="text-[11px] text-white/80 mt-1.5 uppercase tracking-[0.1em]">Cancel any time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
