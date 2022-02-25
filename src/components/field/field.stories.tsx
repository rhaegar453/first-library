import Field from ".";

export default {
  title: "Molecule/Field",
  component: Field,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "error", "info"],
      },
    },
    placeholder: {
      type: "string",
      defaultValue: "Please enter some text",
    },
  },
};

export const withDefault = (args: any) => (
  <Field type="error" message="Hello World this is Shivaraj Bakale">
    <Field.Label>Hello World</Field.Label>
    <Field.Input placeholder={args.placeholder}></Field.Input>
    <Field.Message type={args.type}>
      Hey there this is Shivaraj Bakale
    </Field.Message>
  </Field>
);
