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
  <Field message="Hello World this is Shivaraj Bakale">
    <Field.Label>Hello World</Field.Label>
    <Field.Input placeholder="Hello World this is Shivaraj"></Field.Input>
  </Field>
);

export const withCombined = (args: any) => {
  return (
    <div>
      <Field message="Hello World this is the message">
        <Field.Label>Name</Field.Label>
        <Field.Input placeholder="Please enter your Name"></Field.Input>
      </Field>
      <Field message="Hello World this is the message">
        <Field.Label>Age</Field.Label>
        <Field.Input placeholder="Please enter your Name"></Field.Input>
      </Field>
      <Field message="Hello World this is the message">
        <Field.Label>Sex</Field.Label>
        <Field.Input placeholder="Please enter your Name"></Field.Input>
      </Field>
    </div>
  );
};
