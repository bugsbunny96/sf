import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import accordions from "./database";

const HowMightWe = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="flex">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <h2 className="text-xl font-bold">How Might We...</h2>
      </div>
      <div className="w-2/3 p-4">
        {accordions.map((accordion, index) => (
          <div
            key={accordion.title}
            className="bg-white rounded-lg shadow p-4 mb-4"
          >
            <h3
              className="text-lg font-bold cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {accordion.title}
              <span className="float-right">
                {activeIndex === index ? (
                    <AiOutlineMinus className="font-bold" />
                    ) : (
                    <AiOutlinePlus className="font-bold" />
                )}
              </span>
            </h3>
            {activeIndex === index && (
              <p className="mt-4">{accordion.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowMightWe;
