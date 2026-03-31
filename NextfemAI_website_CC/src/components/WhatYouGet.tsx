const cards = [
  {
    title: 'Private Discord',
    body: "A small, high-signal community. Share what you're building, ask questions, get real responses from people who are doing the same thing.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ada2cc" strokeWidth="2.5">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ada2cc" strokeWidth="2.5">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ada2cc" strokeWidth="2.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'A room that gets it',
    body: "No explaining what Claude Code is. No justifying why you're building this way. Just people who already know — and are curious about what you're doing.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ada2cc" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export function WhatYouGet() {
  return (
    <section className="px-8 py-12 border-b border-border-soft">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        What you get
      </p>
      <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-nearblack mb-7">
        One offer. Nothing extra.
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {cards.map((card) => (
          <div key={card.title} className="border border-border-soft p-5 bg-white">
            <div className="w-8 h-8 bg-[#ada2cc20] flex items-center justify-center mb-3">
              {card.icon}
            </div>
            <h3 className="text-[14px] font-bold text-nearblack mb-1.5">{card.title}</h3>
            <p className="text-[12px] text-muted-body leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* Price bar */}
      <div className="bg-nearblack px-6 py-5 flex items-center justify-between">
        <p className="text-[13px] text-[#a99dba] leading-relaxed">
          Commitment fee keeps the group<br />serious and the space high-quality.
        </p>
        <div className="text-right">
          <div className="text-[32px] font-black text-white leading-none">10€/mo</div>
          <div className="text-[11px] text-[#6b5f7a] mt-0.5">Cancel any time</div>
        </div>
      </div>
    </section>
  )
}
