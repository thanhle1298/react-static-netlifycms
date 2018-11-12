import React, { Component } from "react";
import { Carousel, Image, Col } from "react-bootstrap";
import "./styles.css";

class TabImage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Col sm={12}>
          <Image alt="900x500" className="image1" src={this.props.image1} />
          <Image alt="900x500" className="image2" src={this.props.image2} />
        </Col>
        <Carousel.Caption className="content-tab">
          <p className="title-service">{this.props.title1}</p>
          <p className="title-service">{this.props.title2}</p>
          <div className="clear" />
          <p className="icon1" />
          <p className="p-service">{this.props.content1}</p>
          <p className="icon1" />
          <p className="p-service">{this.props.content2}</p>
        </Carousel.Caption>
      </div>
    );
  }
}

export default TabImage;
