import React from "react";
import Laptop from "../../assets/laptop.jpg";

const OurValues = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
            OUR VALUES
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium doloremque modi quis, quibusdam sed quae enim est, ea,
            consequuntur tenetur dolor porro repellendus eveniet natus quam
            commodi nostrum! Voluptatum, dolorem?
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
            Get Started
          </button>
        </div>
        <div className="flex md:grid-col-2">
          <div>
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-none">
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
              <li className="text-4xl bold">Ambition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
