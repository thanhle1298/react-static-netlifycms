import React, { Component } from "react";
import "./styles.css";
import { Image, Col, Row } from "react-bootstrap";

class Masterhead extends Component {
  renderHeadbg = () => {
    return (
      <Row>
        <Col sm={12} lg={12} md={12}>
          <Image
            className="masterhead_img"
            alt=""
            src={require("../../assets/images/jpg/default-masheader.jpg")}
            responsive
          />
        </Col>
      </Row>
    );
  };

  renderSlogan = () => {
    return (
      <div className="table-div">
        <div className="wrapper-quote">
          <div className="quote">{this.props.slogan}</div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="wrapper_masterhead">
        <div className="masterhead_bg">
          {this.renderHeadbg()}
          {this.renderSlogan()}
          </div>
      </div>
    );
  }
}

export default Masterhead;
