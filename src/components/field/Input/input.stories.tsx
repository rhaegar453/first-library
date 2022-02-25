import React from "react";
import Input from ".";

export default {
  title: "Atoms/Input",
  component: Input,
};

export const withDefault = (args: any) => <Input {...args} />;
