import React, {Component} from "react";
import './index.css'

class MenuItem extends Component {
  render() {
    console.log(this.props.icon);
    return (
      <div className='menu-item'>
        <a href="#" className='menu-link'>{this.props.children}</a>
      </div>
    );
  }
}

export default MenuItem;