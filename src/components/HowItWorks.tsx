import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Apply with a short form',
    body: "Tell us what you're working on with AI, what tools you're using, and what you want from a community. We read every application.",
  },
  {
    num: '02',
    title: 'Get accepted & join our WhatsApp group',
    body: "If it's a fit, you're in. The WhatsApp group is where the day-to-day happens — questions, wins, work-in-progress shares.",
  },
  {
    num: '03',
    title: 'Show up to two live sessions a month',
    body: "Twice a month we get on a call to share what we're working on, get feedback from the group, and learn together.",
  },
]

export function HowItWorks() {
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <section
      id="how-it-works"
      ref={ref}
      data-revealed={revealed}
      className="how-it-works px-8 py-12 border-b-2 border-nearblack"
    >
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        How it works
      </p>
      <h2 className="text-[clamp(26px,3.2vw,38px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        Simple.<br />Don't overthink it.
      </h2>
      <div>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`grid grid-cols-[auto_1fr] gap-10 sm:gap-8 items-baseline py-8 ${
              i < steps.length - 1 ? 'border-b-2 border-nearblack' : 'pb-0'
            }`}
            style={{ '--step-i': i } as CSSProperties}
          >
            <span className="step-num-wrap text-[44px] sm:text-[72px] font-black text-purple leading-none tracking-[-0.04em]">
              <span className="step-num">{step.num}</span>
            </span>
            <div className="step-content">
              <h3 className="text-[22px] font-bold text-nearblack mb-2">{step.title}</h3>
              <p className="text-[17px] text-muted-body leading-[1.6] max-w-[480px]">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
