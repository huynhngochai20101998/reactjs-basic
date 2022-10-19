import Logo from "../../assets/images/logo.jpg";
import { Col, Row } from "reactstrap";
import { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    const {
      changeStateHomePage,
      changeStateInfoPage,
      changeStateSharePage,
      changeStateContactUsPage,
    } = this.props;

    return (
      <Row className="navbar px-5 bg-white fixed-top">
        <Col className="navbar-brand" md="2">
          <img src={Logo} alt="" />
        </Col>
        <Col md="1" />
        <Col className="navbar-menui" md="5">
          <ul className="navbar-menu text-capitalize fs-4 fw-bold d-flex justify-content-between">
            <li className="navbar-menu__item" onClick={changeStateHomePage}>
              <p>Trang Chủ</p>
            </li>
            <li className="navbar-menu__item" onClick={changeStateInfoPage}>
              <p>Về Chúng Tôi</p>
            </li>
            <li className="navbar-menu__item" onClick={changeStateSharePage}>
              <p>Góc Chia Sẽ</p>
            </li>
            <li
              className="navbar-menu__item"
              onClick={changeStateContactUsPage}
            >
              <p>Liên Hệ</p>
            </li>
          </ul>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Header;
