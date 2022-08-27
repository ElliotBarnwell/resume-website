import React from 'react';
import gamingIcon from '../../images/gaming2.png';
import westernUni from '../../images/westernunilogo.png'

export default function AboutMe(){
    return (
        <section id="aboutme">
          <h2>About Me</h2>
          <div className="summary">
          <p>I'm a software engineer with strong expertise in testing and optimizing build pipelines</p>
          </div>

        <h1>Education</h1>
        <div className="education-div">

            <img src={westernUni} className="logo-img" alt="logo"/>
            <p>Western University 2016</p>
       </div>

       <h1>Hobbies</h1>
       <div className="aboutme-summary">

           <img src={gamingIcon} className="logo-img" alt="logo"/>

         <p>Engineer by day, gamer at night</p>
     </div>
        </section>
    );
}
