import React from 'react';

export default function AboutMe(){
    return (
        <section id="aboutme">
          <h2>About Me</h2>
          <div className="about-me-summary">
          <p>I'm a software engineer with strong expertise in build, test & deployment infrastructure. I have years of experience with different CI and cloud infra tools listed below</p>
          </div>

        <h1>Software Languages/Tools</h1>
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
                <p>Bazel</p>
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

        {/* <h1>Education</h1>
        <div className="education-div">

            <img src={westernUni} className="logo-img" alt="logo"/>
            <div className="education-summary">
              <ul>
                <p>BESc. Mechatronic Systems Engineering</p>
                <p>Western University 2016</p>
              </ul>
            </div>
       </div> */}

       {/* <h1>Hobbies</h1>
       <div className="aboutme-summary">

           <div className="hobby-div"><img src={weightIcon} className="logo-img" alt="logo"/><p>Working out</p></div>
           <div className="hobby-div"><img src={gamingIcon} className="logo-img" alt="logo"/><p>Gaming</p></div>
           <div className="hobby-div"><img src={projectIcon} className="logo-img" alt="logo"/><p>Side Projects</p></div>
           <div className="hobby-div"><img src={youtubeIcon} className="logo-img" alt="logo"/><p>Youtube</p></div>
     </div> */}
        </section>
    );
}
