import React, { Component } from "react";
import { Layout } from "../Layout/Layout";
import ContactUsContent from "./ContactUsContent/ContactUsContent";
import HomeContent from "./HomeContent/HomeContent";
import InforContent from "./InfomationContent/InfomationContent";
import ShareContent from "./ShareContent/ShareContent";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
    };
    this.changeStateHomePage = this.changeStateHomePage.bind(this);
    this.changeStateInfoPage = this.changeStateInfoPage.bind(this);
    this.changeStateSharePage = this.changeStateSharePage.bind(this);
    this.changeStateContactUsPage = this.changeStateContactUsPage.bind(this);
  }

  changeStateHomePage() {
    this.setState({ pageNo: PAGECONST.HOME });
  }

  changeStateInfoPage() {
    this.setState({ pageNo: PAGECONST.INFO });
  }

  changeStateSharePage() {
    this.setState({ pageNo: PAGECONST.SHARE });
  }

  changeStateContactUsPage() {
    this.setState({ pageNo: PAGECONST.CONTACT_US });
  }

  render() {
    let content;

    // eslint-disable-next-line default-case
    switch (this.state.pageNo) {
      case PAGECONST.INFO:
        content = <InforContent />;
        break;
      case PAGECONST.SHARE:
        content = <ShareContent />;
        break;
      case PAGECONST.CONTACT_US:
        content = <ContactUsContent />;
        break;
      case PAGECONST.HOME:
        content = <HomeContent />;
        break;
    }

    return (
      <Layout
        changeStateHomePage={this.changeStateHomePage}
        changeStateInfoPage={this.changeStateInfoPage}
        changeStateSharePage={this.changeStateSharePage}
        changeStateContactUsPage={this.changeStateContactUsPage}
      >
        <div
          className="content d-flex justify-content-center align-align-items-center"
          style={{ marginTop: "100px" }}
        >
          {content}
        </div>
      </Layout>
    );
  }
}

const PAGECONST = {
  HOME: 0,
  INFO: 1,
  SHARE: 2,
  CONTACT_US: 3,
};

export { Page, PAGECONST };
