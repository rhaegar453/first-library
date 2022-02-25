import React from "react";
import Message from ".";

export default {
  title: "Atoms/Message",
  component: Message,
};

export const withDefault = (args: any) => (
  <Message {...args}>Hello World this is a message</Message>
);
