import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { services } from "../../constants";
import { textVariant } from "../../utils/motion";

function Services() {
  return (
    <>
      <motion.div variants={textVariant(0)} whileInView="show" initial="hidden">
        <p className={styles.sectionHash}>#Services</p>
      </motion.div>
      <div>
        <VerticalTimeline>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
  // return (
  //   <div className="mt-20 flex flex-wrap gap-10 ">
  //     {services.map((ser, i) => (
  //       <ServiceCard key={ser.title} index={i} {...ser} />
  //     ))}
  //   </div>
  // );
}

export default Services;

function ServiceCard({ service }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      // date={service.date}
      iconStyle={{ background: "#050816" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={service.icon}
            alt="service"
            className="w-[70%] h-[70%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{service.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {service.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {service.description.map((point, i) => (
          <li
            key={i}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

// const ServiceCard = ({ index, title, icon, description }) => {
//   return (
//     <div className="xs:w-[250px] w-full ">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary rounded-[20px] py-5  min-h-[280px] flex justify-start items-center flex-col gap-2"
//         >
//           <div>
//             <img
//               src={icon}
//               alt={title}
//               className="w-16 h-16 object-contain m-auto"
//             />
//             <h3 className="text-white font-bold text-center text-[20px]">
//               {title}
//             </h3>
//           </div>

//           <ul className="list-disc ml-5 space-y-2 min-h-3/5">
//             {description.map((des) => (
//               <li className="text-sm text-secondary">{des}</li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
