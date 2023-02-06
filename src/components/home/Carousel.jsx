import React, { useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative h-64 overflow-hidden bg-gray-900">
      <img
        src={slides[index].url}
        alt="slide"
        className="absolute w-full h-full object-cover"
      />
      <button
        className="absolute left-0 top-50% transform -translate-y-1/2"
        onClick={previous}
      >
        <AiFillLeftCircle className="text-white h-12 w-12" />
      </button>
      <button
        className="absolute right-0 top-50% transform -translate-y-1/2"
        onClick={next}
      >
        <AiFillRightCircle className="text-white h-12 w-12" />
      </button>
    </div>
  );
};

export default Carousel;
