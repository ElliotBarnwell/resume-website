import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Summary from '../Summary.js'
import ProfilePic from '../profilePic.js'

export default function Home(){
  return(
      <div className="app-main-div">
        <section id="home">
            <div className="resume-header">

              <div className="summary-div">
                <p className="intro-header">Hello!</p>
                <Summary/>
              </div>

              <ProfilePic/>

            </div>
        </section>

        <AboutMe/>
        <Projects/>
        <Contact/>



      </div>
  );
}
