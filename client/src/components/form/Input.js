import { ErrorMessage, Field } from "formik";

import React from "react";
import PhoneInput from "react-phone-input-2";
import TextError from "./TextError";

function Input(props) {
  const { name, label, type, customInput, ...otherProps } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <div>
        <Field
          type={type}
          id={name}
          name={name}
          className="input"
          {...otherProps}
        />
      </div>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
