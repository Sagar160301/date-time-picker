import React from "react";

interface IDateInput {
  name?: string;
  id?: string;
  style?: {
    padding?: string;
    marigin?: string;
    border?: string;
    outline?: string;
    width?: string;
    hieght?: string;
  };
  placeholder?: string;
  onChange: () => void;
}

const DateInput = ({
  name = "date",
  placeholder = "choose date",
  id,
  onChange,
  style,
}: IDateInput) => {
  return (
    <input
      type="date"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
    />
  );
};

export default DateInput;
