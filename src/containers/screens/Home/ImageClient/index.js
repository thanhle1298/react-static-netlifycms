import React, { Component } from 'react';
import {
  Image,
  Col
} from 'react-bootstrap';
import './styles.css';

class ImageClient extends Component {
  render(){
    return (
      <Col sm={3} lg={3} md={3} xs={6} className="boxLogo">
        <Image
          width="50%"
          src={this.props.src}
          className="hoverLogo"
        />
      </Col>
    );
  }
};

export default ImageClient;
