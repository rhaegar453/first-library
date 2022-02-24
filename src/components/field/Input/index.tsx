import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.PropsWithoutRef<"input">
>(({ children }, ref) => {
  return <input ref={ref}>{children}</input>;
});

export default Input;
