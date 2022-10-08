import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="nav">
        <div className="nav-brand">
          <span className="nav-brand__img">
            {/* <img src="#" alt="Brand" /> */}
            Logo Nè
          </span>
        </div>
        <div className="nav-category">
          <div className="nav-category__menu">
            <div className="menu-item">Item</div>
            <div className="menu-item">Item</div>
            <div className="menu-item">Item</div>
          </div>
        </div>
        <div className="nav-addon">
          <div className="nav-addon-auth">
            <div className="auth-signin btn">
              <button className="auth__btn btn-signin">Sign In</button>
            </div>
            <div className="auth-signup btn">
              <button className="auth__btn btn-signup">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
