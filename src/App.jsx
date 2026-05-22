import { useState } from "react"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import TrustedBy from "./Components/TrustedBy"
import Services from "./Components/Services"
import OurWork from "./Components/OurWork"
import Teams from "./Components/Teams"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>

      {/* 🌐 GLOBAL WRAPPER */}
      <div className='overflow-x-hidden bg-white dark:bg-gray-950 text-gray-800 dark:text-white min-h-screen relative'>

        <Navbar theme={theme} setTheme={setTheme} />

        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />

        <Footer theme={theme} />

      </div>

    </div>
  )
}

export default App