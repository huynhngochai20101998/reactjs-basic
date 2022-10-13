import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
import SignUp from "../../components/SignUp/SignUp";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoginPage: true };

    this.switchLogin = this.switchLogin.bind(this);
    this.switchSignUp = this.switchSignUp.bind(this);
  }

  switchLogin() {
    this.setState({ isLoginPage: true });
  }

  switchSignUp() {
    this.setState({ isLoginPage: false });
  }

  render() {
    let isLoginPage = this.state.isLoginPage;

    let content = isLoginPage ? <LoginForm /> : <SignUp />;

    return (
      <div className="home-page">
        <Header
          switchLogin={this.switchLogin}
          switchSignUp={this.switchSignUp}
        />
        <div className="main">
          <h1 className="main-title">SignIn</h1>
          <div className="main-content">{content}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
