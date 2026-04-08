import { useReveal } from '../hooks/useReveal'

const cards = [
  {
    title: 'Private Discord',
    body: "A small, high-signal community. Share what you're building, ask questions, get real responses from people who are doing the same thing.",
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
    title: 'Monthly live session',
    body: 'One call a month. No presentations, no agenda. Builders showing their current work, asking questions, thinking out loud together.',
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
    body: "We keep the group small on purpose. Everyone in has been vetted — so you're not starting from scratch explaining your context.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'A room that gets it',
    body: "No explaining what Claude Code is. No justifying why you're building this way. Just people who already know — and are curious about what you're doing.",
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
      ref={ref}
      data-revealed={revealed}
      className="section-reveal px-8 py-12 border-b-2 border-nearblack"
    >
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        What you get
      </p>
      <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        One offer.<br />Built for builders.
      </h2>

      <div className="grid grid-cols-2 border-2 border-nearblack mb-8">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`group p-7 bg-white text-nearblack hover:bg-nearblack hover:text-white ${i % 2 === 0 ? 'border-r-2 border-nearblack' : ''} ${i < 2 ? 'border-b-2 border-nearblack' : ''}`}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-[20px] font-bold mb-2">{card.title}</h3>
            <p className="text-[16px] text-muted-body group-hover:text-white leading-[1.6]">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Price bar */}
      <div className="bg-nearblack border-2 border-nearblack px-6 py-6 flex items-center justify-between">
        <p className="text-[13px] text-ink-ghost leading-relaxed uppercase tracking-[0.08em] font-semibold">
          Commitment fee keeps<br />the group serious.
        </p>
        <div className="text-right">
          <div className="text-[40px] font-black text-white leading-none tracking-[-0.03em]">10€/mo</div>
          <div className="text-[11px] text-ink-ghost mt-1.5 uppercase tracking-[0.1em]">Cancel any time</div>
        </div>
      </div>
    </section>
  )
}
