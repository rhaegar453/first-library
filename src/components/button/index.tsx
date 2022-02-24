import styled from "styled-components";
import { getColor } from "../../utils/colors";

type ButtonProps = {
  variant: "primary" | "danger" | "gray" | "warning";
  size: "default" | "large" | "full";
};

const Button = styled.button<ButtonProps>`
  font-size: 16px;
  border: 0px;
  border-radius: 5px;

  background-color: ${({ variant }) => {
    return getColor(variant);
  }};
  color: #ffffff;
  padding: ${({ size }) => {
    if (size === "default") {
      return "8px 12px";
    } else if (size === "large") {
      return "12px 20px";
    } else {
      return "12px 20px";
    }
  }};
  width: ${({ size }) => {
    if (size === "full") {
      return "100%";
    }
  }};
`;

Button.displayName = "Button";

Button.defaultProps = {
  size: "default",
  variant: "primary",
};

export default Button;
