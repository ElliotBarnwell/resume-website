import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Title from './components/Title.js'
import Home from './components/pages/home.js'
import { HashLink } from 'react-router-hash-link';
import { Button, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (

    <div className="App">
      
        <div className="nav-container">
          {/* <Logo/> */}
          <Title/>
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink smooth to={'/#home'}><Button variant="outlined" size='large' sx={buttonStyling}><Typography variant="h5">Home</Typography></Button></HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to={'/#aboutme'}><Button variant="outlined" size='large' sx={buttonStyling}><Typography variant="h5">About Me</Typography></Button></HashLink>
            </li>
            <li className="nav-item">
              <HashLink  smooth to={'/#experience'}><Button variant="outlined" size='large' sx={buttonStyling}><Typography variant="h5">Experience</Typography></Button></HashLink>
            </li>
            <li className="nav-item">
              <HashLink  smooth to={'/#projects'}><Button variant="outlined" size='large' sx={buttonStyling}><Typography variant="h5">Projects</Typography></Button></HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to={'/#contact'}><Button variant="outlined" size='large' sx={buttonStyling}><Typography variant="h5">Contact</Typography></Button></HashLink>
            </li>
          </ul>
        </div>



        <Routes>
          <Route exact path="/" element={<Home/ >}/>
        </Routes>


    </div>

  );
}
export default App;

const buttonStyling = {
  color: '#e4e2dd',
  borderColor: '#e4e2dd',
  minWidth: '200px',
}