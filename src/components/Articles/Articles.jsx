import ImageArticle from "../../assets/hero.webp";
import TitleSection from "../common/TitleSection";
import { Link } from "react-router-dom";
const Articles = () => {
  return (
    <section className="artical py-10 mt-[-20px]">
      <TitleSection title={"my Articles"} />
      <div className=" w-[82%] mx-auto mt-10 flex items-center justify-center gap-5">
        <div className="xs:w-[90%] md:w-[40%] h-[400px] mx-auto ">
          <p className="text-[22px] mt-10 text-primaryText">
            This is a documentation explaining programming concepts in general,
            in addition to some topics specific to specific concepts and
            explaining parts of the code that I use in my projects from my point
            of view.
          </p>
          <div className="mt-10">
            <Link
              to={"/my-article"}
              className=" px-16 py-4 capitalize bg-primaryText text-[18px] shadow-lg hover:bg-secondaryText hover:text-primaryText cursor-pointer "
            >
              read more
            </Link>
          </div>
        </div>

        <div className="xs:w-[90%] md:w-[40%] h-[400px] mx-auto ">
          <img src={ImageArticle} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Articles;
