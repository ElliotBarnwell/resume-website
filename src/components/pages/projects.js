import React from 'react';
import TextfastImg from '../../images/textfast-img.png';
import YoutubeChanIcon from '../../images/youtube-chan.png';

export default function Projects(){
    return (
      <section id="projects">
                <h2>Projects</h2>
      <div className="project-container">

        <div className="project-panel">
        <a href="https://github.com/ElliotBarnwell/Textfast"  target="_blank" rel="noopener noreferrer">
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
        <a href="https://www.youtube.com/@E-RiderHub"  target="_blank" rel="noopener noreferrer">
        <div className="project-title">
          <h1>Youtube Channel: E-Rider Hub</h1>
        </div>
          <img src={YoutubeChanIcon} className="project-pic" alt="logo"/>

          <div className="project-summary">
            <div className="youtube-desc">
            <p>Youtube channel reviewing PEVs and ride vids in San Francisco. Check out some vids!</p>
            </div>
          </div>
        </a>
      </div>
      </div>
      </section>
    );
}
