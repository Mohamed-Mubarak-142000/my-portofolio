const Trainnig = () => {
  return (
    <div className="my-5 flex flex-col gap-5 items-start">
      <h2 className="border-l-2 rounded-tl-none rounded-br-none rounded-bl-md p-2 border-b-2 border-primaryText text-secondaryText  uppercase text-[22px] font-semibold ">
        education and Training & experience
      </h2>

      <div className="border border-secondaryText w-[600px] mx-auto h-[600px] relative rounded-full my-5">
        <div
          style={{
            backgroundImage:
              "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
          }}
          className="p-5 w-[350px] shadow-md rounded absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] "
        >
          <h3 className="text-[22px] text-primaryText">
            I graduated from the Faculty of Computers and Information, Menoufia
            University With a good grade in 2022
          </h3>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
          }}
          className="p-5 w-[200px] bg-primaryText shadow-md rounded absolute top-0 left-[-25px]  "
        >
          <h3 className="text-[15px] font-semibold text-secondaryText">
            {" "}
            Information Technology Institute (ITI) Hybrid Frontend React
            Developer Jul 2021 - Present·3yrs Menoufia,egypt·Remote
          </h3>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
          }}
          className="p-5 w-[200px] bg-primaryText shadow-md rounded absolute top-0 right-[-25px]  "
        >
          <h3 className="text-[15px] font-semibold text-secondaryText">
            Frontend Web Developer GamifierSA· Internship May 2024 Riyadh,Saudi
            Arabia.Remote
          </h3>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
          }}
          className="p-5 w-[200px] bg-primaryText shadow-md rounded absolute bottom-0 left-[-25px]  "
        >
          <h3 className="text-[15px] font-semibold text-secondaryText">
            Frontend Web Developer CodeAlpha Internship May 2024 Present .2mos
            Remote
          </h3>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(268.87deg,#8854e15e 0.14%,#8854e13c 99.81%)",
          }}
          className="p-5 w-[200px] bg-primaryText shadow-md rounded absolute bottom-0 right-[-25px]  "
        >
          <h3 className="text-[15px] font-semibold text-secondaryText">
            Full Stack Developer May 2024 - Present 2 mos El Mansoura, Ad
            Daqahliyah, Egypt · Hybrid
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Trainnig;
