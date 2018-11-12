import React from "react";
import { Component } from "react";
import { Masterhead, Contentarea } from "../../shared";
import { Col, Label, Image } from "react-bootstrap";
import Helmet from 'react-helmet';
import "./styles.css";

class Services extends Component {
  renderServicesContent = () => {
    return (
      <div className="services-content">
        <Helmet>
          <title>Services page</title>
          <meta name="description" content="OpenTechiz 's services page"/>
        </Helmet>
        <p className="sub-content">
          Open Techiz (transformed from Onlinebiz Soft) is a dedicated e-commerce agency, specialized in web
          development with Magento and other open sources.
        </p>
        <p className="sub-content">
          We cover spectrum of Web Development Service. Completely e-commerce &
          CMS web site production with full control on quality standards. We
          also have extensive experience working with big catalog size with
          100K+ items.
        </p>

        <div className="our_services">
          <div className="our_title">
            <h2>OUR SERVICES</h2>
          </div>
          <div className="our_sv_item">
            <Col xs={12} sm={3} md={3}>
              <div className="text_column">
                <div className="iwt-icon">
                  <Image
                    className="iwt-icon-img"
                    src={require("../../assets/images/png/our_des.png")}
                    alt="WEB DESIGN"
                  />
                </div>
                <Label className="iwt-title">web disign</Label>
                <p className="sub-content">
                  All of our Web designs are optimized for a fluid User
                  Experience from landing page to checkout
                </p>
                <p className="our_link">
                  <a
                    title="WEB DESIGN"
                    href="http://www.onlinebizsoft.com/services/web-design.html"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={3} md={3}>
              <div className="text_column">
                <div className="iwt-icon">
                  <Image
                    className="iwt-icon-img"
                    src={require("../../assets/images/png/our_develop.png")}
                    alt="WEB DESIGN"
                  />
                </div>
                <Label className="iwt-title">WEB DEVELOPMENT</Label>
                <p className="sub-content">
                  We partner with many Agencies and end-user Clients to create
                  beautiful and conversion driven e-Commerce websites
                </p>
                <p className="our_link">
                  <a
                    title="WEB DESIGN"
                    href="http://www.onlinebizsoft.com/services/web-design.html"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={3} md={3}>
              <div className="text_column">
                <div className="iwt-icon">
                  <Image
                    className="iwt-icon-img"
                    src={require("../../assets/images/png/our_support.png")}
                    alt="WEB DESIGN"
                  />
                </div>
                <Label className="iwt-title">DEDICATED SUPPORT</Label>
                <p className="sub-content">
                  We offer several different retainer options for clients who
                  need ongoing ecommerce support.
                </p>
                <p className="our_link">
                  <a
                    title="WEB DESIGN"
                    href="http://www.onlinebizsoft.com/services/web-design.html"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </Col>
            <Col xs={12} sm={3} md={3}>
              <div className="text_column">
                <div className="iwt-icon">
                  <Image
                    className="iwt-icon-img"
                    src={require("../../assets/images/png/our_store.png")}
                    alt="WEB DESIGN"
                  />
                </div>
                <Label className="iwt-title">OUTSOURCING</Label>
                <p className="sub-content">
                  We located in Vietnam - the outsourcing destination of choice
                </p>
                <p className="our_link">
                  <a
                    title="WEB DESIGN"
                    href="http://www.onlinebizsoft.com/services/web-design.html"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </Col>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Masterhead slogan="&quot;... Always Trying The Best&quot;" />
        <Contentarea
          content_name="services"
          custom_content={this.renderServicesContent()}
        />
      </div>
    );
  }
}

export default Services;
