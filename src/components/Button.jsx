import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 rounded-[32px] shadow px-4 py-1">
      <p className="text-[#fff] font-size-[32px] font-semibold ">{text}</p>
    </button>
  );
};

export default Button;
