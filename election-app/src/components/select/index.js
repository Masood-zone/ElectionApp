import React from "react";

const Select = (props) => {
  return (
    <>
      <label htmlFor={props.title}>{props.title}</label>
      <select className="form-select p-1" aria-label="Default select example">
        {props.options?.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
