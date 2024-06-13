import { data } from "../../assets/data/data";
import TitleSection from "../common/TitleSection";
import OneProject from "./OneProject";

const ListProjects = () => {
  return (
    <div className="project xs:w-[90%] lg:w-[80%] mx-auto">
      <TitleSection title={"All Projects"} />
      <div className="flex items-center xs:justify-center xs:gap-5 lg:justify-between flex-wrap my-20 ">
        {data.map((pro) => {
          return <OneProject key={pro.id} pro={pro} />;
        })}
      </div>
    </div>
  );
};

export default ListProjects;
