import React, {Component} from 'react';
import lightbulb from '../images/lightbulb.png'

class Logo extends Component {

  render() {
    return (
      <div className="image-container">
        <img src={lightbulb} className="logo-img" alt="logo"/>
      </div>
    )

  }
}

export default Logo
