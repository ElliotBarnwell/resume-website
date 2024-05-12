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
            <div className="experience-panel">

              <div className="panel-title">
                Cruise (Current)
                <p>Senior Software Engineer</p>
              </div>
              <div className="panel-body">
                <p>Apart of the Platform Engineering team for an application that AV engineers
                    used for simulation testing and analysis</p>
              </div>

            </div>

            <div className="experience-panel">
              VTS Inc.
              <p>Software Engineer</p>
              <p>Lead application migrations to AWS for scalability
              Configured all 3rd party tools for our applications in AWS
              </p>
            </div>

            <div className="experience-panel">
              Ecobee
              <p>QA Engineer</p>
              <p>Developed E2E test infrastructure for mobile and embedded platforms
                  using docker emulators
              Developed test infrastructure for smart home products</p>
            </div>

            </div>
        </section>
    );
}
