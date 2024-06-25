import React, {Component} from 'react';
import mando from '../images/prof-cropped.jpg';

class ProfImage extends Component {
  getImgStyle = () => {
    return {
            width:'auto',
            maxHeight: '500px',
            marginLeft: '50px',
            paddingTop: '50px',
            paddingBottom: '50px'
          };
  }
  render() {
    return (
        <img src={mando} className="profile" alt="logo" style={this.getImgStyle()}/>
    );
  }
}

export default ProfImage
