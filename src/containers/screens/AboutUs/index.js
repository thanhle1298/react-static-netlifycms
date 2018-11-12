import React, { Component } from "react";
import "./styles.css";
import { Masterhead, Contentarea } from "../../shared";
import { Image } from "react-bootstrap";
import Helmet from 'react-helmet';

class AboutUs extends Component {
  renderAboutUsContent = () => {
    return (
      <div className="about-content">
        <Helmet>
          <title>About page</title>
          <meta name="description" content="OpenTechiz 's about us page"/>
        </Helmet>
        <p className="top-title">
          We{" "}
          <Image src={require("../../assets/images/png/bg-title-about.png")} />{" "}
          + 1.000 Projects
        </p>
        <p className="top-title-content">
          More than 1,000 projects with clients worldwide rely on Open Techiz
          to grow and develop their e-commerce presence, Mobile/ Web Applications.
        </p>
        <p className="top-title">200+ clients</p>
        <p className="top-title-content top-title-bottom">
          <strong>"One Stop Shop" for your online success</strong>
        </p>
        <p className="sub_content">
          Open Techiz was transformed from OnlineBiz Softis (www.onlinebizsoft.com). OnlineBiz Softis growing with your successful business by building
          around the design, development, integration and support of Magento and
          e-Commerce websites.
        </p>
        <p className="sub_content">
          We aim to deliver timely, on budget and high quality works that ensure
          clients satisfaction with a wide rages of services, from small tasks
          (bug fix, content update) to the whole solution. Our goals are looking
          for the long-term relationship with all clients and become success
          together.
        </p>
        <p className="sub_content">
          Our excellent quality with 5 stars rating on outsourcing marketcomes
          which is guaranteed with 99% satisfaction of our customers to help
          them achieve business success.
        </p>
        <p className="sub_content">
          Located at Hanoi, Viet Nam and Established since 2007, 8 years of
          experiences: 200+ clients, 1000+ projects, OnlineBiz Soft have grown
          to be a premium full service e-commerce agency to provide services for
          leading brands and e-retailers.
        </p>
        <h2 className="about-team">Our team member</h2>
        <p className="sub_content">
          Our team is a talented bunch. Meet some of the people who are behind
          our business and represent our professional spirit by providing you
          with the most dedicated services and top-tier engineering
          capabilities.
        </p>
        <h2 className="about-team">Testimonials</h2>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Masterhead slogan='"We Are Proud To Be A Part Of Your Business"' />
        <Contentarea
          content_name="about us"
          custom_content={this.renderAboutUsContent()}
        />
      </div>
    );
  }
}

export default AboutUs;
