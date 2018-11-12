import React, { Component } from "react";
import "./styles.css";
import { Masterhead, Contentarea } from "../../shared";
import { Image, Col, Button } from "react-bootstrap";
import Helmet from 'react-helmet';

class Portfolio extends Component {
  renderPortfolioContent = () => {
    return (
      <div>
        <Helmet>
          <title>Portfolio page</title>
          <meta name="description" content="OpenTechiz 's portfolio page"/>
        </Helmet>
        <div className="catg">
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/SIGNOFF.jpeg")}
              />
              <div className="border_overlay" />
            </div>
          </Col>
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/PRONATUREFOODS.jpeg")}
              />
            </div>
          </Col>
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/IPAINTSTORE.jpeg")}
              />
            </div>
          </Col>
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/WAELMANSOUR.jpeg")}
              />
            </div>
          </Col>
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/SUPERKUL.jpeg")}
              />
            </div>
          </Col>
          <Col xs={6} sm={3} md={2}>
            <div className="image_wrapper">
              <Image
                className="img_item"
                src={require("../../assets/images/thumbnail/GLAMIRA.jpeg")}
              />
            </div>
          </Col>
          
        </div>
        <Col xs={12}>
          <div className="btn_catg">
            <Button bsStyle="danger" className="btn_item">
              Access Protected Portfolio
            </Button>
          </div>
        </Col>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Masterhead slogan="PORTFOLIO" />
        <Contentarea
          content_name="portfolio"
          custom_content={this.renderPortfolioContent()}
        />
      </div>
    );
  }
}

export default Portfolio;
