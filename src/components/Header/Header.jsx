import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.jfif";
import AuthButton from "../Button/AuthButton/AuthButton";

class Header extends Component {
  render() {
    const { switchLogin, switchSignUp } = this.props;

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
          <div className="nav-addon-auth">
            <AuthButton buttonName="Login" onClick={switchLogin}>
              Login
            </AuthButton>
            <AuthButton buttonName="Signup" onClick={switchSignUp}>
              Sign Up
            </AuthButton>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
