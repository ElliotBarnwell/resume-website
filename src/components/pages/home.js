import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Experience from './experience.js';
import ProfImage from '../ProfImage.js';
import { Typography,Box } from '@mui/material';

export default function Home(){
  return(
      <div className="app-main-div">
        <section id="home">

      <div className="intro" style={{backgroundColor:"#0C243C"}}>
        <div className= "intro-text">
        <Box
              component="fieldset">
              <legend style={{textAlign:"left", marginLeft: 30}}>
                <Typography variant="h1" color="#55C2C3" fontWeight="800" >Welcome!</Typography>
              </legend>
              <div className="summary-div">
              <Typography variant="h3" > I'm a software engineer who is passionate about development and testing.
                I'm a team player and knowledgeable in latest software
                technologies
                </Typography>
              </div>
        </Box>
        </div>
        <ProfImage/>
        </div>
        </section>

        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>



      </div>
  );
}
