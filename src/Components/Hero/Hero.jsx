import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>

        <img src={profile_img} alt="" />
        <h1><span>I'm Mauricio Basalo</span>, frontend developer based in Uruguay.</h1>
        <p>I am a frontend developer from Uruguay with 2 years of experience as a freelancer frontend developer looking for new opportunities.</p>
        
        <div className='hero-action'>
            <div className="hero-connect">Connect with me
           </div>

            <div className="hero-resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero