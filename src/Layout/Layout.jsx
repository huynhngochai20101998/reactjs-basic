import React, { Component } from "react";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export { Layout };
