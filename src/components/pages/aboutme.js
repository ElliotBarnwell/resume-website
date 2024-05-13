import React from 'react';
import westernUni from '../../images/westernunilogo.png';
import gamingIcon from '../../images/gaming-icon.png';
import weightIcon from '../../images/weight-icon.png';
import projectIcon from '../../images/project-icon.png';
import youtubeIcon from '../../images/youtube-icon.png';
import aboutmeIcon from '../../images/bars-sort.png';
import skillsIcon from '../../images/wrench-simple.png'
import educationIcon from '../../images/school.png'
import hobbiesIcon from '../../images/biking.png'
import { Box, Typography, CardContent, Card, Divider} from '@mui/material';

export default function AboutMe(){
    return (
        <section id="aboutme">

              <Box
              maxHeight={600}
              width={1000}
              marginRight="auto"
              marginLeft="auto"
              my={4}
              display="flex"
              flexDirection="column"
              marginTop={5}
              gap={2}
              p={2}
              sx={{ border: '0px'}}
              component="fieldset">
          <div className="section-header-wrapper">
            <img src={aboutmeIcon} className="icon" alt="logo"/>
            <Typography variant="h2">About Me</Typography>
          </div>
          <div className="about-me-summary">
          <Typography variant="h4" sx={{ paddingLeft: 5}}>I'm a full stack software engineer with strong expertise in testing infrastructure and build tools. I have years of experience implementing and maintaining infrastructure</Typography>
          
          </div>
          </Box>

        <div className="section-header-wrapper">
          <img src={skillsIcon} className="icon" alt="logo"/>
          <Typography variant="h2" sx={{fontWeight: 50, paddingLeft: 5}}>Skills</Typography>
        </div>
        <div className="experience">
          {skillsCard("Cloud Technology", ["AWS", "Github Actions", "Buildkite"])}
          {skillsCard("Build Tools", ["CirclCI", "GCP"])}
          {skillsCard("Languages", ["Go", "Python", "Typescript", "Java", "Ruby"])}
          {skillsCard("Other Tools", ["Terraform", "Kubernetes", "Docker", "Prometheus"])}
        </div>

        <div className="section-header-wrapper">
          <img src={educationIcon} className="icon" alt="logo"/>
          <h1>Education</h1>
        </div>
        <div className="education-div">

            <img src={westernUni} className="hobby-img" alt="logo"/>
            <div className="education-summary">
                <p>BESc. Mechatronic Systems Engineering</p>
                <p>Western University 2016</p>
            </div>
       </div>

       <div className="section-header-wrapper">
          <img src={hobbiesIcon} className="icon" alt="logo"/>
          <h1>Hobbies</h1>
       </div>
       <div className="aboutme-summary">

           <div className="hobby-div"><img src={weightIcon} className="hobby-img" alt="logo"/><p>Working out</p></div>
           <div className="hobby-div"><img src={gamingIcon} className="hobby-img" alt="logo"/><p>Gaming</p></div>
           <div className="hobby-div"><img src={projectIcon} className="hobby-img" alt="logo"/><p>Side Projects</p></div>
           <div className="hobby-div"><img src={youtubeIcon} className="hobby-img" alt="logo"/><p>Youtube editing</p></div>
     </div>
        </section>
    );
}

export function skillsCard(title, contents) {
  return(
    <Card
    variant="outlined"
    sx={{width: 225, height: 250, paddingLeft: 2, paddingRight: 2, marginLeft: 3, marginRight: 3, boxShadow: 5
    }}>
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom sx={{height: 30}}>
         {title}
        </Typography>
       <Divider/ >
        <Typography variant="h6" sx={{marginTop: 2}}>
          {contents.map(content => 
          <p>{content}</p>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}

