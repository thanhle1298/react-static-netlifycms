import React, { Component } from "react";
import {
  Carousel,
  Image,
  Col,
  Tab,
  Row,
  Button,
  Nav,
  NavItem
} from "react-bootstrap";
import { TabImage } from "../../shared";
import "./styles.css";

import Youtube from "react-youtube";
import Helmet from "react-helmet";

import BoxItemBanner from "./BoxItemBanner";
import ImageClient from "./ImageClient";
import FormikValidation from "./formValidation";

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderSlideShow = this.renderSlideShow.bind(this);
    this.renderCustomer = this.renderCustomer.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderServices = this.renderServices.bind(this);
  }

  renderServices() {
    return (
      <div className="wrapper-service">
        <p className="service">OUR SERVICE</p>
        <Tab.Container id="tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <div className="wrapper-nav">
                <Nav bsStyle="pills" className="background">
                  <NavItem eventKey="first" className="tabs-example-tab-five">
                    MOBILE APP DEVELOPMENT
                  </NavItem>
                  <NavItem eventKey="second" className="tabs-example-tab-five">
                    MAGENTO E-COMMERCE
                  </NavItem>
                  <NavItem eventKey="four" className="tabs-example-tab-five">
                    MANAGED GOOGLE CLOUD
                  </NavItem>
                  <NavItem eventKey="five" className="tabs-example-tab-five">
                    BLOCKCHAIN
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col sm={12} className="edit-service">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TabImage
                    image1={require("../../assets/images/jpg/pc_service_reactnative.jpg")}
                    image2={require("../../assets/images/jpg/mb_service_reactnative.jpg")}
                    title1="React-Native & ReactJS"
                    title2="NodeJS & Graphql"
                    content1="Optimization of Performance and Cost"
                    content2="Native solution for Mobile Apps"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TabImage
                    image1={require("../../assets/images/jpg/pc_service_magento.jpg")}
                    image2={require("../../assets/images/jpg/mb_service_magento.jpg")}
                    title1="Magento 1 & Magento 2"
                    title2="E-Commerce Development"
                    content1="Performance Optimization"
                    content2="Auto-scale Cloud based Deployment Solution"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <TabImage
                    image1={require("../../assets/images/jpg/pc_service_erp.jpg")}
                    image2={require("../../assets/images/jpg/mb_service_erp.jpg")}
                    title1="Optimized Scalable Google Cloud Hosting "
                    title2="Google Cloud Solution Architecture"
                    content1="Kubernetes"
                    content2="Compute Engine"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  <TabImage
                    image1={require("../../assets/images/jpg/pc_service_blockchain.jpg")}
                    image2={require("../../assets/images/jpg/mb_service_blockchain.jpg")}
                    title1="Blockchain Development"
                    title2=""
                    content1="Ethereum & Solidity"
                    content2="Hyperledger Fabric"
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }

  renderContact() {
    return (
      <div className="wrapper-contact">
        <div className="box-contact">
          <Col sm={4} lg={4} md={4} className="box-title-contact">
            <h2 className="title-contact">CONTACT US</h2>
            <div className="content-contact">
              <p className="p-content-contact">
                Are you interested in working with us?
              </p>
              <p className="p-content-contact">
                Please leave your information and we will reach out to{" "}
              </p>
            </div>
          </Col>

          <Col sm={8} lg={8} md={8} className="box-form-contact">
            <FormikValidation />
          </Col>
        </div>
      </div>
    );
  }

  renderCustomer() {
    return (
      <div className="wrapper-customer">
        <p className="service">VOICE OF OUR CUSTOMERS</p>
        <div className="box-customer">
          <Col sm={6} lg={6} md={6} xs={12} className="link-video">
            {/* <iframe width="100%" height="300" src="https://www.youtube.com/embed/TMSb52ynNQc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
            {/* <video width="100%" height="400" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video> */}
            <Youtube
              videoId="U0BQccsA3s8"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 0,
                  rel: 0
                }
              }}
            />
          </Col>
          <Col sm={6} lg={6} md={6} xs={12} className="content-video">
            <p className="customer-feedback">
              "OnlineBiz Soft is one of the best e-commerce agencies I&rsquo;ve
              had the pleasure of working with. We took advantage of their
              impressive design, finishing with a convenient CMS! They provided
              us with professionalism and reliability at an affordable price,
              and were always available and quick to respond to our inquiries."
              <br />
            </p>
            <p className="customer-feedback" style={{ textAlign: "center" }}>
              - Robert Staszewski &ndash; Managing Director &ndash; Macfixit
              Australia &ndash;
            </p>
            <br />
            <br />
            <p className="customer-feedback">
              "We have worked together for +3 years, we built and managed the
              system and now we have grown from single store to be a global
              brand with stores in 34+ countries."
            </p>
            <br />
            <p className="customer-feedback" style={{ textAlign: "center" }}>
              &ndash; AdemTopaloglu &ndash; CEO &ndash; Glamira &ndash;
            </p>
          </Col>
        </div>
        <div className="shadow-box-customer" />
      </div>
    );
  }

  renderSlideShow() {
    return (
      <div>
        <Carousel className="slide-show">
          <Carousel.Item>
            <Image
              width="100%"
              height="750"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_banner_company.jpg")}
            />
            <Carousel.Caption className="carousel-caption1">
              <p className="title-banner">OPENTECHIZ</p>
              <p className="p-banner">Always think with our clients</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="750"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_banner_magento.jpg")}
            />
            <Carousel.Caption className="carousel-caption1">
              <p className="title-banner">OPENTECHIZ</p>
              <p className="p-banner">Your smart e-commerce develop agency</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="750"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_banner_reactnative.jpg")}
            />
            <Carousel.Caption className="carousel-caption1">
              <p className="title-banner">OPENTECHIZ</p>
              <p className="p-banner">
                We use the best technologies for the development of Web apps and
                Mobile Apps
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="700"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_banner_team.jpg")}
            />
            <Carousel.Caption className="carousel-caption1">
              <h2 className="title-banner">OPENTECHIZ</h2>
              <p className="p-banner">Effective Team-Working</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel className="slide-show-reposive">
          <Carousel.Item>
            <Image
              width="100%"
              height="700"
              alt="900x500"
              src={require("../../assets/images/jpg/mb_banner_company.jpg")}
            />
            <Carousel.Caption>
              <h2 className="title-banner">OPENTECHIZ</h2>
              <p className="p-banner">Always think with our clients</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="700"
              alt="900x500"
              src={require("../../assets/images/jpg/mb_banner_magento.jpg")}
            />
            <Carousel.Caption>
              <h2 className="title-banner">OPENTECHIZ</h2>
              <p className="p-banner">Your smart e-commerce develop agency </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="700"
              alt="900x500"
              src={require("../../assets/images/jpg/mb_banner_react native.jpg")}
            />
            <Carousel.Caption>
              <h2 className="title-banner">OPENTECHIZ</h2>
              <p className="p-banner">
                We use the best technologies for the development of Web apps and
                Mobile Apps
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width="100%"
              height="700"
              alt="900x500"
              src={require("../../assets/images/jpg/mb_banner_team.jpg")}
            />
            <Carousel.Caption>
              <h2 className="title-banner">OPENTECHIZ</h2>
              <p className="p-banner">Effective Team-Working</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>Home page</title>
          <meta name="description" content="OpenTechiz 's home page" />
        </Helmet>
        {this.renderSlideShow()}
        <div className="bottomSlide">
          <BoxItemBanner
            backgroundColor={"#93c33a"}
            titleContentBanner={"A-Z SERVICE RANGE"}
            containerContentBanner={
              "We handle from auto-scale infrastructure, full stack development, continuous deployment and maintenance"
            }
          />
          <BoxItemBanner
            backgroundColor={"#383838"}
            titleContentBanner={"TRUST BY 100+ CUSTOMERS"}
            containerContentBanner={
              "We take the work seriously with small and big projects. "
            }
          />
          <BoxItemBanner
            backgroundColor={"#93c33a"}
            titleContentBanner={"HIGH QUALITY"}
            containerContentBanner={
              "Our resource are well trained with internal process and programming pattern. We follow SOLID principle, coding convention and agile methodology."
            }
          />
        </div>
        {this.renderServices()}
        <div className="wrapper-case-study">
          <p className="service">CASE STUDY</p>
          <div className="hidden-wrapper">
            <Image
              width="100%"
              className="casestudy-pc"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_casestudy_glamira.jpg")}
            />
            <Image
              width="100%"
              className="casestudy-mb"
              alt="900x500"
              src={require("../../assets/images/jpg/mb_casestudy_glamira.jpg")}
            />
            <div className="content-study">
              <p className="title-study">Glamira</p>
              <Button className="btn-study">
                <a href="https://www.glamira.com/">VIEW CASE STUDY</a>
              </Button>
            </div>
          </div>
          <div className="hidden-wrapper1">
            <Image
              width="100%"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_mb_casestudy_consumerapp.jpg")}
            />
            <div className="content-study">
              <p className="title-study">Closedeal App</p>
              <Button className="btn-study">
                <a href="closedeal-store">VIEW CASE STUDY</a>
              </Button>
            </div>
          </div>
          <div className="hidden-wrapper2">
            <Image
              width="100%"
              alt="900x500"
              src={require("../../assets/images/jpg/pc_mb_casestudy_holdsport.jpg")}
            />
            <div className="content-study">
              <p className="title-study">Holdsport</p>
              <Button className="btn-study">
                <a href="holdsport-store">VIEW CASE STUDY</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="wrapper-client">
          <p className="service">CLIENT</p>
          <ImageClient src={require("../../assets/images/asana.png")} />
          <ImageClient src={require("../../assets/images/classy.png")} />
          <ImageClient src={require("../../assets/images/spotify.png")} />
          <ImageClient src={require("../../assets/images/treehouse.png")} />
          <ImageClient src={require("../../assets/images/slack.png")} />
          <ImageClient src={require("../../assets/images/oracle.png")} />
          <ImageClient src={require("../../assets/images/kickstarter.png")} />
          <ImageClient src={require("../../assets/images/disqus.png")} />
        </div>
        {this.renderCustomer()}
        {this.renderContact()}
      </div>
    );
  }
}

export default Home;
