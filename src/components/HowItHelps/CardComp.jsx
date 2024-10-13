import React from "react";

const Card = ({ icon, heading, text }) => {
  return (
    <div className="p-6 bg-white rounded-xl border-[1px] border-gray-2200 text-center">
      <div className="bg-brandWhite p-4 rounded-full w-fit mx-auto">
        <img src={icon} alt="" className="w-48 mx-auto" />
      </div>
      <h4 className="my-4 text-lg font-bold">{heading}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};

export default Card;
