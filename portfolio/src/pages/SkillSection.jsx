import React from "react";
import SKILLS from "../data/skills.js";
import Button from "../components/buttons/Button.jsx";
import { motion } from "framer-motion";
const SkillSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="pb-6"
    >
      <h1 className="text-xl font-bold mb-3">Skills</h1>
      <div className="flex gap-2 flex-wrap items-center justify-start">
        {SKILLS.map((singleSkill) => (
          <Button key={singleSkill.id} name={singleSkill.skillName} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSection;
