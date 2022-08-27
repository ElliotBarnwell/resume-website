import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Title from './components/title.js'
import Logo from './components/logo.js'
import Home from './components/pages/home.js'
import { HashLink } from 'react-router-hash-link';

function App() {
  return (

    <div className="App">
        <div className="nav-container">
          <Logo/>
          <Title/>
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink smooth to={'/#home'}>Home</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to={'/#aboutme'}>About Me</HashLink>
            </li>
            <li className="nav-item">
              <HashLink  smooth to={'/#projects'}>Projects</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to={'/#contact'}>Contact</HashLink>
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
