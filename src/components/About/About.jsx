import InfoMe from "./InfoMe";
import CardInfo from "./CardInfo";
import Trainnig from "./Trainnig";

const About = () => {
  return (
    <section className="about">
      <div className="xs:w-full md:w-[82%] pt-4 mx-auto">
        <InfoMe />
        <CardInfo />
        <Trainnig />
      </div>
    </section>
  );
};

export default About;
