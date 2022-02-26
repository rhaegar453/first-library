import styled from "styled-components";
import { getColor } from "../../utils/colors";
const Chip = styled.span `
  &:hover {
    filter: contrast(1.2);
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  margin: 0px 5px;
  background-color: ${({ type }) => {
    if (type === "gray") {
        return getColor("gray", "light");
    }
    return getColor(type);
}};
  color: ${({ type }) => {
    if (type === "gray") {
        return getColor("gray", "dark");
    }
    else {
        return "#ffffff";
    }
}};
  border-radius: 100px;
  font-size: 12px;
  padding: 8px 16px;
  cursor: default;
`;
Chip.defaultProps = {
    type: "primary",
};
export default Chip;
