import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext } from "react";
import styled from "styled-components";
import { getColor } from "../../../utils/colors";
import FieldContext from "../field.context";
const MessageStyle = styled.p `
  margin-left: 10px;
  color: ${({ type }) => {
    if (type == "error") {
        return getColor("danger");
    }
    else if (type === "success") {
        return getColor("primary");
    }
    else
        return getColor("gray", "default");
}};
  font-size: 10px;
  margin: 0px;
  margin-left: 10px;
  padding: 0px;
`;
MessageStyle.displayName = "MessageStyle";
const Message = React.forwardRef(({ children, ...rest }, ref) => {
    const { type } = useContext(FieldContext);
    return (_jsx(MessageStyle, { type: type, ref: ref, ...rest, children: children }, void 0));
});
Message.displayName = "MessageStyle";
export default Message;
