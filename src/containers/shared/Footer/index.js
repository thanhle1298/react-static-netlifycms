import React, { Component } from 'react';
import {
  Thumbnail,
  Image,
  Nav,
  NavItem,
  Col
} from 'react-bootstrap';
import './styles.css';

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <Col sm={12} lg={12} md={12}>
          <a href="/">
            <Image
              className="logo-footer"
              alt="900x500"
              src={require ("../../assets/images/logo.png")}
            />
          </a>
        </Col>
        <Col sm={12} lg={12} md={12} className="box-menu-footer">
          <Col sm={8} lg={8} md={8}>
            <Nav className="nav-footer">
              <NavItem href="/services">
                SERVICES
              </NavItem>
              <NavItem href="/industries">
                INDUSTRIES
              </NavItem>
              <NavItem href="/products">
                PRODUCTS
              </NavItem>
              <NavItem href="/aboutus">
                ABOUT US
              </NavItem>
            </Nav>
          </Col>
          <Col sm={4} lg={4} md={4} className="social-footer">
            <Thumbnail href="https://www.facebook.com/Open-Techiz-Business-Technology-247782725932121/"
              className="logo-social"
              alt="900x500"
              src={require ("../../assets/images/fb.png")}
            />
            <Thumbnail href="https://www.facebook.com/Open-Techiz-Business-Technology-247782725932121/"
              className="logo-social"
              alt="900x500"
              src={require ("../../assets/images/twitter.png")}
            />
            <Thumbnail href="https://www.facebook.com/Open-Techiz-Business-Technology-247782725932121/"
              className="logo-social"
              alt="900x500"
              src={require ("../../assets/images/gplus.png")}
            />
            <Thumbnail href="https://www.facebook.com/Open-Techiz-Business-Technology-247782725932121/"
              className="logo-social"
              alt="900x500"
              src={require ("../../assets/images/instagram.png")}
            />
            <Thumbnail href="https://www.facebook.com/Open-Techiz-Business-Technology-247782725932121/"
              className="logo-social"
              alt="900x500"
              src={require ("../../assets/images/linkedin.png")}
            />
          </Col>
        </Col>
      </div>
    );
  }
};

export default Footer;
