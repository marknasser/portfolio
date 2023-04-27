import ProfileImg from "../../assets/old/profile.jpg";
import { motion } from "framer-motion";
import { SocialMediaIcons } from "..";
import { styles } from "../../styles";

function Home({ setSelectedPage }) {
  return (
    <section
      id="home"
      className="relative md:flex md:justify-center md:items-center gap-10 md:gap-5 md:h-screen w-5/6 md:w-[90%] lg:w-5/6 py-10 mx-auto md:mx-auto"
    >
      {/* <div className=" z-10 mt-16 md:mt-30 flex justify-center md:order-3  overflow-hidden ">
        <img
          src={ProfileImg}
          alt="profile"
          className=" z-9 hover:filter hover:to-black-200 transition duration-500 z-10 w-[80%] max-w-[400px] md:max-w-[600px] shadow-wave  animate-borderWave"
        />
      </div> */}
      <div className=" z-10 mt-16 md:mt-30 flex justify-center md:order-3  overflow-hidden ">
        <div className="overflow-hidden relative bg-profile-img bg-cover bg-no-repeat bg-top z-9 transition duration-500 z-10  w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] shadow-wave  animate-borderWave">
          <div className=" w-full  h-full backdrop-grayscale " />
          {/* <div className=" w-full  h-full bg-[#915eff20] bg-gradient-to-r from-[#11998e80] via-[rgb(168 85 247/.7)]  to-[#ec489960]  " /> */}
        </div>
      </div>

      <div className="z-30 mt-12 md:mt-30 flex flex-row justify-center items-center gap-5 md:order-2">
        <div className="flex flex-col justify-start items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-80 violet-gradient"></div>
        </div>

        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm
                {/* <span
                className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
              xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              > */}
                <span className="text-[#915EFF] ">Mark</span>
              </h1>
              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}
              >
                Front-End Developer <br className="sm:block " />
                Passionate about creating and optimizing interactive,
                user-friendly, and feature-rich websites and web applications
                Using React.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start gap-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#work"
              className="rounded-sm py-3 px-5 lg:px-7 font-semibold
             bg-[#00cea8] hover:text-white transition duration-500"
              // onClick={() => setSelectedPage("contact")}
            >
              My Work
            </a>
            <a
              href="#contact"
              className="rounded-sm py-3 px-5 lg:px-7 font-semibold border-2 border-secondary  transition duration-500  flex items-center justify-center "
              // onClick={() => setSelectedPage("contact")}
            >
              Hire me
            </a>
          </motion.div>

          <motion.div
            className="lg:hidden md:flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons direction={"row"} />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="hidden lg:flex mt-5 justify-center md:justify-start md:order-1 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <SocialMediaIcons direction={"col"} />
      </motion.div>

      <div className="absolute md:bottom-10   w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-8 h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start pt-1">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;
