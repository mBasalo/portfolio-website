import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleBackground, isBackgroundActive }) => {
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
        <Link to='/' className='anchor-link'>
          <p onClick={() => setMenu("home")}>mBasalo.uy</p>
        </Link>
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
          <Link to='/' className='anchor-link'>
            <p onClick={() => setMenu("home")}>{t('home')}</p>
            {menu === "home" && <img src={underline} alt='underline' />}
          </Link>
        </li>
        <li>
          <Link to='/mywork' className='anchor-link'>
            <p onClick={() => setMenu("work")}>{t('portfolio')}</p>
            {menu === "work" && <img src={underline} alt='underline' />}
          </Link>
        </li>
        <li>
          <Link to='/contact' className='anchor-link'>
            <p onClick={() => setMenu("contact")}>{t('contact')}</p>
            {menu === "contact" && <img src={underline} alt='underline' />}
          </Link>
        </li>
        {/* Mueve los botones al menú en la vista móvil */}
        <li className="nav-language">
          <select onChange={handleLanguageChange} className='language-select'>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </li>
        <li className="nav-toggle-background">
          <button onClick={toggleBackground}>
            {isBackgroundActive ? t('Disable Background') : t('Enable Background')}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
