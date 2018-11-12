import React, { Component } from 'react';
import './styles.css';

class Input extends Component {
  render(){
    return (
      <div className="field">
        <p className="title-form">{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
};

export default Input;
