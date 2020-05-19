import React, {Component} from 'react';

class Title extends Component {

  getHeaderStyle = () => {
      return {}
  }

  render() {
    return (
        <h1 style={this.getHeaderStyle()}>Elliot Barnwell</h1>
    );
  }
}

export default Title
