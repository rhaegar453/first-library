import React from "react";

const Label = React.forwardRef<
  HTMLParagraphElement,
  React.PropsWithoutRef<"p">
>(({ children }, ref) => {
  return <p ref={ref}>{children}</p>;
});

export default Label;
