import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {

  const [menu, setMenu] = useState("");

  return (
    <div id='home' className='hero'>

        <img src={profile_img} alt="" />
        <h1><span>I'm Mauricio Basalo</span>, frontend developer based in Uruguay.</h1>
        <p className='hero-p'> I am a frontend developer from Uruguay with 2 years of experience as a freelancer frontend developer looking for new opportunities.</p>
        
        <div className='hero-action'>
        {/* <div className='hero-connect'><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={() => setMenu("contact")}>Connect with me</p></AnchorLink>  </div> */}
 

            
            <div className="hero-resume">
                My resume
            </div>     
        </div>


        </div>
        
  )
}

export default Hero