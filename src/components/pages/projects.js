import React from 'react';
import TextfastImg from '../../images/textfast-img.png';
import YoutubeIcon from '../../images/eriderhubchannelpic.jpg';
import projectIcon from '../../images/customize-computer.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

export default function Projects(){
    return (
      <section id="projects">
        <div className="content-section">
              <div className="section-header-wrapper">
                  <img src={projectIcon} className="icon" alt="logo"/>
                  <h2>Projects</h2>
              </div>
        <div className="project-container">

            <Box sx={{ width: 400 , marginLeft: 5, marginRight: 5, boxShadow: 3}}>
              <a href="https://play.google.com/store/apps/details?id=com.testplay.textfast&hl=en_CA&gl=US"  target="_blank" rel="noopener noreferrer">
                <Card variant="outlined">{textFastCard}</Card>
              </a>
            </Box>


            <Box sx={{ width: 400 , marginLeft: 5, marginRight: 5, boxShadow: 3}}>
              <a href="https://www.youtube.com/channel/UCHrT5jQkooX-R4ntRiFmTzQ"  target="_blank" rel="noopener noreferrer">
                <Card variant="outlined">{youtubeCard}</Card>
              </a>
            </Box>

        </div>
      </div>
      </section>
    );
}

const textFastCard = (
  <Card sx={{height: 625}}>
    <CardContent sx={{ backgroundColor: '#0C243C', color: '#ffff'}}>
      <Typography variant="h4" gutterBottom>
        Android Application
      </Typography>
      <Typography variant="h5" component="div">
        Textfast 
      </Typography>
      <CardMedia
        component="img"
        maxHeight = "200"
        image={TextfastImg}
        alt="textfast icon"
        sx={{paddingBottom: 1}}
      />
      <Typography variant="subtitle1" sx={{marginTop: 5}}>
      Ever want to test your texting speed?
              Well now is your chance with Textfast! Compete with yourself and beat your highest score
      </Typography>
    </CardContent>
  </Card>
);

const youtubeCard = (
  <Card sx={{height: 625}}>
    <CardContent sx={{ backgroundColor: '#0C243C', color: '#ffff'}}>
      <Typography variant="h4" gutterBottom>
      Youtube Channel
      </Typography>
      <Typography variant="h5" component="div">
      E-RiderHub
      </Typography>
      <CardMedia
        component="img"
        maxHeight = "200"
        image={YoutubeIcon}
        alt="youtube channel icon"
        sx={{paddingTop: 5, paddingBottom: 10}}
      />
      <Typography sx={{paddingBottom: 1}}>
      Youtube channel reviewing PEVs and ride vids in San Francisco. Check out some vids!
      </Typography>
    </CardContent>
  </Card>
);
