import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cursor from './components/Cursor'
import Drawer from './components/Drawer'
import HamburgerMenu from './components/HamburgerMenu'
import { Contact, Footer, Hero, Portfolio, Pricing, Resume, Services, Skills, Testimonials } from './sections'

function App() {
  return (
    <main  >
      <Hero/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
      <Drawer/>
      <Cursor/>
    </main>
  )
}

export default App
