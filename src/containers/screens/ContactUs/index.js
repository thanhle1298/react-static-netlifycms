import React, { Component } from "react";
import "./styles.css";
import { Masterhead, Contentarea } from "../../shared";
import {
  Col,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Checkbox,
  Button
} from "react-bootstrap";
import Helmet from 'react-helmet';

const axios = require('axios');

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      contact: '',
      subject: '',
      message: ''
    }
  }

  getInput = (state, value) => {
    switch (state) {
      case 'name':
        this.setState({
          name: value
        })
      break;
      case 'email':
        this.setState({
          email: value
        })
      break;
      case 'contact':
        this.setState({
          contact: value
        })
      break;
      case 'subject':
        this.setState({
          subject: value
        })
      break;
      case 'message':
        this.setState({
          message: value
        })
      break;
      case 'howknow':
        this.setState({
          howknow: value
        })
      break;
      case 'howhelp':
        this.setState({
          howhelp: value
        })
      break;
    }
    //console.log('state', this.state);
  }
  
  handleSubmit = () => {
    axios.post('/input', {
      fullname: this.state.fullname,
      email: this.state.email,
      company: this.state.company,
      phone: this.state.title,
      howknow: this.state.howknow,
      howhelp: this.state.howhelp
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  renderContactUsContent = () => {
    return (
      <div>
        <Col xs={12} sm={8}>
          <div className="contact-content">
            <div className="main_area">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl
                    value={this.state.name}
                    onChange={(e) => this.getInput('name',e.target.value )}
                    type="text" required="true" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl
                    value={this.state.email}
                    onChange={(e) => this.getInput('email',e.target.value )}
                    type="email" required="true" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Contact
                  </Col>
                  <Col sm={10}>
                    <FormControl
                    value={this.state.contact}
                    onChange={(e) => this.getInput('contact',e.target.value )}
                    type="text" required="true" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Subject
                  </Col>
                  <Col sm={10}>
                    <FormControl 
                    value={this.state.subject}
                    onChange={(e) => this.getInput('subject',e.target.value )}
                    type="text" required="true" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Message
                  </Col>
                  <Col sm={10}>
                    <FormControl
                    value={this.state.message}
                    onChange={(e) => this.getInput('message',e.target.value )}
                    componentClass="textarea" required="true" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button 
                    onClick={this.handleSubmit}
                    className="btn_sub" type="submit">
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4}>
          <div className="right_sidebar">
            <div className="sibarblock">
              <h3 className="sidebartitle">Contact info</h3>
              <div className="sidebarcontent">
                <ul className="contact_info">
                  <li>Address: No 5/ 110, Quan Nhan street, Thanh Xuan district, Ha Noi</li>
                  <li>
                    Website:{" "}
                    <a href="http://opentechiz.com">www.onlinebizsoft.com</a>
                  </li>
                  <li>
                    Facebook:{" "}
                    <a href="https://facebook.com/opentechiz">
                      /opentechiz
                    </a>
                  </li>
                  <li>
                    Twitter:{" "}
                    <a href="https://twitter.com/opentechiz">
                      /opentechiz
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:support@opentechiz.com">
                      support@opentechiz.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  };
  render() {
    return (
      <div>
        {/* Add meta ,title for SEO */}
        <Helmet>
          <title>Contact page</title>
          <meta name="description" content="OpenTechiz 's contactus page"/>
        </Helmet>
        <Masterhead slogan="Interested In Becoming Our Partner?" />
        <Contentarea
          content_name="contact us"
          custom_content={this.renderContactUsContent()}
        />
      </div>
    );
  }
}

export default ContactUs;
