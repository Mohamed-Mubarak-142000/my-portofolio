import { delay, motion } from "framer-motion";
import imageProf from "../../assets/12.png";

const ImageHero = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-10"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1, 1.1, 1],
          borderRadius: ["50%", "50%", "50%", "50%", "50%"],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
        className="w-[400px] h-[400px]"
      >
        <img src={imageProf} alt="myImage-prof" />
      </motion.div>

      {/* Placeholder for Social Icons */}
      <div className="text-secondaryText">social icons</div>
    </motion.div>
  );
};

export default ImageHero;
