import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Summary from '../Summary.js'
import ProfilePic from '../profilePic.js'
import Experience from './experience.js'
import Education from './education.js'
import Hobbies from './hobbies.js'

export default function Home(){
  return(
      <div className="app-main-div">
        <section id="home">
            <div className="resume-header">

              <div className="summary-div">
                <p className="intro-header">Welcome!</p>
                <Summary/>
              </div>

              <ProfilePic/>

            </div>
        </section>

        <AboutMe/>
        <Education/>
        <Hobbies/>
        <Experience/>
        <Projects/>
        <Contact/>



      </div>
  );
}
