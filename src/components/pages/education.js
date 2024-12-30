import React from 'react';
import westernUni from '../../images/westernunilogo.png'

export default function Education(){
    return (
        <section id="education">
        <h1>Education</h1>
        <div className="education-div">

            <img src={westernUni} className="logo-img" alt="logo"/>
            <div className="education-summary">
              <ul>
                <p>BESc. Mechatronic Systems Engineering</p>
                <p>Western University 2016</p>
              </ul>
            </div>
       </div>
        </section>
    );
}
