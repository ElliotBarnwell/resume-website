import React, {Component} from 'react';
import robotimg from '../images/humanoidbot.png';

class Project extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={robotimg} className="github-img" alt="github-img" />
      </div>
    );
  }
}

export default Project
