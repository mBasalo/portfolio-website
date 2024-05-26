import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import resume from '../../assets/resume.pdf';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>{t('introduction')}</span>
      </h1>
      <p className='hero-p'>
        {t('description')}
      </p>
      <div className='hero-action'>
        <button className="hero-resume" onClick={handleClick}>
          {t('my_resume')}
        </button>
      </div>
    </div>
  );
};

export default Hero;
