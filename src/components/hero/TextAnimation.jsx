import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ visible }) => {
  const title =
    "Hi 👋, my name is Mohamed Mubarak. I work as a Frontend Developer specializing in React js.";

  // Variants for character animation
  const characterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const splitText = (text) =>
    text.split("").map((char, index) => ({
      char,
      id: `${char}-${index}`,
    }));

  const [titleChars, setTitleChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (visible) {
      setTitleChars(splitText(title));
    }
  }, [visible, title]);

  useEffect(() => {
    let intervalId;
    if (visible) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === title.length - 1 ? 0 : prevIndex + 1
        );
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [visible]);

  return (
    <motion.div className="w-[100%] flex flex-col gap-5">
      <motion.h1 className="xs:text-[20px] md:text-[2rem] text-primaryText capitalize">
        {titleChars.map(({ char, id }, index) => (
          <motion.span
            key={id}
            variants={characterVariants}
            animate={visible && index <= currentIndex ? "visible" : "hidden"}
            initial="hidden"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default TextAnimation;
