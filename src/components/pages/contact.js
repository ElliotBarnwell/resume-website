import React from 'react';
import gmail from '../../images/gmail.png';
import linkedIn from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import GithubImg from '../../images/github.png';

export default function Contact(){
    return (
        <section id="contact">
          <div className="circle-back">
            <h2>Contact</h2>
            <div className="contact-div">

            <a href="mailto:ejamesb93@gmail.com?subject:testemail" target="_blank"><img className="contact-icon" src={gmail}/></a>
            <a href="https://www.linkedin.com/in/elliot-barnwell-9b990663/" target="_blank"><img className="contact-icon" src={linkedIn}/></a>
            <a href="https://twitter.com/EjBwell" target="_blank"><img className="contact-icon" src={twitter}/></a>
            <a href="https://github.com/ElliotBarnwell" target="_blank"><img src={GithubImg} className="contact-icon" alt="github-img"/></a>
           </div>
          </div>
        </section>
    );
}

//            <p>Email: ejamesb93@gmail.com</p>
//            <p>LinkedIn: "https://www.linkedin.com/in/elliot-barnwell-9b990663"</p>
