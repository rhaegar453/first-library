import React, { createContext } from "react";
import FieldContext from "./field.context";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";

/* Interface */
interface IField {
  Label: typeof Label;
  Message: typeof Message;
  Input: typeof Input;
}

/* Field Container */
const Field: React.FC<{
  type?: "error" | "info" | "success";
  message?: string;
}> &
  IField = ({ children, message, type = "info" }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <FieldContext.Provider value={{ message, type }}>
        {children}
      </FieldContext.Provider>
    </div>
  );
};

Field.displayName = "Field";

Field.Label = Label;
Field.Message = Message;
Field.Input = Input;

Field.defaultProps = {
  type: "info",
  message: "",
};

export default Field;
