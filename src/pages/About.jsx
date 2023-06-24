import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const About = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <>
    <section className="flex flex-col my-8 mb-12 items-center w-[70%] mx-auto h-[100vh] gap-4">
      {/* <div className="w-[50%] h-[20rem] rounded-full object-fill border border-black">
        <img src="../../public/logo-2.png" alt="about" />
      </div> */}
      <div className="bg-gray-100 rounded py-8 my-8">
        <h1 className="text-center text-4xl mb-4 font-semibold">Nishi Motta</h1>
        <p className="w-[80%] mx-auto my-0 leading-8 font-medium text-lg">
          Currently pursuing the Masters degree in Financial Mathematics from
          The Maharaja Sayajirao University of Baroda and has bachelor's degree
          in Science with Mathematics as Major, is responsible for the
          Mathematical understanding and codes behind the calculation of the
          Greeks Values. She has Art as her passion alongside her love for
          Mathematics.
        </p>
      </div>
      <div className="bg-gray-100 rounded py-8 my-8">
        <h1 className="text-center text-4xl mb-4 font-semibold">Yuvraj Bhonsle</h1>
        <p className="w-[80%] mx-auto my-0 leading-8  font-medium text-lg">
          Web Developer. Making the web a great place by creating solutions to problems. Helping people create their dream websites and providing value in the world.
        </p>
      </div>
      
    </section>
    </>
  );
};

export default About;
