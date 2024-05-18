import React, {Component} from 'react';
import mando from '../images/mando_helmet_1.jpeg';

class ProfImage extends Component {
  getImgStyle = () => {
    return {
            width:'auto',
            maxHeight: '450px',
            paddingTop: '100px',
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
