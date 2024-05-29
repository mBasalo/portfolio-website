import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSpotify, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faGamepad, faFootballBall, faBasketballBall, faRunning, faHeart, faHandsHelping, faSmile, faMusic } from '@fortawesome/free-solid-svg-icons';

const IconGroup = () => {
  const icons = [
    faGithub, faLinkedin, faHtml5, faCss3, faJs,
    faReact, faNodeJs, faSpotify, faSoundcloud, faYoutube,
    faGlobe, faGamepad, faFootballBall, faBasketballBall, faRunning,
    faHeart, faHandsHelping, faSmile, faMusic, faLinkedin, faHtml5, faCss3, faJs,
    faReact, faNodeJs, faSpotify, faSoundcloud, faYoutube,
    faGlobe
  ];

  return (
    <div className='icon-group'>
      {icons.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} size="2x" className='icon'/>
      ))}
    </div>
  );
};

export default IconGroup;
