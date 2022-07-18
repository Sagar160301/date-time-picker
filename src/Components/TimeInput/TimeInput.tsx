import React from "react";

interface ITimeInput {
  name?: string;
  id?: string;
  size?: string;
  placeholder?: string;
  onChange: () => void;
}

const small = {
  padding: "3px",
  marigin: "3px",
  fontSize: "0.8rem",
  boxShadow: "0 0 3px #0044ca, 0 0 3px #0044ca",
};
const medium = {
  padding: "6px",
  marigin: "6px",
  fontSize: "1rem",
  boxShadow: "0 0 6px #0044ca, 0 0 6px #0044ca",
};
const large = {
  padding: "7px 10px",
  marigin: "10px",
  fontSize: "1.2rem",
  boxShadow: "0 0 10px #0044ca, 0 0 10px #0044ca",
};

const TimeInput = ({
  name = "time",
  placeholder = "choose date",
  id,
  onChange,
  size = "medium",
}: ITimeInput) => {
  return (
    <input
      type="time"
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      style={size === "large" ? large : size === "medium" ? medium : small}
    />
  );
};

export default TimeInput;
