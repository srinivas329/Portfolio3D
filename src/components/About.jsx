import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] shadow-card green-pink-gradient rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[218px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        As a passionate and detail-oriented Web and UI Developer, I specialize
        in crafting engaging and user-centric digital experiences. With a solid
        foundation in front-end technologies, I strive to merge aesthetics with
        functionality, ensuring seamless interactions across all devices.
        Currently, I work as a Software Engineer, where I leverage my skills in
        React, Tailwind CSS, and some other technologies to deliver high-quality
        applications that meet user needs and business goals.
        <p className="pt-3">
          My approach to development is rooted in continuous learning and
          collaboration, allowing me to stay updated with industry trends and
          best practices. I am committed to creating intuitive interfaces that
          enhance user experience and contribute to the success of projects.
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
