import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const Skill = ({ index, name, icon, description }) => {
  return (
    <>
      <div className="sm:block">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          whileInView={"show"}
          initial={"hidden"}
          viewport={{ once: true }}
          className="w-full green-pink-gradient p-[1px] rounded-lg md:rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-lg md:rounded-[20px] md:p-5 p-2  flex justify-start items-center flex-col gap-2"
          >
            <img
              src={icon}
              alt={name}
              className="w-14 h-14 object-contain m-auto"
            />
            <h3 className="text-white font-bold text-center text-sm lg:text-base">
              {name}
            </h3>
          </div>
        </motion.div>
      </div>
      {/* <div className="">
        <div className="w-full green-pink-gradient p-[1px] rounded-lg md:rounded-[20px] shadow-card">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-lg md:rounded-[20px] md:p-5 p-2  flex justify-start items-center flex-col gap-2"
          >
            <img
              src={icon}
              alt={name}
              className="w-14 h-14 object-contain m-auto"
            />
            <h3 className="text-white font-bold text-center text-sm lg:text-base">
              {name}
            </h3>
          </div>
        </div>
      </div> */}
    </>
  );
};

function Skills() {
  return (
    <>
      <p className={styles.sectionHash}>#Skills</p>
      <div className="flex flex-wrap gap-2 sm:gap-4 xl:gap-5 justify-center green-pink-gradient p-3 rounded-[20px] shadow-card">
        {technologies.map((tech, i) => (
          <Skill key={tech.title} index={i} {...tech} />
        ))}
      </div>
    </>
  );
}

export default Skills;
