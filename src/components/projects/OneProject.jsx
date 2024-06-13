import { Link } from "react-router-dom";

const OneProject = ({ pro }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
      }}
      //   border-2 border-[#8b8b8b]
      className=" xs:w-[300px] sm:w-[350px] h-[400px] flex flex-col shadow-lg rounded "
    >
      <div className=" w-full h-[55%] rounded-t-md rounded-b-none">
        <img
          className="w-full h-full rounded-t-md rounded-b-none object-cover"
          src={pro.imageProject[0].image}
          alt="image"
        />
      </div>

      <div className=" w-full h-[10%] line-clamp-1 flex items-start p-2 ">
        <h1 className="text-primaryText text-[18px] capitalize">{pro.name}</h1>
      </div>

      <div className=" w-full h-[18%] flex items-start line-clamp-3 px-2">
        <h1 className="text-[#9f9d9d] text-left text-[15px]">
          {pro.description}
        </h1>
      </div>

      <div className=" w-full flex items-center justify-center gap-3 px-5 h-[15%] ">
        <input
          value={" Live demo"}
          className=" w-1/2 py-3 text-[16px] text-primaryText capitalize bg-bgColorBtnHover hover:bg-bgColorBtn hover:text-secondaryText cursor-pointer hover:rounded-md hover:transition hover:duration-50"
          type="button"
        />

        <Link
          to={`/detail-project/${pro.id}`}
          value={" Live demo"}
          className=" w-1/2 py-3 text-[16px] capitalize bg-bgColorBtn hover:bg-bgColorBtnHover hover:text-primaryText"
        >
          Details more
        </Link>
      </div>
    </div>
  );
};

export default OneProject;
