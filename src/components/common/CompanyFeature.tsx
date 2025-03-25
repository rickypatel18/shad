import bg from "../../assets/images/feature/BG.png";
import img1 from "../../assets/images/leaf/pawel-czerwinski-lWBZ01XRRoI-unsplash 2.png";
import img2 from "../../assets/images/leaf/Group 8.png";
import img3 from "../../assets/images/leaf/Group (4).png";

const CompanyFeature = () => {
  const features = [
    { count: "37+", text: "Years of Hard Work" },
    { count: "500k+", text: "Happy Customers" },
    { count: "28", text: "Qualified Team Members" },
    { count: "750k+", text: "Monthly Orders" },
  ];

  return (
    <section
      className="w-full flex justify-center bg-cover bg-center bg-no-repeat relative  z-[-5]"
      style={{ backgroundImage: `url(${bg})`, padding: "80px 0px" }}
    >
      <div className="absolute hidden lg:block lg:left-[0px] lg:top-[80px] xl:left-[0px] xl:top-[60px] 2xl:left-[0px] 2xl:top-[30px] z-[-1] ">
        <img
          src={img1}
          alt=""
          className="lg:w-[130px] lg:h-[130px] xl:w-[160px] xl:h-[160px] 2xl:w-[190px] 2xl:h-[190px] "
        />
      </div>
      <div className="absolute hidden lg:block  lg:right-[0px] lg:top-[20px] xl:right-[0px] xl:top-[30px] 2xl:right-[0px] 2xl:top-[20px] z-[-1]">
        <img
          src={img2}
          alt=""
          className="lg:w-[70px] lg:h-[180px] xl:w-[80px] xl:h-[190px] 2xl:w-[90px] 2xl:h-[200px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[50px] lg:bottom-[-20px] xl:right-[50px] xl:bottom-[-23px] 2xl:right-[50px] 2xl:bottom-[-25px] z-[-1]">
        <img
          src={img3}
          alt=""
          className="lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] 2xl:w-[120px] 2xl:h-[120px] "
        />
      </div>
      <section className="main-company-feature-section w-full lg:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-[24px] z-10">
        {features.map((item, index) => (
          <div
            key={index}
            className=" bg-white/10 rounded-[8px] w-full flex flex-col justify-center items-center"
            style={{
              padding: " 28px",
            }}
          >
            <h4 className=" text-[26px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-[300] text-[#00B207]">
              {item.count}
            </h4>
            <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-[400] text-[#FFFFFF]">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CompanyFeature;
