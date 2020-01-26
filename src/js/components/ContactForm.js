import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Label, Input, Toast, ToastHeader, ToastBody } from 'reactstrap';
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
    <SectionWrapper id="contact" >
      <h1 style={{textAlign: 'center'}} className="display-4">Get in touch</h1>
      {/* <ContactInfo /> */}
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', message: ''}}
        onSubmit={async(values, actions) => {
          actions.setSubmitting(true);
          console.log("Values: ", values);
          const emailRequest = await fetch('/api/email', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values, null, 2)
          })
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
                <FormGroup>
                  <Label for="firstName" style={{marginBottom: '10px'}}>First Name</Label>
                  {/*validateStatus={errors.firstName 
                  //   && touched.firstName ? "error" : "success"}
                  // help={errors.firstName}*/}
                  <Input
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    placeholder="Enter your first name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label label="Last Name" style={{marginBottom: '10px', textAlign: 'left'}}>Last Name</Label>
                  <Input
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    placeholder="Enter your last name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email" style={{marginBottom: '10px', textAlign: 'left'}}>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="john.doe@gmail.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="message" style={{marginBottom: '10px', textAlign: 'left'}}>Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    placeholder="What can I help you with?"
                    value={values.message}
                    rows={5}
                  />
                </FormGroup>
                {/* <div>Success message here: {status ? status.success : ''}</div> */}
                <div style={{textAlign: 'center'}}>
                <Button color="danger" type="submit" size="lg" disabled={isSubmitting}>Submit</Button>
                </div>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          )
        }

      </Formik>
    </SectionWrapper>
  )
  
}

export default ContactComponent;