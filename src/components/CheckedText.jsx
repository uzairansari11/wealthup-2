import React from "react";

const CheckedText = ({ text }) => {
  return (
    <div className="flex items-start mb-4">
      <img src="checked.png" alt="checked" />
      <div className="px-2 w-full">
        <p className="text-[#fff] .not-italic font-semibold text-[29px] border-b-2 border-b-white w-full pb-[18px]  ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CheckedText;
