import React, {Component} from 'react';

class Title extends Component {

  getHeaderStyle = () => {
      return {

      }
  }

  render() {
    return (
      <div>
        <h1 style={this.getHeaderStyle()}>Elliot Barnwell</h1>
      </div>
    );
  }
}

export default Title
