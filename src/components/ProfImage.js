import React, {Component} from 'react';
import morty from '../images/evilmorty.JPG';

class ProfImage extends Component {
  getImgStyle = () => {
    return {
            float: 'left',
            width:'40%',
            height: 'auto',
          };
  }
  render() {
    return (
        <img src={morty} className="profile" alt="logo" style={this.getImgStyle()}/>
    );
  }
}

export default ProfImage
