import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedBy from "./components/TrustedBy"
import Services from "./components/Services"
import OurWork from "./components/OurWork"
import Teams from "./components/Teams"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light') // get item er por theme ta key 

  return (
    <div className="dark:bg-black relative">
      
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme} />
      {/* custom cursor ring */}
    
    </div>
  )
}

export default App