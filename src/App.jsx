// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import { Contact } from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Background from './Components/Background/Background'

const App = () => {
  return (
    <div>

<Background />

<div>

      <Navbar  />    
    
      <Hero />

      {/* <About />
      <Services />  */}
      <MyWork />
       <Contact/> 
      {/* <Footer />  */}
      
    </div>
    </div>
  )
}

export default App