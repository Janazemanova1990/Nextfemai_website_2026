import { useReveal } from '../hooks/useReveal'

export function WhoBehindThis() {
  const { ref, revealed } = useReveal<HTMLElement>()
  return (
    <section
      id="who-behind-this"
      ref={ref}
      data-revealed={revealed}
      className="section-reveal px-8 py-12 border-b-2 border-nearblack bg-white"
    >
      <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-purple mb-3">
        Who's behind this
      </p>
      <h2 className="text-[clamp(26px,3.2vw,38px)] font-black leading-[0.95] tracking-[-0.03em] text-nearblack mb-8">
        Hi, I'm Jana.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 items-start">
        <div className="border-2 border-nearblack overflow-hidden w-[200px] h-[200px]">
          <img
            src="/jana-photo.jpg"
            alt="Jana, founder of NextFem AI"
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="text-[16px] leading-[1.6] text-nearblack space-y-4">
          <p>
            I'm a freelancer based in Prague, currently working from Asia.<br />
            I started NextFem AI because I was tired of learning this alone.<br />
            I'd figure something out on a Tuesday and have no one to tell.<br />
            I'd hit a wall on a Wednesday and have no one to ask.
          </p>
          <p>
            I built the room I needed. If you've been figuring this out alone too, come in.
          </p>
          <p className="text-muted-body">— Jana</p>
        </div>
      </div>
    </section>
  )
}
