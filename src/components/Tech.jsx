import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col justify-center items-center gap-2"
        >
          <img
            src={tech.icon}
            alt=""
            className="md:w-20 md:h-20 lg:w-24 lg:h-24  w-16 h-16 object-contain"
          />
          <h3 className="min-w-fit font-semibold text-sm md:text-base">
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
