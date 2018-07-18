import React, {Component} from "react";
import './index.css'
import UserBar from "../UserBar";

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <div className='container'>

          <h2 className='main-title'>Adding new user</h2>
          <UserBar/>

        </div>
      </div>
    );
  }
}

export default Content;