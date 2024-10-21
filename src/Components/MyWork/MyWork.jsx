import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { useTranslation } from 'react-i18next';

const MyWork = () => {
  const { t } = useTranslation();

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('no url asignada');
    }
  };

  const [visibleItems, setVisibleItems] = useState(8);
  const [showLessVisible, setShowLessVisible] = useState(false);

  const showMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    setShowLessVisible(true);
  };

  const showLess = () => {
    setVisibleItems(6);
    setShowLessVisible(false);
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>{t('my_latest_work')}</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice().reverse().slice(0, visibleItems).map((work, index) => (
          <div key={index}>
            {/* <h3>{work.w_name}</h3> */}
            <img
              src={work.w_img}
              alt={work.w_name}
              onClick={() => handleClick(work.url)}
              style={{ cursor: work.url ? 'pointer' : 'default' }}
            />
          </div>
        ))}
      </div>

      <div className="mywork-buttons">
        {visibleItems < mywork_data.length && (
          <div className="mywork-showmore" onClick={showMore}>
            <p>{t('show_more')}</p>
            <img src={arrow_icon} alt="Show more" />
          </div>
        )}

        {showLessVisible && (
          <div className="mywork-showless" onClick={showLess}>
            <p>{t('show_less')}</p>
            <img src={arrow_icon} alt="Show less" style={{ transform: 'rotate(180deg)' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
