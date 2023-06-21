import React, { useState } from "react";
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const About = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <section className="flex flex-col justify-evenly items-center w-[80%] mx-auto my-3 h-[100vh] gap-4 lg:flex-row">
      {/* <div className="w-[50%] h-[20rem] rounded-full object-fill border border-black">
        <img src="../../public/logo-2.png" alt="about" />
      </div>
      <div>
        <h1>Nishi Motta</h1>
        <p>Masters, Studying in MSU, Created Greek God Calculator</p>
      </div> */}
      <h1 className="text-2xl">Hi, I'm Nishi Motta</h1>
    </section>
  );
};

export default About;