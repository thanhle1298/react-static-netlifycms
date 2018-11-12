import React, { Component } from "react";
import "./styles.css";

class Contentarea extends Component {
  renderTopContent = () => {
    return <h1 className="title">{this.props.content_name}</h1>;
  };

  render() {
    return (
      <div className="contentarea">
        <div className="simple_layout">
          {this.renderTopContent()}
          <div className="main_content">
            <div className="main_wp">
              {this.props.custom_content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contentarea;
