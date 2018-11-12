import React, { Component } from "react";

import {
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";
import "./styles.css";
import { Formik } from "formik";
import * as Yup from "yup";
const axios = require("axios");

class FormikValidation extends Component {
  handleSubmit = (values, actions) => {
    // // Check data input
    // console.log(JSON.stringify(values, null, 2));

    // Send data to server
    axios
      .post("/input", {
        fullname: values.name,
        email: values.email,
        title: values.title,
        company: values.company,
        phone: values.phone,
        howknow: values.howknow,
        howhelp: values.howhelp
      })
      .then(function(response) {
        alert("Your message have been sent. Thank you!");
        console.log("Done!!", response);
      })
      .catch(function(error) {
        console.log(error);
      });

    actions.resetForm();
    actions.setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          name: "",
          company: "",
          phone: "",
          title: "",
          howknow: "",
          howhelp: ""
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string()
            .email()
            .required(),
          company: Yup.string().required(),
          phone: Yup.number()
            .integer()
            .required(),
          title: Yup.string().required(),
          howknow: Yup.string().required(),
          howhelp: Yup.string().required()
        })}
        onSubmit={this.handleSubmit}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;

          return (
            <Form horizontal onSubmit={handleSubmit}>
              <Col sm={6} lg={6} md={6} className="left-box">
                <FormGroup
                  controlId="name"
                  validationState={errors.name && touched.name && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>FULL NAME *</ControlLabel>
                  <FormControl
                    type="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.name && touched.name && errors.name}
                  </HelpBlock>
                </FormGroup>

                <FormGroup
                  controlId="email"
                  validationState={errors.email && touched.email && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>EMAIL *</ControlLabel>
                  <FormControl
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.email && touched.email && errors.email}
                  </HelpBlock>
                </FormGroup>

                <FormGroup
                  controlId="company"
                  validationState={errors.company && touched.company && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>COMPANY *</ControlLabel>
                  <FormControl
                    type="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.company && touched.company && errors.company}
                  </HelpBlock>
                </FormGroup>

                <FormGroup
                  controlId="phone"
                  validationState={errors.phone && touched.phone && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>PHONE *</ControlLabel>
                  <FormControl
                    type="text"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.phone && touched.phone && errors.phone}
                  </HelpBlock>
                </FormGroup>
              </Col>
              <Col sm={6} lg={6} md={6} className="right-box">
                <FormGroup
                  controlId="title"
                  validationState={errors.title && touched.title && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>TITLE *</ControlLabel>
                  <FormControl
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.title && touched.title && errors.title}
                  </HelpBlock>
                </FormGroup>

                <FormGroup
                  controlId="howknow"
                  validationState={errors.howknow && touched.howknow && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>HOW DID YOU KNOW ABOUT US *</ControlLabel>
                  <FormControl
                    type="text"
                    value={values.howknow}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.howknow && touched.howknow && errors.howknow}
                  </HelpBlock>
                </FormGroup>

                <FormGroup
                  controlId="howhelp"
                  validationState={errors.howhelp && touched.howhelp && "error"}
                  style={{ margin: "0" }}
                >
                  <ControlLabel>HOW DO YOU WANT US TO HELP *</ControlLabel>
                  <FormControl
                    type="text"
                    value={values.howhelp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <HelpBlock>
                    {errors.howhelp && touched.howhelp && errors.howhelp}
                  </HelpBlock>
                </FormGroup>
              </Col>
              <Col sm={12} lg={12} md={12} className="right-box">
                <Button
                  onClick={handleSubmit}
                  className="success"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </Button>

                <Button
                  onClick={handleReset}
                  className="success"
                  type="button"
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
              </Col>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default FormikValidation;

// {  // EXAMPLE
//   <Input title="HOW WOULD YOU LIKE US TO HELP *">
//     <FormControl
//       type="text"
//       componentClass="textarea"
//       required="true"
//       style={{ resize: "none" }}
//       value={this.state.howhelp}
//       onChange={e => this.getInput("howhelp", e.target.value)}
//     />
//   </Input>;
// }
