import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import * as yup from 'yup';
import SectionWrapper from './SectionWrapper';
import ContactInfo from './ContactInfo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  message: yup.string().required("Message is required")
});

const ContactComponent = () => {

  const notify = (isSuccess) => {
    if(isSuccess) {
      toast.success("Your email has successfully been sent!");
    } else {
      toast.error("There was an error sending your email. Please try again later.");
    }
  }

  return (
    <div id="contact" className="section-wrapper top-section-wrapper contact-section">
      <ContactInfo />
      <div className="contact-form-section">
        <h4 className="contact-form-title home-section">Let's get in touch!</h4>
        {/* <ContactInfo /> */}
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', message: ''}}
          onSubmit={async(values, actions) => {
            actions.setSubmitting(true);
            console.log("Values: ", values);
            // const emailRequest = await fetch('/api/email', {
            //   method: 'POST',
            //   headers: {"Content-Type": "application/json"},
            //   body: JSON.stringify(values, null, 2)
            // })
            const emailResponse = await emailRequest.json();
            console.log("Email response: ", emailResponse);
            if(emailResponse.messageId) {
              actions.resetForm();
              notify(true);
            } else {
              notify(false);
              actions.resetForm();
            }
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {/* this is a render prop */}
          {
            ({values, errors, handleChange, handleSubmit, touched, status, isSubmitting}) => (
                <Form style={{textAlign: 'left'}} onSubmit={handleSubmit}>
                  <FormGroup row>
                    {/* <Label for="firstName" style={{marginBottom: '10px'}}>First Name</Label> */}
                    {/*validateStatus={errors.firstName 
                    //   && touched.firstName ? "error" : "success"}
                    // help={errors.firstName}*/}
                    <Col>
                      <Input
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                        className={(errors.firstName && touched.firstName) ? "is-invalid" : ""}
                        placeholder="Enter your first name"
                      />
                    </Col>
                    <FormFeedback>Please enter a first name</FormFeedback>
                  </FormGroup>
                  <FormGroup row>
                    {/* <Label label="Last Name" style={{marginBottom: '10px', textAlign: 'left'}}>Last Name</Label> */}
                    <Col>
                      <Input
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                        className={(errors.lastName && touched.lastName) ? "is-invalid" : ""}
                        placeholder="Enter your last name"
                      />
                      <FormFeedback>Please enter a last name</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    {/* <Label for="email" style={{marginBottom: '10px', textAlign: 'left'}}>Email</Label> */}
                    <Col>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        className={(errors.email && touched.email) ? "is-invalid" : ""}
                        placeholder="john.doe@gmail.com"
                      />
                      <FormFeedback>Please enter an email</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    {/* <Label for="message" style={{marginBottom: '10px', textAlign: 'left'}}>Message</Label> */}
                    <Col>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        onChange={handleChange}
                        placeholder="What can I help you with?"
                        value={values.message}
                        className={(errors.message && touched.message) ? "is-invalid" : ""}
                        rows={8}
                      />
                      <FormFeedback>Please enter a message</FormFeedback>
                    </Col>
                  </FormGroup>
                  {/* <div>Success message here: {status ? status.success : ''}</div> */}
                  <div className="home-section">
                    <Button className="button-color" type="submit" size="lg" disabled={isSubmitting}>Submit</Button>
                  </div>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
  
}

export default ContactComponent;