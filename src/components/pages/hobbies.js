import React from 'react';
import gamingIcon from '../../images/gaming-icon.png';
import weightIcon from '../../images/weight-icon.png';
import projectIcon from '../../images/project-icon.png';
import youtubeIcon from '../../images/youtube-icon.png';

export default function Hobbies(){
    return (
        <section id="hobbies">
            <h1>Hobbies</h1>
       <div className="aboutme-summary">

           <div className="hobby-div"><img src={weightIcon} className="logo-img" alt="logo"/><p>Working out</p></div>
           <div className="hobby-div"><img src={gamingIcon} className="logo-img" alt="logo"/><p>Gaming</p></div>
           <div className="hobby-div"><img src={projectIcon} className="logo-img" alt="logo"/><p>Side Projects</p></div>
           <div className="hobby-div"><img src={youtubeIcon} className="logo-img" alt="logo"/><p>Youtube</p></div>
     </div>
        </section>
    );
}
