import { useReveal } from '../hooks/useReveal'

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

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0 mt-[5px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0e0d12"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <polyline points="4 12 10 18 20 6" />
  </svg>
)

const CrossIcon = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0 mt-[5px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9d93ac"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
)

export function IsThisForYou() {
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      data-revealed={revealed}
      className="section-reveal px-8 py-12 border-b-2 border-nearblack bg-bg-off"
    >
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        Is this for you?
      </p>
      <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        Honest check.
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Yes column */}
        <div>
          <h3
            className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2.5 text-nearblack"
            style={{ borderBottom: '2px solid #9fd7d5' }}
          >
            Yes, if you —
          </h3>
          {yesItems.map((item, i) => (
            <div
              key={item}
              className={`flex gap-3 items-start py-3 text-[15px] leading-[1.5] text-nearblack ${
                i < yesItems.length - 1 ? 'border-b-2 border-nearblack' : ''
              }`}
            >
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Not yet column */}
        <div>
          <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase mb-4 pb-2.5 text-muted-subtle border-b-2 border-border-soft">
            Not yet, if you —
          </h3>
          {noItems.map((item, i) => (
            <div
              key={item}
              className={`flex gap-3 items-start py-3 text-[15px] leading-[1.5] text-muted-subtle ${
                i < noItems.length - 1 ? 'border-b-2 border-border-soft' : ''
              }`}
            >
              <CrossIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
