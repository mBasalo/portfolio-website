import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>

        {/* <div className="footer-top">
            <div className="footer-top-left">
                <h1>mBasalo.uy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi ad, consectetur molestiae cum ipsa veritatis sint sed mollitia laudantium.</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />

                </div>
                <div className="footer-subscribe">Subscribe</div>

            </div>
        </div> */}

        <hr />

        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Mauricio Basalo© - Frontend Developer.</p>
            <div className="footer-bottom-right">
                {/* <p>Privacy Policy</p> */}
                <p>About me</p>
            </div>
        </div> 

    </div>
  )
}

export default Footer