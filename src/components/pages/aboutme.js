import React from 'react';
import gamingIcon from '../../images/gaming2.png';

export default function AboutMe(){
    return (
      <div className="page">
        <section id="aboutme">
          <h2>About Me</h2>
          <h3>Hello!</h3>
          <p>My name is Elliot Barnwell and I'm a software engineer who loves building tools</p>
                                    <h4>hobbies</h4>
          <div className="aboutme-summary">

              <img src={gamingIcon} className="logo-img" alt="logo"/>

            <p>Engineer by day, gamer at night</p>
        </div>
        <div className="education-div">
            <h3>Education</h3>
            <p>Western University 2016</p>
       </div>
        </section>
      </div>
    );
}
