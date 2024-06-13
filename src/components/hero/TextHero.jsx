import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
const TextHero = ({ visible }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible,
      }}
      className="xs:w-full xs:gap-1 md:w-[40%] flex flex-col gap-5"
    >
      <TextAnimation visible={visible} />
      <h2 className="text-secondaryText xs:text-[15px] md:text-[1.25rem]">
        Welcome to my portfolio. I'm passionate about building beautiful user
        interfaces and specialize in creating high-quality, responsive websites
        and web applications.
      </h2>
    </motion.div>
  );
};

export default TextHero;
