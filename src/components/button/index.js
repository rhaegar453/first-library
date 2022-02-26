import styled from "styled-components";
import { getColor } from "../../utils/colors";
const Button = styled.button `
  font-size: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &:hover {
    transition: 0.2s;
    filter: contrast(1.1);
  }
  &:disabled {
    opacity: 0.6;
  }

  background-color: ${({ variant }) => {
    if (variant === "gray") {
        return getColor(variant, "light");
    }
    return getColor(variant);
}};
  color: ${({ variant }) => {
    if (variant === "gray") {
        return getColor("gray", "dark");
    }
    else
        return "#ffffff";
}};
  padding: ${({ size }) => {
    if (size === "default") {
        return "8px 12px";
    }
    else if (size === "large") {
        return "12px 20px";
    }
    else {
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
