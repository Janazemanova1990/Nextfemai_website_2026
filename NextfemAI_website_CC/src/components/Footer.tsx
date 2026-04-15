import { useReveal } from '../hooks/useReveal'

export function Footer() {
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <footer
      ref={ref}
      data-revealed={revealed}
      className="section-reveal bg-nearblack text-white"
    >
      <div className="px-8 py-14 border-b border-[#2a2730]">
        <p className="text-[clamp(28px,4vw,44px)] font-black leading-[0.95] tracking-[-0.03em] mb-5">
          What are you<br />working on?
        </p>
        <button
          onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-block text-[13px] font-bold uppercase tracking-[0.12em] text-coral border-b-2 border-coral pb-1 cursor-pointer transition-colors hover:text-white hover:border-white"
        >
          Apply to join →
        </button>
      </div>
      <div className="px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/nextfem-favicon-transparent.png"
            alt="Nextfem AI"
            className="h-6 w-auto"
          />
          <span className="text-[11px] text-ink-ghost uppercase tracking-[0.1em]">© 2026 Nextfem AI</span>
        </div>
        <span className="text-[11px] text-ink-ghost uppercase tracking-[0.1em]">Peer community</span>
      </div>
    </footer>
  )
}
