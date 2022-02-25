import React, { createContext } from "react";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";

/* Context */
const FieldContext = createContext<string | null>(null);

/* Interface */
interface IField {
  Label: typeof Label;
  Message: typeof Message;
  Input: typeof Input;
}

/* Field Container */
const Field: React.FC & IField = ({ children }) => {
  return (
    <FieldContext.Provider value={"Hello"}>{children}</FieldContext.Provider>
  );
};

Field.Label = Label;
Field.Message = Message;
Field.Input = Input;

export default Field;
