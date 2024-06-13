const TitleSection = ({ title }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <h2 className="uppercase text-[1.5rem] font-bold text-secondaryText border-secondaryText border-b-2  ">
        {title}
      </h2>
    </div>
  );
};

export default TitleSection;
