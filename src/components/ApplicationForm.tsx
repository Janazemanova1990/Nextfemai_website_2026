import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

type FormData = {
  firstName: string
  email: string
  building: string
  tools: string
  wantFromCommunity: string
  link: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const STORAGE_KEY = 'nextfem-application-draft'
const FALLBACK_EMAIL = 'hi@nextfemai.com'

const emptyForm: FormData = {
  firstName: '',
  email: '',
  building: '',
  tools: '',
  wantFromCommunity: '',
  link: '',
}

const inputClass =
  'w-full font-sans text-[15px] border-2 border-nearblack px-4 py-3 text-nearblack bg-white outline-none transition-colors focus:bg-bg-cream'

const labelClass =
  'text-[13px] font-bold tracking-[0.12em] uppercase text-nearblack'

const buildMailto = (form: FormData) => {
  const body = `First name: ${form.firstName}
Email: ${form.email}

Building:
${form.building}

Tools:
${form.tools}

Want from community:
${form.wantFromCommunity}

Link: ${form.link || '—'}`
  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent('Nextfem AI application')}&body=${encodeURIComponent(body)}`
}

export function ApplicationForm() {
  const { ref, revealed } = useReveal<HTMLElement>()
  const [form, setForm] = useState<FormData>(() => {
    if (typeof window === 'undefined') return emptyForm
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) return { ...emptyForm, ...JSON.parse(saved) }
    } catch {
      // ignore — fall through to empty form
    }
    return emptyForm
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(import.meta.env.VITE_FORM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      try {
        window.localStorage.removeItem(STORAGE_KEY)
      } catch {
        // ignore
      }
      setStatus('success')
    } catch {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form))
      } catch {
        // ignore — localStorage may be unavailable (private mode, quota)
      }
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section
        id="apply"
        ref={ref}
        data-revealed={revealed}
        className="section-reveal px-4 sm:px-8 py-12 border-b-2 border-nearblack"
      >
        <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">Apply</p>
        <h2 className="text-[clamp(26px,3.2vw,38px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-4">
          Application sent.
        </h2>
        <p className="text-[15px] text-muted-body leading-relaxed max-w-md">
          We read every application. You'll hear back within a few days.
        </p>
      </section>
    )
  }

  return (
    <section
      id="apply"
      ref={ref}
      data-revealed={revealed}
      className="section-reveal px-4 sm:px-8 py-12 border-b-2 border-nearblack"
    >
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">Apply</p>
      <h2 className="text-[clamp(26px,3.2vw,38px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        Tell us about<br />your work.
      </h2>

      <div className="border-2 border-nearblack bg-bg-cream p-8 md:p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className={labelClass}>
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="Jana"
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="building" className={labelClass}>
              What are you currently working on or experimenting with?
            </label>
            <textarea
              id="building"
              name="building"
              required
              rows={3}
              placeholder="A recent use case, a project, or something you're trying to figure out..."
              value={form.building}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tools" className={labelClass}>
              What tools are you using?
            </label>
            <textarea
              id="tools"
              name="tools"
              required
              rows={3}
              placeholder="e.g. Claude Code, Cursor, n8n, Figma AI, Zapier..."
              value={form.tools}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="wantFromCommunity" className={labelClass}>
              What do you want from this community?
            </label>
            <textarea
              id="wantFromCommunity"
              name="wantFromCommunity"
              required
              rows={3}
              placeholder="What's missing for you right now?"
              value={form.wantFromCommunity}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="link" className={labelClass}>
              Link to something you've built{' '}
              <span className="font-normal normal-case tracking-normal text-muted-subtle">(optional)</span>
            </label>
            <input
              id="link"
              name="link"
              type="url"
              placeholder="https://..."
              value={form.link}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{ boxShadow: '4px 4px 0px #0e0d12' }}
            className="w-full bg-coral text-white py-5 text-base font-bold uppercase tracking-[0.04em] cursor-pointer transition-all duration-150 hover:bg-nearblack active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending…' : 'Apply to join community'}
          </button>

          <div className="text-center">
            {status === 'error' ? (
              <div className="text-[14px] leading-relaxed space-y-2">
                <p className="text-red-500">
                  Something went wrong. Your answers are saved — try again, or:
                </p>
                <a
                  href={buildMailto(form)}
                  className="inline-block underline font-bold text-nearblack hover:text-coral"
                >
                  Email your application directly →
                </a>
              </div>
            ) : (
              <p className="text-[14px] text-muted-subtle leading-relaxed uppercase tracking-[0.1em]">
                We read every application. You'll hear back within a few days.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
