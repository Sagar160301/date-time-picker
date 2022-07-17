import React from "react";

interface ITimeInput {
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

const TimeInput = ({
  name = "date",
  placeholder = "choose date",
  id,
  onChange,
  style,
}: ITimeInput) => {
  return (
    <input
      type="time"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
    />
  );
};

export default TimeInput;
