import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./ContactForm.scss";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../redux/features/snackbar/snackbarSlice";

function ContactForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch(); //for snackbar

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("contact.required")),
    email: Yup.string()
      .email(t("contact.invalidEmail"))
      .required(t("contact.required")),
    phoneNumber: Yup.number(),

    message: Yup.string().required(t("contact.required")),
  });

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    dispatch(
      openSnackbar({
        message: "successfully submitted",
        severity: "success",
      })
    );
  };
  return (
    <div className="contact-form">
      <h3>{t("contact.letsgetintouch")}</h3>
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
                label={t("contact.name")}
                name="name"
              />
              <FormikControl
                control={"input"}
                type="email"
                label={t("contact.email")}
                name="email"
              />{" "}
              <FormikControl
                control={"input"}
                type="number"
                label={t("contact.phoneNumber")}
                name="phoneNumber"
                placeholder="+374XXXXXXXX"
              />
              <FormikControl
                control={"textarea"}
                label={t("contact.message")}
                name="message"
              />
              <button
                type="submit"
                variant="contained"
                className="btn btn-submit"
              >
                {t("contact.submit")}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
