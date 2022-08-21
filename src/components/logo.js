import React, {Component} from 'react';
import robotFace from '../images/robotfaceicon.png'

class Logo extends Component {

  render() {
    return (
      <div className="image-container">
        <img src={robotFace} className="logo-img" alt="logo"/>
      </div>
    )

  }
}

export default Logo
