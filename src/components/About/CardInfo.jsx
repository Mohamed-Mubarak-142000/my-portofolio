import InfoCounter from "./InfoCounter";

const CardInfo = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 py-5 xs:justify-center lg:justify-between">
      <InfoCounter number={24} startText={"i am "} endText={"years old"} />
      <InfoCounter
        number={4}
        startText={"i have "}
        endText={"years of experience "}
      />
      <InfoCounter number={2022} startText={"I am graduating in "} />
      <InfoCounter number={5} startText={"I designed"} endText={"projects"} />
    </div>
  );
};

export default CardInfo;
