import TitleSection from "../common/TitleSection";

const InfoMe = () => {
  return (
    <div>
      <TitleSection title={"about me"} />
      <p className="text-[18px] text-center text-primaryText px-10 my-5 w-[95%] md:w-[80%] mx-auto">
        I am 24 years old. I graduated from the Faculty of Computers and
        Information, Menoufia University, with a good grade in 2022. I finished
        my military service in 2023. I work as a front-end designer using React
        JS. I received training from the ITI Institute for 120 hours. I designed
        websites such as an online store to sell products and use electronic
        payment methods. It is a site that sells courses, an Islamic site, and
        displays Qurans and hadiths..., Now I am a trainee at the ITI Institute
        for 3 months.
      </p>
    </div>
  );
};

export default InfoMe;
