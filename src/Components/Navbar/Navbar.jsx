import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>

<h1>mBasalo.uy</h1>

        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li> 
        </ul>

        <div className='nav-connect'>
            Connect with me
        </div>



    </div>
  )
}

export default Navbar