import { createContext } from "react";

const FieldContext = createContext<{
  type: "error" | "info" | "success";
  message?: string;
}>({ type: "info", message: "" });

export default FieldContext;
