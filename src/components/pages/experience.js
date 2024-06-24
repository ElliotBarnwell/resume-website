import React from 'react';
import mugIcon from '../../images/mug-hot-alt.png';
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
                <img src={mugIcon} className="icon" alt="logo"/>
                <h2>Experience</h2>
              </div>
              <div className="experience-div">
              <Box sx={{ maxWidth: 350 , marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{cruiseCard}</Card>
              </Box>
              <Box sx={{ maxWidth: 350, marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{vtsCard}</Card>
              </Box>
              <Box sx={{ maxWidth: 350, marginLeft: 3, marginRight: 3, boxShadow: 3}}>
                <Card variant="outlined">{ecobeeCard}</Card>
              </Box>
              </div>
          </div>
        </section>
    );
}

const cruiseCard = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: '#0C243C', color: '#ffff', height: '475px'}}>
      <Typography variant="h4" gutterBottom>
        Cruise (Current)
      </Typography>
      <Typography variant="h5" component="div">
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
  </React.Fragment>
);

const vtsCard = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: '#0C243C', color: '#ffff', height: '475px'}}>
      <Typography variant="h4" gutterBottom>
      VTS Inc.
      </Typography>
      <Typography variant="h5" component="div">
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
  </React.Fragment>
);

const ecobeeCard = (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: '#0C243C', color: '#ffff', height: '475px'}}>
      <Typography variant="h4" gutterBottom>
        Ecobee
      </Typography>
      <Typography variant="h5" component="div">
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
  </React.Fragment>
);
