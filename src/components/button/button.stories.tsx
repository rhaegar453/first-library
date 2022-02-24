import React from "react";
import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const withDefault = (args: any) => <Button {...args}>Click Me</Button>;
