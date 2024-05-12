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

export default function AboutMe(){
    return (
        <section id="aboutme">
          <div className="section-header-wrapper">
            <img src={aboutmeIcon} className="icon" alt="logo"/>
            <h2>About Me</h2>
          </div>
          <div className="about-me-summary">
          <p>I'm a full stack software engineer with strong expertise in testing infrastructure and build tools. I have years of experience implementing and maintaining infrastructure</p>
          </div>

        <div className="section-header-wrapper">
          <img src={skillsIcon} className="icon" alt="logo"/>
          <h1>Skills</h1>
        </div>
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
                <p>Buildkite</p>
              </ul>
          </div>
          <div className="tech-div">
            <p className="small-title">Languages</p>
              <ul className="skills-list">
                <p>Go</p>
                <p>Python</p>
                <p>Typescript</p>
                <p>Java</p>
                <p>Ruby</p>
              </ul>
          </div>
          <div className="tech-div">
            <p className="small-title">Other Technologies</p>
              <ul className="skills-list">
                <p>Terraform</p>
                <p>Kubernetes</p>
                <p>Docker</p>
                <p>Prometheus</p>
              </ul>
          </div>
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
