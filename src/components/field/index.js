import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FieldContext from "./field.context";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
/* Field Container */
const Field = ({ children, message, type = "info" }) => {
    return (_jsx("div", { style: { marginTop: 10 }, children: _jsxs(FieldContext.Provider, { value: { message, type }, children: [children, message && _jsx(Field.Message, { type: type, children: message }, void 0)] }, void 0) }, void 0));
};
Field.displayName = "Field";
Field.Label = Label;
Field.Message = Message;
Field.Input = Input;
Field.defaultProps = {
    type: "info",
    message: "",
};
export default Field;
