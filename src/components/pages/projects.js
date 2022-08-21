import React from 'react';
import TextfastImg from '../../images/textfast-img.png';

export default function Projects(){
    return (
      <div className="page">
          <section id="projects">
            <h2>Projects</h2>
            <div className="project-container">
              <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US">
              <div className="project-title">
                <h2>Textfast Android Application</h2>
              </div>

              <div className="project-panel">
                <img src={TextfastImg} className="project-pic" alt="logo"/>

                <div className="project-summary">

                  <p>Ever want to test your texting speed and compare it to your friends? Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.
                    Or challenge your friends in TextBattle mode (coming soon) to battle against each other live.
                    See who can text the fastest and gain all the glory in Textfast</p>
                </div>
              </div>
              </a>
            </div>
          </section>


      </div>
    );
}
