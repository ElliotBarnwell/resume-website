import React, {Component} from 'react';
import profile from '../images/profile1.jpg';
class ProfilePic extends Component {
  render() {
    return (
      <div className="profile-container">
        <img src={profile} className="profile-pic" alt="logo"/>
      </div>
    );
  }
}

export default ProfilePic
