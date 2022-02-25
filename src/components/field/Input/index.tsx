import React from "react";
import styled from "styled-components";
import { getColor } from "../../../utils/colors";

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${getColor("gray", "light")};
  outline: none;
  margin: 3px 0px;
`;

Input.displayName = "Input";

export default Input;
