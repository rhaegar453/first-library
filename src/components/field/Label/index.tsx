import React from "react";
import styled from "styled-components";
import { getColor } from "../../../utils/colors";

const Label = styled.label`
  font-size: 16px;
  margin-left: 10px;
  color: ${getColor("gray")};
`;

export default Label;
