import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const InfoCounter = ({ startText, endText, number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Start the animation when the component is in view and hasn't animated yet
          const controls = animate(count, +number, { duration: 5 });
          // Listen for changes in the rounded value and update the display count
          const unsubscribe = rounded.on("change", (latest) =>
            setDisplayCount(latest)
          );
          // Mark that the animation has started
          setHasAnimated(true);
          // Clean up the animation and the listener when the component unmounts
          return () => {
            controls.stop();
            unsubscribe();
          };
        }
      },
      {
        threshold: 0.1, // 10% of the component must be visible
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [count, rounded, number, hasAnimated]);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
      }}
      className="hover:border rounded w-[280px] h-[170px] p-3 text-primaryText hover:text-secondaryText hover:border-primaryText flex justify-center items-center"
      ref={ref}
    >
      <motion.h1 className="text-[25px] uppercase">
        {startText}
        <br />
        {displayCount}
        <br />
        {endText}
      </motion.h1>
    </div>
  );
};
export default InfoCounter;
