import React from 'react';
import westernUni from '../../images/westernunilogo.png';
import gamingIcon from '../../images/gaming-icon.png';
import weightIcon from '../../images/weight-icon.png';
import projectIcon from '../../images/project-icon.png';

export default function AboutMe(){
    return (
        <section id="aboutme">
          <h2>About Me</h2>
          <div className="about-me-summary">
          <p>I'm a software engineer with strong expertise in testing and optimizing build pipelines. I have years of experience with different CI tools like CircleCI, Jenkins, Github Actions, Azure Pipelines</p>
          </div>

        <h1>Experience</h1>
        <div className="experience">
          <div className="tech-div">
            <p className="small-title">Cloud Technology</p>
            <ul className="skills-list">
              <p>AWS</p>
              <p>GCP</p>
            </ul>
          </div>
          <div className="tech-div">
            <p className="small-title">Build Tools</p>
              <ul className="skills-list">
                <p>CircleCI</p>
                <p>Github Actions</p>
              </ul>
          </div>
          <div className="tech-div">
            <p className="small-title">Languages</p>
              <ul className="skills-list">
                <p>Java</p>
                <p>Python</p>
                <p>Ruby</p>
                <p>Javascript</p>
              </ul>
          </div>
          <div className="tech-div">
            <p className="small-title">Other Technologies</p>
              <ul className="skills-list">
                <p>Terraform</p>
                <p>Kubernetes</p>
                <p>Docker</p>
              </ul>
          </div>
        </div>

        <h1>Education</h1>
        <div className="education-div">

            <img src={westernUni} className="hobby-img" alt="logo"/>
            <div className="education-summary">
                <p>BESc. Mechatronic Systems Engineering</p>
                <p>Western University 2016</p>
            </div>
       </div>

       <h1>Hobbies</h1>
       <div className="aboutme-summary">

           <div className="hobby-div"><img src={weightIcon} className="hobby-img" alt="logo"/><p>Working out</p></div>
           <div className="hobby-div"><img src={gamingIcon} className="hobby-img" alt="logo"/><p>Gaming</p></div>
           <div className="hobby-div"><img src={projectIcon} className="hobby-img" alt="logo"/><p>Side Projects</p></div>
     </div>
        </section>
    );
}
