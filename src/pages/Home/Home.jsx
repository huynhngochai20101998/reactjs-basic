import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Home;
