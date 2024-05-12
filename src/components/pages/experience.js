import React from 'react';
import mugIcon from '../../images/mug-hot-alt.png'

export default function Experience(){
    return (
        <section id="experience">
            <div className="section-header-wrapper">
              <img src={mugIcon} className="icon" alt="logo"/>
              <h2>Experience</h2>
            </div>

  <div className="experience-div">
            <div className="tech-div">
              Cruise (Current)
              <p>Senior Software Engineer</p>
            </div>

            <div className="tech-div">
              VTS Inc.
              <p>Software Engineer</p>
            </div>

            <div className="tech-div">
              Ecobee
              <p>QA Engineer</p>
            </div>

            </div>
        </section>
    );
}
