import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>

        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">

            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut corrupti ex sequi asperiores eum, deserunt, optio harum rerum et porro repudiandae pariatur aliquam quod incidunt dolorum magni, totam vitae?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, obcaecati deserunt ipsum rem voluptatum illo.</p>
                </div>

                <div className="about-skills">

                </div>
            </div>

        


        </div>
        <div className="about-achivements">
                <div className="about-achivement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />

                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />

                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div>

    </div>
  )
}

export default About