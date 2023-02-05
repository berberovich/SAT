import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

function TextArea(props) {
  const { name, label, type, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div>
        <Field
          className="textarea"
          as="textarea"
          rows="6"
          cols="30"
          id={name}
          name={name}
          {...rest}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default TextArea;
