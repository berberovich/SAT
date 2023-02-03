import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./ContactForm.scss";
import "react-phone-input-2/lib/style.css";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    phoneNumber: Yup.number().required("Required"),

    message: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {};
  return (
    <div>
      <h3>Let's Get in Touch</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control={"input"}
                type="name"
                label="Name*"
                name="name"
              />
              <FormikControl
                control={"input"}
                type="email"
                label="Email*"
                name="email"
              />{" "}
              <FormikControl
                control={"input"}
                type="number"
                label="Phone Number"
                placeholder="094113934"
                name="phoneNumber"
              />
              <FormikControl
                control={"textarea"}
                label="Message*"
                name="message"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
