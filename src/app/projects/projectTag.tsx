import React from "react";
import { ProjectTag } from "@/components/interfaces";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }: ProjectTag) => {
  const buttonStyles = isSelected
    ? "text-white font-Raleway font-bold"
    : "text-[#7B4AE280] font-Raleway font-bold";
    return (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonStyles} border h-7 w-32 flex rounded-full text-[#7B4AE280] hover:shadow hover:shadow-[#7B4AE280] hover:bg-[#7B4AE21A] flex-row justify-center items-center border-[#7B4AE280]`}
        onClick={() => onClick(name)}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;