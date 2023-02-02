import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input": {
      return <Input {...rest} />;
    }
    case "textarea": {
      return <TextArea {...rest} />;
    }
  }
}



export default FormikControl;
