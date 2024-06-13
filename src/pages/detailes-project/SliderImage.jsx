import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SliderImage = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const length = project.imageProject.length;
  console.log(length);
  // Function to auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className=" relative w-[80%] h-[400px] overflow-hidden mx-auto">
      <AnimatePresence>
        <motion.img
          key={project.imageProject[current].image}
          src={project.imageProject[current].image}
          alt={`Slide ${current}`}
          className="w-full h-full object-contain"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default SliderImage;
