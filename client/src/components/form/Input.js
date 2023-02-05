import { ErrorMessage, Field } from "formik";

import React from "react";
import PhoneInput from "react-phone-input-2";
import TextError from "./TextError";

function Input(props) {
  const { name, label, type, customInput, ...otherProps } = props;

  if (name === "phoneNumber") {
    return (
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field name={name} className="input" type={type}>
          {(props) => {
            const { field, form, meta } = props;
            console.log(field);
            return (
              <>
                <PhoneInput country={"am"} />
                <ErrorMessage name={name} component={TextError} />
              </>
            );
          }}
        </Field>
      </div>
    );
  }
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
