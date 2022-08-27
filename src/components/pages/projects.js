import React from 'react';
import TextfastImg from '../../images/textfast-img.png';
import DeliveryIcon from '../../images/delivery-icon.png';

export default function Projects(){
    return (
      <section id="projects">
                <h2>Projects</h2>
      <div className="project-container">

        <div className="project-panel">
        <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Textfast Android Application</h1>
        </div>
          <img src={TextfastImg} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Ever want to test your texting speed and compare it to your friends?
              Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.</p>
          </div>
        </a>
      </div>

        <div className="project-panel">
        <a href="https://github.com/ElliotBarnwell/DeliveryAPI"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Robot delivery API</h1>
        </div>
          <img src={DeliveryIcon} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Robot delivery API built using Swagger UI that accepts delivery requests and returns a quote determined by distance</p>
          </div>
        </a>
      </div>
      </div>
      </section>
    );
}
