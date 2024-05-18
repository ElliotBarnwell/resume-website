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
    <CardContent>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Cruise (Current)
      </Typography>
      <Typography variant="h5" component="div">
        Senior Software Engineer
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Jan 2023 - Current
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={cruiseLogo}
        alt="Paella dish"
        sx={{paddingBottom: "33px"}}
      />
      <Typography variant="body2" sx={{marginTop: 5}}>
      Apart of the Platform Engineering team for an application that AV engineers
                    used for simulation testing and analysis
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const vtsCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h4" color="text.secondary" gutterBottom>
      VTS Inc.
      </Typography>
      <Typography variant="h5" component="div">
      Software Engineer Build & Test infrastructure
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Oct 2020 - Dec 2022
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={vtsLogo}
        alt="Paella dish"
      />
      <Typography variant="body2" sx={{marginTop: 5}} >
        Lead application migrations to AWS for scalability
              Configured all 3rd party tools for our applications in AWS
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const ecobeeCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Ecobee
      </Typography>
      <Typography variant="h5" component="div">
        Senior Software Engineer
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        April 2019 - May 2020
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image={ecobeeLogo}
        alt="Paella dish"
        sx={{paddingBottom: "33px"}}
      />
      <Typography variant="body2" sx={{marginTop: 5}}>
      Apart of the Platform Engineering team for an application that AV engineers
                    used for simulation testing and analysis
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);
