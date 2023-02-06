import React, { useState } from "react";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [
    { src: "laptop.jpg" },
    { src: "laptop.jpg" },
    { src: "laptop.jpg" },
    { src: "laptop.jpg" }
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? logos.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === logos.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-3/4">
        <div className="flex">
          {logos.map((logo, index) => {
            const isVisible =
              index >= currentIndex &&
              index < currentIndex + 3 &&
              logos.length > 3;
            return (
              isVisible && (
                <img
                  key={index}
                  src={logo.src}
                  alt={`Client Logo ${index + 1}`}
                  className="w-32 h-32 m-2"
                />
              )
            );
          })}
        </div>
        <button
          className="absolute left-0 top-0 p-2 bg-white rounded-full shadow-lg"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-0 p-2 bg-white rounded-full shadow-lg"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Cards;

