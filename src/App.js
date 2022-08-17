import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Title from './components/title.js'
import Logo from './components/logo.js'
import Home from './components/pages/home.js'
import AboutMe from './components/pages/aboutme.js'
import Projects from './components/pages/projects.js'
import Contact from './components/pages/contact.js'
import { HashLink, NavHashLink } from 'react-router-hash-link';

function App() {
  return (

    <div className="App">
        <div className="nav-container">
          <Logo/>
          <Title/>
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink to="/aboutme">About Me</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/projects">Projects</HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/contact">Contact</HashLink>
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
