import React from 'react';
import TextfastImg from '../../images/textfast-img.png';
//import DeliveryIcon from '../../images/delivery-icon.png';
import YoutubeIcon from '../../images/eriderhubchannelpic.jpg';
import projectIcon from '../../images/customize-computer.png';

export default function Projects(){
    return (
      <section id="projects">
              <div className="section-header-wrapper">
                  <img src={projectIcon} className="icon" alt="logo"/>
                  <h2>Projects</h2>
              </div>
      <div className="project-container">

        <div className="project-panel">
        <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Textfast Android Application</h1>
        </div>
          <img src={TextfastImg} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Ever want to test your texting speed?
              Well now is your chance with Textfast! Compete with yourself and beat your highest score</p>
          </div>
        </a>
      </div>

        {/* <div className="project-panel">
        <a href="https://github.com/ElliotBarnwell/DeliveryAPI"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Robot delivery API</h1>
        </div>
          <img src={DeliveryIcon} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Robot delivery API built using Swagger UI that accepts delivery requests and returns a quote determined by distance</p>
          </div>
        </a>
      </div> */}

      <div className="project-panel">
        <a href="https://www.youtube.com/channel/UCHrT5jQkooX-R4ntRiFmTzQ"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Youtube Channel: E-RiderHub</h1>
        </div>
          <img src={YoutubeIcon} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Youtube channel reviewing PEVs and ride vids in San Francisco. Check out some vids!</p>
          </div>
        </a>
      </div>

      </div>
      </section>
    );
}
