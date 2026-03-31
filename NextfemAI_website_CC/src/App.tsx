import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { IsThisForYou } from './components/IsThisForYou'
import { WhatYouGet } from './components/WhatYouGet'
import { ApplicationForm } from './components/ApplicationForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0eef8] py-8 px-4">
      <div className="bg-white max-w-[860px] mx-auto border-2 border-nearblack">
        <Hero />
        <HowItWorks />
        <IsThisForYou />
        <WhatYouGet />
        <ApplicationForm />
        <Footer />
      </div>
    </div>
  )
}
