import React, { Component } from 'react';
import {
  Col
} from 'react-bootstrap';
import {
  BoxBanner,
}from '../../../shared';
import './styles.css';

class BoxItemBanner extends Component {
  render(){
    return (
      <Col sm={4} lg={4} md={4} className="wrapper-content-banner">
        <BoxBanner backgroundColor={this.props.backgroundColor} />
        <div className="wrapper-text-banner">
          <p className="title-content-banner">{this.props.titleContentBanner}</p>
          <p className="container-content-banner">{this.props.containerContentBanner}</p>
        </div>
      </Col>
    );
  }
};

export default BoxItemBanner;
