const steps = [
  {
    num: '01',
    title: 'Apply with a short form',
    body: "Tell us what you're building, what tools you're using, and what you want from a community. We read every application.",
  },
  {
    num: '02',
    title: 'Get accepted & join Discord',
    body: "If it's a fit, you're in. The Discord is where the day-to-day happens — questions, wins, work-in-progress shares.",
  },
  {
    num: '03',
    title: 'Show up to the monthly live session',
    body: 'Once a month we get on a call. No agenda, no speakers. Just builders showing their work and talking shop.',
  },
]

export function HowItWorks() {
  return (
    <section className="px-8 py-12 border-b border-border-soft">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        How it works
      </p>
      <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-nearblack mb-7">
        Simple. No fluff.
      </h2>
      <div>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`grid grid-cols-[48px_1fr] gap-4 items-start py-4 ${
              i < steps.length - 1 ? 'border-b border-border-soft' : ''
            }`}
          >
            <span className="text-[13px] font-black text-purple tracking-[0.05em] pt-0.5">
              {step.num}
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-nearblack mb-1">{step.title}</h3>
              <p className="text-[13px] text-muted-body leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
