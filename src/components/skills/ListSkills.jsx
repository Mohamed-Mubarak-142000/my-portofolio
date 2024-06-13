import Slider from "./Slider";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFramer } from "react-icons/cg";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import TitleSection from "../common/TitleSection";

export const data = [
  { id: "1", name: <FaHtml5 /> },
  { id: "2", name: <SiJavascript /> },
  { id: "3", name: <FaCss3 /> },
  { id: "4", name: <BsBootstrapFill /> },
  { id: "5", name: <FaReact /> },
  { id: "6", name: <SiRedux /> },
  { id: "7", name: <BsFiletypeScss /> },
  { id: "8", name: <SiTypescript /> },
  { id: "9", name: <RiNextjsFill /> },
  { id: "10", name: <RiTailwindCssFill /> },
  { id: "11", name: <CgFramer /> },
  { id: "12", name: <SiExpress /> },
  { id: "13", name: <DiMongodb /> },
];

const ListSkills = () => {
  return (
    <section>
      <TitleSection title={"technology skills"} />
      <Slider data={data} direction="right-to-left" />
      <Slider data={data} direction="left-to-right" />
    </section>
  );
};

export default ListSkills;
