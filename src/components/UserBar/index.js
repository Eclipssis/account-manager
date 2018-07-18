import React, {Component} from "react";
import './index.css'

class UserBar extends Component {
  render() {
    return (
      <div className='user-bar'>
        <div className='user-nav'>
          <div className="user-nav-item">1. Account</div>
          <div className="user-nav-item">2. Profile</div>
          <div className="user-nav-item">3. Contacts</div>
          <div className="user-nav-item">4. Capabilities</div>
        </div>

        <div className="user-content">

        </div>
      </div>
    );
  }
}

export default UserBar;