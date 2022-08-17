import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Github from '../github.js'
import Summary from '../summary.js'
import ProfilePic from '../profilePic.js'

export default function Home(){
  return(
      <div className="app-main-div">
        <div className="resume-header">
          <ProfilePic/>

          <div className="summary-div">
            <Summary/>
          </div>

        </div>


        <AboutMe/>
        <Projects/>
        <Contact/>

        <div className="github-div">
          <Github/>
        </div>

      </div>
  );
}
