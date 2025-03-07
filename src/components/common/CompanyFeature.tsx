import bg from "../../assets/images/feature/BG.png";

const CompanyFeature = () => {
  return (
    <section
      className="w-full flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})`, padding: "80px 0px" }}
    >
      <section className="main-company-feature-section w-[80%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] ">
        {[
          { count: "37+", text: "Years of Hard Work" },
          { count: "500k+", text: "Happy Customers" },
          { count: "28", text: "Qualified Team Members" },
          { count: "750k+", text: "Monthly Orders" },
        ].map((item, index) => (
          <div
            key={index}
            className=" bg-white/10 rounded-[8px] w-full flex flex-col justify-center items-center"
            style={{
              padding: "30px 30px",
            }}
          >
            <h4 className=" text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-[300] text-[#00B207]">
              {item.count}
            </h4>
            <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[400] text-[#FFFFFF]">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CompanyFeature;
