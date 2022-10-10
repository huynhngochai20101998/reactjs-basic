import React, { Component } from "react";

export default class AuthButton extends Component {
  render() {
    const { buttonName, onClick } = this.props;

    let className = "btn btn-primary auth__btn btn-signin";
    switch (buttonName) {
      case "login":
        className = "btn btn-info auth__btn btn-signin";
        break;
      case "signup":
        className = "btn btn-primary auth__btn btn-signin";
        break;
      default:
        className = "btn btn-warning auth__btn btn-signin";
    }

    return (
      <span className="auth-signin mx-1">
        <p onClick={onClick} className={className}>
          SignUp
        </p>
      </span>
    );
  }
}
