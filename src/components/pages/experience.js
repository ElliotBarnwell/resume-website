import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import cruiseLogo from '../../images/cruise-logo.png';
import vtsLogo from '../../images/vts-logo.png';
import ecobeeLogo from '../../images/ecobee-logo.png';

export default function Experience(){
    return (
        <section id="experience">
          <div className="content-section">
              <div className="section-header-wrapper">
                <h2>Experience</h2>
              </div>
              <div className="experience-div">
              <Box sx={{ maxWidth: 400 , marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{cruiseCard}</Card>
              </Box>
              <Box sx={{ maxWidth: 400, marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{vtsCard}</Card>
              </Box>
              <Box sx={{ maxWidth: 400, marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{ecobeeCard}</Card>
              </Box>
              </div>
          </div>
        </section>
    );
}

const cruiseCard = (
  <Card
  variant="outlined" >
    <CardContent sx={{ backgroundColor: '#00415A', color: '#ffff', height: '520px'}}>
      <Typography variant="h3" gutterBottom>
        Cruise (Current)
      </Typography>
      <Typography variant="h4" component="div">
        Senior Software Engineer
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        Jan 2023 - Current
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={cruiseLogo}
        alt="Paella dish"
        sx={{paddingBottom: "10px", paddingTop: "28px"}}
      />
      <Typography sx={{marginTop: 3}}>
      Apart of the Platform Engineering team for an application that AV engineers
                    used for simulation testing and analysis
        <br />
      </Typography>
    </CardContent>
  </Card>
);

const vtsCard = (
  <Card
  variant="outlined">
    <CardContent sx={{ backgroundColor: '#00415A', color: '#ffff', height: '520px'}}>
      <Typography variant="h3" gutterBottom>
      VTS Inc.
      </Typography>
      <Typography variant="h4" component="div">
      Software Engineer Build & Test infrastructure
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
       Oct 2020 - Dec 2022
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={vtsLogo}
        alt="Paella dish"
      />
      <Typography sx={{marginTop: 4}} >
        Lead application migrations to AWS for scalability
              Configured all 3rd party tools for our applications in AWS
        <br />
      </Typography>
    </CardContent>
  </Card>
);

const ecobeeCard = (
  <Card
  variant="outlined">
    <CardContent sx={{ backgroundColor: '#00415A', color: '#ffff', height: '520px'}}>
      <Typography variant="h3" gutterBottom>
        Ecobee
      </Typography>
      <Typography variant="h4" component="div">
        Senior Software Engineer
      </Typography>
      <Typography sx={{ mb: 1.5 }} >
        April 2019 - May 2020
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={ecobeeLogo}
        alt="Paella dish"
        sx={{paddingBottom: "15px", paddingTop: "30px"}}
      />
      <Typography sx={{marginTop: 3}}>
      Apart of the Platform Engineering team for an application that AV engineers
                    used for simulation testing and analysis
        <br />
      </Typography>
    </CardContent>
  </Card>
);
