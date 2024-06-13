import { motion } from "framer-motion";
import TextHero from "./TextHero";
import ImageHero from "./ImageHero";
import HeroAnimate from "../common/HeroAnimate";
const Hero = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1, delay: 2 } };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible,
  };

  return (
    <div className="home">
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="relative min-h-[80vh] xs:flex-col-reverse xs:gap-2 xs:mt-10 md:mt-0 md:flex-row flex items-center justify-center md:gap-20 p-5"
      >
        {/* Introduction Text */}
        <TextHero visible={visible} />
        {/* Animated Profile Image and Social Icons */}
        <ImageHero itemVariants={itemVariants} />
      </motion.div>
      <HeroAnimate />
    </div>
  );
};

export default Hero;
