import React, { useState } from "react";
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const Glossary = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <>
      <h1 className="text-center m-3 text-3xl font-semibold">Glossary</h1>
      <section className="flex flex-col items-center justify-center mb-5">
          {data.map((item, index) => (
            <div key={index} className='flex flex-col shadow group p-4'>
              <div
                className="text-xl flex items-center justify-between cursor-pointer w-[70vw] md:w-[50vw] group-hover:text-neutral-600"
                onClick={() =>
                  setExpandedItem(index === expandedItem ? null : index)
                }
              >
                <h1 className="font-medium mr-2 w-[50%]">{item.title}</h1>
                <span>{index === expandedItem ? <FaMinus /> : <FaPlus />}</span>
              </div>
              {index === expandedItem && (
                <div className="p-2 mt-2 w-[70vw] md:w-[50vw]">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
      </section>
    </>
  );
};

const data = [
  {
    title: "Welcome to FracFin",
    desc: "Created By Nishi Motta",
  },
];

export default Glossary;