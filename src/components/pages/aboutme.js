import React from 'react';
import gamingIcon from '../../images/gaming2.png';
import westernUni from '../../images/westernunilogo.png'

export default function AboutMe(){
    return (
      <div className="page">
        <section id="aboutme">
          <h2>About Me</h2>
          <div className="summary">
          <h3>Hello!</h3>
          <p>My name is Elliot Barnwell and I'm a software engineer who loves building software tools</p>
          <p>I have expertise in testing and optimizing build pipelines</p>
          </div>
          <div className="aboutme-summary">

              <img src={gamingIcon} className="logo-img" alt="logo"/>

            <p>Engineer by day, gamer at night</p>
        </div>
        <div className="education-div">
            <h1>Education</h1>
            <img src={westernUni} className="logo-img" alt="logo"/>
            <p>Western University 2016</p>
       </div>
        </section>
      </div>
    );
}
