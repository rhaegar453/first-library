import React, { createContext } from "react";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";

/* Context */
export const FieldContext = createContext<{
  type: "error" | "info" | "success";
  message?: string;
}>({ type: "info", message: "" });

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
  IField = ({ children, message, type }) => {
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
