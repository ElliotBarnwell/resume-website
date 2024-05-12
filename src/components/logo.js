import React, {Component} from 'react';
import rocketLaunch from '../images/rocket-launch.png'

class Logo extends Component {

  render() {
    return (
      <div className="image-container">
        <img src={rocketLaunch} className="logo-img" alt="logo"/>
      </div>
    )

  }
}

export default Logo
