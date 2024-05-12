import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Summary from '../Summary.js'
import helloIcon from '../../images/smile-beam.png'
import Experience from './experience.js';

export default function Home(){
  return(
      <div className="app-main-div">
        <section id="home">
              <div className="section-header-wrapper">
                <img src={helloIcon} className="icon" alt="logo"/>
                <p className="intro-header">Hello!</p>
              </div>
              <Summary/>
        </section>

        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>



      </div>
  );
}
