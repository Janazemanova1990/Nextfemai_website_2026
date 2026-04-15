import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { IsThisForYou } from './components/IsThisForYou'
import { WhoBehindThis } from './components/WhoBehindThis'
import { WhatYouGet } from './components/WhatYouGet'
import { ApplicationForm } from './components/ApplicationForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-cream py-8 px-4 md:py-12">
      <div className="bg-white max-w-[860px] mx-auto border-2 border-nearblack shadow-[8px_8px_0_0_#0e0d12]">
        <Hero />
        <HowItWorks />
        <IsThisForYou />
        <WhoBehindThis />
        <WhatYouGet />
        <ApplicationForm />
        <Footer />
      </div>
    </div>
  )
}
