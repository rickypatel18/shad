import { GoArrowRight } from "react-icons/go";
import img1 from "../../assets/images/banner/Image.png";
import img2 from "../../assets/images/banner/Image2.png";
import { CustomBadge } from "../custom/Badge";
import colon from "../../assets/images/banner/_.png";
import CustomButton from "../custom/CustomButton";

const Banner = () => {
  return (
    <div
      className=" w-[90%]  sm:w-[80%] md:w-[100%] lg:w-[90%] xl:w-[80%]"
      style={{ padding: "70px 0px" }}
    >
      <section className="main-banner-section grid grid-cols-1 md:grid-cols-2 gap-[24px] ">
        <div
          className="w-full h-[250px] md:h-[280px] lg:h-[310px] xl:h-[340px] bg-cover bg-center bg-no-repeat flex items-center"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div
            className="flex flex-col gap-[24px] "
            style={{ paddingLeft: "40px" }}
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
          className="w-full h-[250px] md:h-[280px] lg:h-[310px] xl:h-[340px] bg-cover bg-center bg-no-repeat flex items-center"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div
            className="flex flex-col gap-[24px] "
            style={{ paddingLeft: "40px" }}
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
                <div className="flex w-full justify-start gap-[8px]">
                  <div className="w-[40px] h-[40px]  flex flex-col items-center justify-center">
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
              <CustomButton text="Shop Now" >
                <GoArrowRight className="w-5 h-5 text-primary" />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
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
