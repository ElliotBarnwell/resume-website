import React, {Component} from 'react';
import GithubImg from 'images/github.jpg';

class Github extends Component {
  getImgStyle = () => {
    return { position: 'absolute',
            left: 0,
            top: 0};
  }
  render() {
    return (
      <div className="image-container">
        <img src={GithubImg} className="github-img" alt="github-img" />
      </div>
    );
  }
}

export default Github
