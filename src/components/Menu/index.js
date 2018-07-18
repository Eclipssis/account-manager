import React, {Component} from "react";
import './index.css'
import MenuItem from "../MenuItem";
import AddUserIcon from "../icons/AddUserIcon"
import UserListIcon from "../icons/UserListIcon";

class Menu extends Component {

  render() {
    let alignMenu = this.props.alignMenu;
    console.log(alignMenu);
    return (
      <div className={"menu " + alignMenu}>
        <MenuItem>
          <AddUserIcon/>
          Add new user
        </MenuItem>

        <MenuItem>
          <UserListIcon/>
          List of users
        </MenuItem>
      </div>
    );
  }
}

export default Menu;