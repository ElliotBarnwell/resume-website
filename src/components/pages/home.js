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

      <div className="intro" style={{backgroundColor:"#0C243C", paddingBottom: 20, paddingRight: 75}}>
        <Box
              height={400}
              width={1000}
              marginLeft={10}
              marginRight="auto"
              my={4}
              display="flex"
              flexDirection="column"
              marginTop={5}
              gap={2}
              p={2}
              sx={{ border: '3px solid grey'}}
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
