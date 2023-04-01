import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button
      data-testid='button'
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#B6E06B",
        color: "#222",
      }}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
