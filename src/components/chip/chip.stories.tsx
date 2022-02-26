import Chip from ".";

export default {
  title: "Atoms/Chip",
  component: Chip,
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "gray", "danger", "warning"],
    },
  },
};

export const withDefault = (args: any) => <Chip {...args}>Hello World</Chip>;

export const withMultiple = (args: any) => (
  <div>
    <Chip {...args}>Hello World</Chip>
    <Chip {...args}>Hello World</Chip>
    <Chip {...args}>Hello World</Chip>
    <Chip {...args}>Hello World</Chip>
  </div>
);
