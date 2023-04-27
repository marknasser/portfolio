import { motion } from "framer-motion";
import { styles } from "../../styles";

import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import Services from "./Services";
import Skills from "./Skills";
import Info from "./Info";
import resume from "../../assets/Mark's Resume.pdf";

function About() {
  return (
    <>
      <motion.div variants={textVariant(0)} whileInView="show" initial="hidden">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg-items-end  items-center gap-3 ">
          <motion.p
            variants={fadeIn("right", "", 0.1, 1)}
            whileInView={"show"}
            initial={"hidden"}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Junior front-end developer, passionate about creating fully
            responsive websites and developing features to enhance the user’s
            experience using React.js, seeking a great opportunity to utilize my
            skills, and abilities to achieve a professional growth
          </motion.p>
          <a href={resume} download="lcv">
            <button className=" bg-[#915EFF] p-2 rounded-lg text-white font-semibold shadow-md lg:mr-16 ">
              Download CV
            </button>
          </a>
        </div>

        <Info />
      </div>

      <Skills />
      <Services />
    </>
  );
}

export default SectionWrapper(About, "about");
