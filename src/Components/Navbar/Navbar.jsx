import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>

<h1>mBasalo.uy</h1>
<img className='nav-mob-open' src={menu_open} onClick={openMenu} alt="" />

        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link' offset={200} href='#home'><p onClick={() => setMenu("home")}>Home</p>{menu === "home"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={80} href='#about'><p onClick={() => setMenu("about")}>About Me</p>{menu === "about"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#services'><p onClick={() => setMenu("services")}>Services</p>{menu === "services"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p>{menu === "work"?<img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p>{menu === "contact"?<img src={underline} alt=''/>:<></>}</AnchorLink></li> 
        </ul>

        <div className='nav-connect'><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={() => setMenu("contact")}>Connect with me</p></AnchorLink>  </div>



    </div>
  )
}

export default Navbar