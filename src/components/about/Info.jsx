import { useState } from "react";

import { services, information, technologies } from "../../constants";
import { motion } from "framer-motion";

const Info = () => {
  const [active, setActive] = useState("personal");
  const activeStyle =
    "text-[#915EFF] font-semibold before:absolute before:w-1/2 before:h-[2px] before:bottom-0 before:bg-[#915EFF] before:transition before:duration-500";
  console.log(
    Array(5)
      .fill("")
      .map(() => 5)
  );
  console.log(active);
  return (
    <motion.div className="mt-4 bg-tertiary  rounded-sm lg:w-3/6">
      <ul className=" list-none flex p-3 justify-center  gap-6  text-secondary font-semibold">
        {information.taps.map((info) => (
          <li
            key={info.id}
            className={`${
              active === info.id ? activeStyle : ""
            } min-w-fit pb-1 text-sm md:text-lg relative cursor-pointer transition duration-500 ease-in-out  hover:font-semibold`}
            onClick={() => setActive(info.id)}
          >
            {info.title}
          </li>
        ))}
      </ul>
      {active === "personal" && (
        <div className="p-5 pt-0">
          {information.personalData.map((info) => (
            <div key={info.address} className="font-semibold">
              <span className="">{info.address} :</span>
              <span className="ml-3 text-sm text-secondary ">{info.info}</span>
            </div>
          ))}
        </div>
      )}
      {active === "languages" && (
        <div className="p-5 pt-0 flex flex-col justify-center gap-5 min-h-[160px]">
          {information.languages.map((lang) => (
            <div key={lang.name} className=" flex  gap-3 max-w-[300px]">
              <span className="font-semibold">{lang.name}</span>
              <div className="inline-flex flex-col gap-1">
                <div className="flex gap-2 ">
                  {Array(6)
                    .fill("")
                    .map((_, i) => (
                      <span
                        className={`w-6 xs:w-10 h-3 rounded-sm  ${
                          i <= lang.level - 1 ? "bg-[#00cea8]" : "bg-black"
                        } `}
                      />
                    ))}
                </div>
                <p className="text-sm text-secondary">{lang.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {active === "interests" && (
        <div className="p-5 pt-0  flex flex-wrap gap-2  justify-center min-h-[160px]">
          {information.interests.map((habit) => (
            <div key={habit.habit} className="font-semibold flex items-center">
              <img src={habit.icon} alt={habit.habit} className="w-7" />
              <span className="ml-3 text-sm text-secondary ">
                {habit.habit}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
export default Info;
