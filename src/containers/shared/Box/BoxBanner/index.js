import React, { Component } from 'react';
import './styles.css';

class BoxBanner extends Component {
  render(){
    return (
      <div className="box-content-banner" style={{ backgroundColor: this.props.backgroundColor }} />
    );
  }
};

export default BoxBanner;
