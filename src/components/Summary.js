import React, {Component} from 'react';

class Summary extends Component {
  getStyle = () => {
    return { marginLeft: 100,
            marginRight: 100,
            borderStyle: 'groove',
            padding: 40,
            };
  }
  render() {
    return (
      <div>
        <p style={this.getStyle()}>Software Engineer who is passionate about development and testing.
        Experienced in understanding business requirements and developing
        automated solutions. Team player and knowledgeable in latest software
        technologies
        </p>
      </div>
    );
  }
}

export default Summary
