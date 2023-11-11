import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light"
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x,
        y,
        transition: {
          duration: 1.5,
        }
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl">Skills</h2>
      <div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light"
          whileHover={{
            scale: 1.05,
          }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="GatsbyJS" x="15vw" y="-12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
