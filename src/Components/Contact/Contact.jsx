import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  const [menu, setMenu] = useState("contact");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48ad9d29-0407-4e14-acb9-182e5d9c3beb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>{t('get_in_touch')}</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>{t('lets_talk')}</h1>
          <p>{t('available')}</p>

          <div className="contact-details">
            <div className="contact-detail">
              <a href="https://github.com/mBasalo">
                <FontAwesomeIcon icon={faGithub} className='font-awesome git' />
              </a>
            </div>

            <div className="contact-detail">
              <a href="https://www.linkedin.com/in/mauricio-basalo/">
                <FontAwesomeIcon icon={faLinkedin} className='font-awesome linkedin' />
              </a>
            </div>

            <div className="contact-detail">
              <a href="https://www.youtube.com/@mauriciobasalogutierrez5561/videos">
                <FontAwesomeIcon icon={faYoutube} className='font-awesome youtube' />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">{t('your_name')}</label>
          <input type="text" placeholder={t('enter_your_name')} name='name' />

          <label htmlFor="email">{t('your_email')}</label>
          <input type="email" placeholder={t('enter_your_email')} name='email' />

          <label htmlFor="message">{t('your_message')}</label>
          <textarea name="message" rows="8" placeholder={t('enter_your_message')}></textarea>

          <button type='submit' className='contact-submit'>{t('submit_now')}</button>
        </form>
      </div>
    </div>
  );
};
