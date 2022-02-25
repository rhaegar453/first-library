import styled from "styled-components";
import { getColor } from "../../../utils/colors";

const Label = styled.label`
  font-size: 16px;
  margin-left: 10px;
  color: ${getColor("gray")};
`;

Label.displayName = "Label";

export default Label;
