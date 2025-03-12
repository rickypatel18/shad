import { GoArrowRight } from "react-icons/go";
import img1 from "../../assets/images/banner/Image.png";
import img2 from "../../assets/images/banner/Image2.png";

import img_1 from "../../assets/images/leaf/1 84.png";
import img_2 from "../../assets/images/leaf/Group (3)-banner.png";
import img_3 from "../../assets/images/leaf/Group 5-banner.png";

import { CustomBadge } from "../custom/Badge";
import colon from "../../assets/images/banner/_.png";
import CustomButton from "../custom/CustomButton";

const Banner = () => {
  return (
    <div className="w-full flex justify-center  relative overflow-hidden ">
      <div
        className=" w-[100%]  sm:w-[80%] md:w-[100%] lg:w-[90%] xl:w-[80%]   "
        style={{ padding: "70px 0px" }}
      >
        <div className="absolute hidden lg:block lg:right-[10px] lg:bottom-[10px] xl:right-[30px] xl:bottom-[10px] 2xl:right-[40px] 2xl:bottom-[10px] z-[-1]">
          <img
            src={img_1}
            alt=""
            className="lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] "
          />
        </div>
        <div className="absolute hidden lg:block lg:right-[0px] lg:top-[-70px] xl:right-[0px] xl:top-[-70px] 2xl:right-[0px] 2xl:top-[-70px] z-[-1]">
          <img
            src={img_2}
            alt=""
            className="lg:w-[200px] lg:h-[400px] xl:w-[250px] xl:h-[450px] 2xl:w-[300px] 2xl:h-[500px] "
          />
        </div>
        <div className="absolute hidden lg:block lg:left-[10px] lg:top-[40px] xl:left-[10px] xl:top-[40px] 2xl:left-[10px] 2xl:top-[40px] z-[-1]">
          <img
            src={img_3}
            alt=""
            className="lg:w-[140px] lg:h-[80px] xl:w-[150px] xl:h-[90px] 2xl:w-[170px] 2xl:h-[100px] "
          />
        </div>
        <section className="main-banner-section grid grid-cols-1 md:grid-cols-2 gap-[24px] z-30 ">
          <div
            className="w-full min-h-[230px] sm:h-[250px] md:h-[250px] lg:h-[280px] xl:h-[300px] 2xl:h-[330px] bg-cover bg-center bg-no-repeat flex items-center rounded-[10px]"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div
              className="flex flex-col gap-[10px] md:gap-[24px] "
              style={{ paddingLeft: "20px" }}
            >
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <p className=" text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase text-[#FFFFFF]">
                    100% Organic
                  </p>
                  <p className="text-[25px] md:text-[30px] lg:text-[36px] font-[600] text-[#FFFFFF]">
                    Fruit & Vegetable
                  </p>
                </div>
                <div className="flex gap-[8px]">
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#FFFFFF]">
                    Starting at:
                  </p>
                  <CustomBadge
                    text="$11.99"
                    bgColor="bg-[#FF8A00]"
                    textColor="text-white"
                    textSize="text-[16px]"
                    fontWeight="font-[500]"
                  />
                </div>
              </div>
              <div>
                <CustomButton text="Shop Now" hoverBgColor="hover:bg-[#E5E5E5]">
                  <GoArrowRight className="w-5 h-5 text-white" />
                </CustomButton>
              </div>
            </div>
          </div>

          <div  
            className="w-full min-h-[230px] sm:h-[250px] md:h-[250px] lg:h-[280px] xl:h-[300px] 2xl:h-[330px] bg-cover bg-center bg-no-repeat flex items-center rounded-[10px]"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div
              className="flex flex-col gap-[10px] md:gap-[24px]  "
              style={{ paddingLeft: "20px" }}
            >
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase text-[#FFFFFF]">
                    sale off the week
                  </p>
                  <p className="text-[25px] md:text-[30px] lg:text-[36px] font-[600] text-[#FFFFFF]">
                    Sales of the Year
                  </p>
                </div>
                <div className="flex gap-[8px]">
                  <div className="flex w-full justify-start gap-[5px] md:gap-[8px]">
                    <div className="w-[40px] h-[40px] flex flex-col items-center justify-center">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-white">
                        03
                      </p>
                      <p className="text-[10px] md:text-[11px] lg:text-[12px] font-[400] text-white transform uppercase">
                        Days
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={colon} alt="" />
                    </div>
                    <div className="w-[40px] h-[40px]  flex flex-col items-center justify-center">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-white">
                        02
                      </p>
                      <p className="text-[10px] md:text-[11px] lg:text-[12px] font-[400] text-white transform uppercase">
                        Hours
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={colon} alt="" />
                    </div>
                    <div className="w-[40px] h-[40px]  flex flex-col items-center justify-center">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-white">
                        18
                      </p>
                      <p className="text-[10px] md:text-[11px] lg:text-[12px] font-[400] text-white transform uppercase">
                        Mins
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={colon} alt="" />
                    </div>
                    <div className="w-[40px] h-[40px]  flex flex-col items-center justify-center">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-white">
                        46
                      </p>
                      <p className="text-[10px] md:text-[11px] lg:text-[12px] font-[400] text-white transform uppercase">
                        Secs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <CustomButton text="Shop Now">
                  <GoArrowRight className="w-5 h-5 text-primary" />
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <img
  src="default-image.jpg"
  srcset="image-480w.jpg 480w, image-800w.jpg 800w, image-1200w.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
  alt="Example Image"
></img>; */
}
