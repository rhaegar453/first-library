import styled from "styled-components";
import { getColor } from "../../../utils/colors";

type IMessage = {
  type: "error" | "info" | "success";
};

const Message = styled.p<IMessage>`
  margin-left: 10px;
  color: ${({ type }) => {
    if (type == "error") {
      return getColor("danger");
    } else if (type === "success") {
      return getColor("primary");
    } else return getColor("gray", "default");
  }};
  font-size: 10px;
  margin: 0px;
  margin-left: 10px;
  padding: 0px;
`;

Message.displayName = "Message";

export default Message;
