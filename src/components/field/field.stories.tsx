import Field from ".";

export default {
  title: "Molecule/Field",
  component: Field,
};

export const withDefault = (args: any) => (
  <Field>
    <Field.Label>Hello World</Field.Label>
    <Field.Input placeholder="Please enter the name"></Field.Input>
    <Field.Message type="error">
      Hey there this is Shivaraj Bakale
    </Field.Message>
  </Field>
);
