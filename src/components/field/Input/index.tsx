import React, { useContext } from "react";
import styled from "styled-components";
import { FieldContext } from "..";
import { getColor } from "../../../utils/colors";

type IInputStyle = {
  variant: "error" | "info" | "success";
};

const InputStyle = styled.input<IInputStyle>`
  width: -webkit-fill-available;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ variant }) => {
    if (variant === "error") {
      return getColor("danger");
    } else if (variant === "success") {
      return getColor("primary");
    } else {
      return getColor("gray");
    }
  }};
  outline: none;
  margin: 3px 0px;
`;

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input">
>(({ ...rest }, ref) => {
  const { type } = useContext(FieldContext);

  return <InputStyle variant={type} ref={ref} {...rest}></InputStyle>;
});

Input.displayName = "Input";

export default Input;
