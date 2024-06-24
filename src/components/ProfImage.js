import React, {Component} from 'react';
import mando from '../images/prof-cropped.jpg';

class ProfImage extends Component {
  getImgStyle = () => {
    return {
            width:'auto',
            maxHeight: '450px',
             paddingTop: '25px',
            // paddingBottom: '100px',
            paddingLeft: '50px'
            
          };
  }
  render() {
    return (
        <img src={mando} className="profile" alt="logo" style={this.getImgStyle()}/>
    );
  }
}

export default ProfImage
