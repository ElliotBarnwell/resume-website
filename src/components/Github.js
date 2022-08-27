import React, {Component} from 'react';
import GithubImg from '../images/github-logo.jpg';

class Github extends Component {
  render() {
    return (
      <div className="image-container">
        <a href="https://github.com/ElliotBarnwell" target="_blank">
          <img src={GithubImg} className="github-img" alt="github-img"/>
        </a>
      </div>
    );
  }
}

export default Github
