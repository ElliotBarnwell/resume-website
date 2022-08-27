import React from 'react';
import TextfastImg from '../../images/textfast-img.png';
import ProjectLayout from './projectLayout.js';
export default function Projects(){
    return (
      <section id="projects">
                <h2>Projects</h2>
      <div className="project-container">

        <div className="project-panel">
        <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US">
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
        <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US">
        <div className="project-title">
          <h1> Dummy Android Application</h1>
        </div>
          <img src={TextfastImg} className="project-pic" alt="logo"/>

          <div className="project-summary">

            <p>Ever want to test your texting speed and compare it to your friends?
              Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.</p>
          </div>
        </a>
      </div>
      </div>
      </section>
    );
}
