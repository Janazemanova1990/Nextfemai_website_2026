import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'

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
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      data-revealed={revealed}
      className="how-it-works px-8 py-12 border-b-2 border-nearblack"
    >
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        How it works
      </p>
      <h2 className="text-[clamp(32px,4vw,48px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        Simple. No fluff.
      </h2>
      <div>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`grid grid-cols-[auto_1fr] gap-8 items-baseline py-8 ${
              i < steps.length - 1 ? 'border-b-2 border-nearblack' : 'pb-0'
            }`}
            style={{ '--step-i': i } as CSSProperties}
          >
            <span className="step-num-wrap text-[72px] font-black text-purple leading-none tracking-[-0.04em]">
              <span className="step-num">{step.num}</span>
            </span>
            <div className="step-content">
              <h3 className="text-[20px] font-bold text-nearblack mb-2">{step.title}</h3>
              <p className="text-[15px] text-muted-body leading-[1.6] max-w-[440px]">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
