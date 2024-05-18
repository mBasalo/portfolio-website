import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {

    const handleClick = (url) => {
        if (url) {
          window.open(url, '_blank'); // Abre la URL en una nueva pestaña
        } else {alert('no url asignada')}
      }

  const [visibleItems, setVisibleItems] = useState(6);
  const [showLessVisible, setShowLessVisible] = useState(false);

  const showMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    setShowLessVisible(true);
  }

  const showLess = () => {
    setVisibleItems(6);
    setShowLessVisible(false);
  }

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice().reverse().slice(0, visibleItems).map((work, index) => (
          <div key={index}>
            <img 
              src={work.w_img} 
              alt={work.w_name} 
              onClick={() => handleClick(work.url)} // Agrega el manejador de click
              style={{ cursor: work.url ? 'pointer' : 'default' }}
            />
          </div>
        ))}
      </div>

      <div className="mywork-buttons">
        {visibleItems < mywork_data.length && (
          <div className="mywork-showmore" onClick={showMore}>
            <p>Show More</p>
            <img src={arrow_icon} alt="Show more" />
          </div>
        )}

        {showLessVisible && (
          <div className="mywork-showless" onClick={showLess}>
            <p>Show Less</p>
            <img src={arrow_icon} alt="Show less" style={{ transform: 'rotate(180deg)' }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default MyWork
