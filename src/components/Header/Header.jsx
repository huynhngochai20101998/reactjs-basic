import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.jfif";
import AuthButton from "../Button/AuthButton/AuthButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleClick = () => {
    console.log(this.state.isLoggedIn);
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false });
    } else {
      this.setState({ isLoggedIn: true });
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <AuthButton buttonName="logout" onClick={this.handleClick} />;
    } else {
      button = (
        <>
          <AuthButton buttonName="login" onClick={this.handleClick} />
          <AuthButton buttonName="signup" onClick={this.handleClick} />
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
