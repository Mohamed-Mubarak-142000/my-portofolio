import { animateScroll as scroll } from "react-scroll";
import { HiArrowUpCircle } from "react-icons/hi2";

const BtnScroller = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <HiArrowUpCircle
      onClick={scrollToTop}
      className="fixed bottom-2 right-2 w-10 h-10 rounded-md text-bgColorBtn cursor-pointer"
    />
  );
};

export default BtnScroller;
