import React, { Component } from "react";
import "./styles.css";
import { Masterhead, Contentarea } from "../../shared";
import { Col, Image, Form, FormGroup, FormControl, Button } from "react-bootstrap";
import Helmet from 'react-helmet'

class WorkWithUs extends Component {
  renderDropdownButton = () => {
    return (
      <div>
          <Helmet>
            <title>Workwithus page</title>
            <meta name="description" content="OpenTechiz 's work with us page"/>
          </Helmet>
        <div className="btn_form">
          SERVICE ENQUIRY<span className="glyphicon glyphicon-chevron-right" />
        </div>
        <div className="form">
          <Form horizontal>
            <FormGroup controlId="formHorizontalName">
              <Col sm={12}>
                <FormControl type="text" required="true" placeholder="Name" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>
                <FormControl type="email" required="true" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalContactNo">
              <Col sm={12}>
                <FormControl
                  type="text"
                  required="true"
                  placeholder="Contact No"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalSubject">
              <Col sm={12}>
                <FormControl
                  type="text"
                  required="true"
                  placeholder="Subject"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <Col sm={12}>
                <FormControl componentClass="select" placeholder="">
                  <option value="select">Service type</option>
                  <option value="select">1</option>
                  <option value="select">2</option>
                  <option value="select">3</option>
                  <option value="other">...</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalRequirement">
              <Col sm={12}>
                <FormControl
                  componentClass="textarea"
                  required="true"
                  placeholder="Requirement"
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsWhenStart">
              <Col sm={12}>
                <FormControl componentClass="select">
                  <option value="select">When start</option>
                  <option value="select">1</option>
                  <option value="select">2</option>
                  <option value="select">3</option>
                  <option value="other">...</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <Col sm={12}>
                <FormControl componentClass="select">
                  <option value="select">Let than 3 months</option>
                  <option value="select">1</option>
                  <option value="select">2</option>
                  <option value="select">3</option>
                  <option value="other">...</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
                <Button className="btn_svenquire" type="submit" bsStyle="success">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  };

  renderWWUContent = () => {
    return (
      <div>
        <Col xs={12} sm={8}>
          <div className="wwu_content">
            <div id="main_area">
              <div className="top_content" />
              <div className="main_content">
                <p>
                  Making things easy for you. We respond you via email, skype
                  and our own project management system with real-time tracking.
                  Our process is designed to help you save time and assist you
                  in catching progress real time via our online management
                  system.
                </p>
                <p>
                  We manage project source code and deployment with version
                  system to keep your product safe and prevent hassle when
                  making any updates to live production.
                </p>
                <p>A typical process includes</p>
                <p>- Requirement grab and business understanding</p>
                <p>- Visual layout discussion and graphic design</p>
                <p>- Development and internal quality control</p>
                <p>- Review and acceptance tests</p>
                <p>- Content update and deploy</p>
                <p>
                  We also apply agile methodology to help you to apply changes
                  on requirement easily
                </p>
                <Col xs={12}>
                  <p className="box-img">
                    <Image
                      src={require("../../assets/images/png/agile_methodology_overview.png")}
                      alt="agile_methodology_overview.png"
                    />
                  </p>
                </Col>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={4}>
          <div className="right_sidebar">{this.renderDropdownButton()}</div>
        </Col>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Masterhead slogan="Interested In Becoming Our Partner?" />
        <Contentarea
          content_name="work with us"
          custom_content={this.renderWWUContent()}
        />
      </div>
    );
  }
}

export default WorkWithUs;
