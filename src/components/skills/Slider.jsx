// Slider.js
import { motion } from "framer-motion";
const Slider = ({ data, direction }) => {
  const initialX = direction === "right-to-left" ? "100%" : "-100%";
  const animateX = direction === "right-to-left" ? "-100%" : "100%";

  return (
    <div className="w-full h-[150px]">
      <motion.div
        className="flex flex-row gap-10 w-full h-[150px]"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {data?.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-10 h-full w-[200px]"
          >
            <div className="text-[4rem] text-secondaryText">{skill.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
