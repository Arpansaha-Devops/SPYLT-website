import React from 'react'
import Navbar from './constants/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
   <main>
     <Navbar />
     <HeroSection />
     <div className='h-dvh' ></div>
   </main>
  )
}

export default App