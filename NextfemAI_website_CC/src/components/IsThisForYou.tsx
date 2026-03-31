const yesItems = [
  "Are already building something with AI, even if it's messy or unfinished",
  'Have used Claude Code, Cursor, Codex, or vibe coded anything',
  'Want peers who get the context — not mentors, not an audience',
  "Have wins you want to share and questions you can't Google",
]

const noItems = [
  'Have never tried AI-assisted building or heard of vibe coding',
  'Are looking for tutorials, courses, or beginner support',
  'Want a community that will teach you from zero',
]

export function IsThisForYou() {
  return (
    <section className="px-8 py-12 border-b border-border-soft bg-bg-off">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        Is this for you?
      </p>
      <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-nearblack mb-7">
        Honest check.
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Yes column */}
        <div>
          <h3
            className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2.5 text-[#3a8a88]"
            style={{ borderBottom: '2px solid #9fd7d5' }}
          >
            Yes, if you —
          </h3>
          {yesItems.map((item) => (
            <div
              key={item}
              className="flex gap-2.5 items-start py-2 border-b border-dotted border-[#e0dcea] last:border-0 text-[13px] leading-relaxed text-[#2a4a48]"
            >
              <span className="flex-shrink-0 mt-0.5">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Not yet column */}
        <div>
          <h3
            className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2.5 text-[#999]"
            style={{ borderBottom: '2px solid #e0dcea' }}
          >
            Not yet, if you —
          </h3>
          {noItems.map((item) => (
            <div
              key={item}
              className="flex gap-2.5 items-start py-2 border-b border-dotted border-[#e0dcea] last:border-0 text-[13px] leading-relaxed text-[#999]"
            >
              <span className="flex-shrink-0 mt-1">×</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
