import React, { useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className='navbar'>
      <h1>
        <AnchorLink className='anchor-link' offset={200} href='#home'>
          <p onClick={() => setMenu("home")}>mBasalo.uy</p>
        </AnchorLink>
      </h1>
      <img
        className='nav-mob-open'
        src={menu_open}
        onClick={toggleMenu}
        alt="Open menu"
      />

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          alt="Close menu"
          className="nav-mob-close"
          onClick={toggleMenu}
        />
        <li>
          <AnchorLink className='anchor-link' offset={200} href='#home'>
            <p onClick={() => setMenu("home")}>{t('home')}</p>
            {menu === "home" && <img src={underline} alt='underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={80} href='#work'>
            <p onClick={() => setMenu("work")}>{t('portfolio')}</p>
            {menu === "work" && <img src={underline} alt='underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={80} href='#contact'>
            <p onClick={() => setMenu("contact")}>{t('contact')}</p>
            {menu === "contact" && <img src={underline} alt='underline' />}
          </AnchorLink>
        </li>
      </ul>

      <div className='nav-language'>
        <select onChange={handleLanguageChange} className='language-select'>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={80} href='#contact'>
          <p onClick={() => setMenu("contact")}>{t('connect_with_me')}</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
