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
    <Field.Input placeholder="Hello World this is Shivaraj"></Field.Input>
  </Field>
);

export const withCombined = (args: any) => {
  return (
    <div>
      <Field {...args} message="Hello World this is Shivaraj Bakale">
        <Field.Label>Name</Field.Label>
        <Field.Input placeholder="Hello World this is Shivaraj"></Field.Input>
      </Field>
      <Field {...args} message="Hello World this is Shivaraj Bakale">
        <Field.Label>Age</Field.Label>
        <Field.Input placeholder="Hello World this is Shivaraj"></Field.Input>
      </Field>
      <Field {...args} message="Hello World this is Shivaraj Bakale">
        <Field.Label>Gender</Field.Label>
        <Field.Input placeholder="Hello World this is Shivaraj"></Field.Input>
      </Field>
    </div>
  );
};
