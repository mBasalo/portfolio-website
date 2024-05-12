import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>

<h1>mBasalo.uy</h1>

        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={200} href='#home'><p onClick={() => setMenu("home")}>Home</p>{menu === "home"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={90} href='#about'><p onClick={() => setMenu("about")}>About Me</p>{menu === "about"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#services'><p onClick={() => setMenu("services")}>Services</p>{menu === "services"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p>{menu === "work"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p>{menu === "contact"?<img src={underline} alt=''/>:<></>}</AnchorLink></li> 
        </ul>

        <div className='nav-connect'><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={() => setMenu("contact")}>Connect with me</p></AnchorLink>  </div>



    </div>
  )
}

export default Navbar