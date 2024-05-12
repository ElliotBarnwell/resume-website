import React from 'react';
import gmail from '../../images/gmail.png';
import linkedIn from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import GithubImg from '../../images/github.png';
import YoutubeIcon from '../../images/youtube-icon.png'
import contactIcon from '../../images/phone-call.png'

export default function Contact(){
    return (
        <section id="contact">
          <div className="section-header-wrapper">
            <img src={contactIcon} className="icon" alt="logo"/>
            <h2>Contact</h2>
          </div>
            <div className="contact-div">

            <a href="mailto:barnwell.elliot@gmail.com" target="_blank" rel="noopener noreferrer"><img className="contact-icon" src={gmail} alt="gmail-img"/></a>
            <a href="https://www.linkedin.com/in/elliot-barnwell-9b990663/" target="_blank" rel="noopener noreferrer"><img className="contact-icon" src={linkedIn} alt="linkedIn-img"/></a>
            <a href="https://twitter.com/EjBwell" target="_blank" rel="noopener noreferrer"><img className="contact-icon" src={twitter} alt="twitter"/></a>
            <a href="https://github.com/ElliotBarnwell" target="_blank" rel="noopener noreferrer"><img src={GithubImg} className="contact-icon" alt="github-img"/></a>
            <a href="https://www.youtube.com/channel/UCHrT5jQkooX-R4ntRiFmTzQ" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} className="contact-icon" alt="youtube-img"/></a>
           </div>

        </section>
    );
}
