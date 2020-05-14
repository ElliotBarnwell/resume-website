import React, {Component} from 'react';
import morty from '../images/evilmorty.JPG';

class Image extends Component {
  getImgStyle = () => {
    return { position: 'absolute',
            left: 50,
            top: 50};
  }
  render() {
    return (
      <div className="image-container">
        <img src={morty} className="profile" alt="logo" style={this.getImgStyle()}/>
      </div>
    );
  }
}

export default Image
