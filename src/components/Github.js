import React, {Component} from 'react';
import GithubImg from '../images/github.jpg';

class Github extends Component {
  getImgStyle = () => {
    return { maxWidth:'30%',
    height: 'auto'};
  }
  render() {
    return (
      <div className="image-container">
        <a
          className="Github-link"
          href="https://github.com/ElliotBarnwell"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={GithubImg} className="github-img" alt="github-img" style={this.getImgStyle()}/>
        <br/>

          Github Link
        </a>
      </div>
    );
  }
}

export default Github
