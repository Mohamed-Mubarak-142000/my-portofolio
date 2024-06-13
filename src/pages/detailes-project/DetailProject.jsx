import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/data";
import Navbar from "../../components/navbar/Navbar";
import SliderImage from "./SliderImage";

const DetailProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataProject = data.find((pro) => pro.id === +id);
    if (dataProject) {
      setProject(dataProject);
      setError(null);
    } else {
      setError("Project not found");
      setProject(null);
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(318deg, #9066dd -12.31%, #fff0 97.92%), linear-gradient(#160040, #160040)",
        backgroundSize: "100% 100%",
      }}
      className="min-h-screen "
    >
      <Navbar />
      <div className="xs:w-[90%] md:w-[80%] mx-auto my-20">
        <SliderImage project={project} />

        <div className="my-10 ">
          <section className="xs:flex-col xs:items-start xs:gap-5 flex md:flex-row md:items-center md:justify-around">
            <div>
              <span className="text-secondaryText capitalize text-[20px]">
                project name:
              </span>
              <h1 className="text-primaryText text-[22px] font-semibold">
                {project.name}
              </h1>
            </div>

            <div>
              <span className="text-secondaryText capitalize text-[20px]">
                project Category:
              </span>
              <h1 className="text-primaryText text-[22px] font-semibold">
                {project.category}
              </h1>
            </div>
          </section>

          <div className="xs:w-[95%] md:w-[85%] my-5">
            <span className="text-secondaryText capitalize text-[20px]">
              project Description:
            </span>
            <h1 className="text-primaryText text-[18px] ">
              {project.description}
            </h1>
          </div>

          <div className="xs:w-[95%] md:w-[85%] my-5">
            <span className="text-secondaryText capitalize text-[20px]">
              project Skills:
            </span>
            <div className="flex xs:flex-col xs:justify-center md:items-start md:justify-start md:flex-row gap-5 my-2">
              {project.technologySkills.map((skill) => {
                return (
                  <span
                    key={skill.id}
                    className="border border-secondaryText text-primaryText hover:bg-secondaryText cursor-pointer rounded-2xl py-1 px-5"
                  >
                    {skill.nameSkill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
