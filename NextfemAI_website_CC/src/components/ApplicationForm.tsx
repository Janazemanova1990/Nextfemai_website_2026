import { useState } from 'react'

type FormData = {
  firstName: string
  email: string
  building: string
  tools: string
  wantFromCommunity: string
  link: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full font-sans text-sm border border-[#d8d4e8] px-3.5 py-3 text-nearblack bg-white outline-none transition-colors focus:border-purple'

export function ApplicationForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    email: '',
    building: '',
    tools: '',
    wantFromCommunity: '',
    link: '',
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
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="apply" className="px-8 py-12">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">Apply</p>
        <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-nearblack mb-4">
          Application sent.
        </h2>
        <p className="text-[15px] text-muted-body leading-relaxed max-w-md">
          We read every application. You'll hear back within a few days.
        </p>
      </section>
    )
  }

  return (
    <section id="apply" className="px-8 py-12">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-purple mb-3">Apply</p>
      <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-nearblack mb-7">
        Tell us about your work.
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
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
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="building" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
            What are you currently building or experimenting with?
          </label>
          <textarea
            id="building"
            name="building"
            required
            rows={3}
            placeholder="Describe your current project or what you've been experimenting with..."
            value={form.building}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tools" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="wantFromCommunity" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="link" className="text-[12px] font-bold tracking-[0.08em] uppercase text-muted-body">
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

        <div className="flex items-center gap-5 pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-coral text-white px-8 py-3.5 text-[15px] font-bold cursor-pointer disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : 'Send application'}
          </button>
          <div>
            {status === 'error' ? (
              <p className="text-[12px] text-red-500 leading-relaxed">
                Something went wrong. Please try again.
              </p>
            ) : (
              <p className="text-[12px] text-muted-subtle leading-relaxed">
                We read every application.<br />You'll hear back within a few days.
              </p>
            )}
          </div>
        </div>
      </form>
    </section>
  )
}
