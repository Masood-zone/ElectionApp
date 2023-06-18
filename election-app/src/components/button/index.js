import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="btn btn-primary"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
