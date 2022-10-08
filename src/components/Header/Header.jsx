import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.jfif";
import SignIn from "../Button/SignIn/SignIn";
import SignUp from "../Button/SignUp/SignUp";
import Logout from "../Button/LogOut/Logout";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    console.log("login");
    this.setState({ isLoggedIn: true });
  }
 
  handleLogoutClick() {
    console.log("logout");
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <Logout onClick={this.handleLogoutClick} />;
    } else {
      button = (
        <>
          <SignIn onClick={this.handleLoginClick} />
          <SignUp onClick={this.handleLoginClick} />
        </>
      );
    }

    return (
      <header className="nav">
        <div className="nav-brand">
          <img src={Logo} className="nav-brand__img" alt="Brand" />
        </div>
        <div className="nav-category">
          <div className="nav-category__menu">
            <div className="menu-item">Item</div>
            <div className="menu-item">Item</div>
            <div className="menu-item">Item</div>
            <div className="menu-item">Item</div>
          </div>
        </div>
        <div className="nav-addon">
          <div className="nav-addon-auth">{button}</div>
        </div>
      </header>
    );
  }
}

export default Header;
