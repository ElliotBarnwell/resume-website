import React from 'react';
import AboutMe from './aboutme.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Experience from './experience.js';
import { Typography,Box } from '@mui/material';

export default function Home(){
  return(
      <div className="app-main-div">
        <section id="home">

      <div className="intro">
        <Box
              height={400}
              width={1000}
              marginLeft={10}
              marginRight="auto"
              my={4}
              display="flex"
              flexDirection="column"
              marginTop={15}
              gap={2}
              p={2}
              sx={{ border: '3px solid grey'}}
              component="fieldset">
              <legend style={{textAlign:"left", marginLeft: 30}}>
                <Typography variant="h1" color="#53583E" >Welcome!</Typography>
              </legend>
              <div className="summary-div">
              <Typography variant="h3" color="text.secondary"> I'm a software engineer who is passionate about development and testing.
                I'm a team player and knowledgeable in latest software
                technologies
                </Typography>
              </div>
        </Box>
        </div>
        </section>

        <AboutMe/>
        <Experience/>
        <Projects/>
        <Contact/>



      </div>
  );
}
