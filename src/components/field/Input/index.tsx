import React, { useContext } from "react";
import styled from "styled-components";
import { getColor } from "../../../utils/colors";
import FieldContext from "../field.context";

type IInputStyle = {
  variant?: "error" | "info" | "success";
};

const InputStyle = styled.input<IInputStyle>`
  width: -webkit-fill-available;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid;
  background-color: ${"#f8f8f8"};
  border-color: ${({ variant }) => {
    if (variant === "error") {
      return getColor("danger");
    } else if (variant === "success") {
      return getColor("primary");
    } else {
      return getColor("gray", "light");
    }
  }};
  outline: none;
  margin: 3px 0px;
`;

InputStyle.displayName = "InputStyle";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input"> & IInputStyle
>(({ ...rest }, ref) => {
  const { type } = useContext(FieldContext);
  return <InputStyle variant={type} {...rest} ref={ref} />;
});

export default Input;
