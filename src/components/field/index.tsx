import React, { createContext } from "react";

/* Context */
const FieldContext = createContext<string | null>(null);

/* Field Container */
const Field: React.FC = ({ children }) => {
  return (
    <FieldContext.Provider value={"Hello"}>{children}</FieldContext.Provider>
  );
};

export default Field;
