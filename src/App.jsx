import { useState } from "react";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Teams from "./Components/Teams";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
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