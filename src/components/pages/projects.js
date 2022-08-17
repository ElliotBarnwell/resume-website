import React from 'react';
import TextfastImg from '../../images/textfast-img.png';

export default function Projects(){
    return (
      <div className="page">
        <h1>Projects</h1>
          <section id="projects-sec">
            <div className="project-container">

              <div className="project-title">
                <h2>Textfast Android Application</h2>
                <p>Project link: <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US">here</a></p>
              </div>

              <div className="project-panel">
                <img src={TextfastImg} className="project-pic" alt="logo"/>

                <div className="project-summary">

                  <p>Ever want to test your texting speed and compare it to your friends? Well now is your chance with Textfast! Enter practice mode to compete with yourself and beat your highest score.
                    Or challenge your friends in TextBattle mode (coming soon) to battle against each other live.
                    See who can text the fastest and gain all the glory in Textfast</p>
                </div>
              </div>
            </div>
          </section>


      </div>
    );
}
