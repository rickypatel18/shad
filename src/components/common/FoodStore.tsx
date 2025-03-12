import image from "../../assets/images/categoryimage/Image.png";
import image1 from "../../assets/images/categoryimage/Image (1).png";
import img1 from "../../assets/images/leaf/Vector (2).png";
import img2 from "../../assets/images/leaf/Vector (3).png";
import img3 from "../../assets/images/leaf/Image.png";
import img4 from "../../assets/images/leaf/Group (3).png";
import img5 from "../../assets/images/leaf/lif.png";

import { IoMdCheckmark } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import CustomButton from "../custom/CustomButton";

const FoodStore = () => {
  return (
    <div
      className="w-full flex justify-center relative z-[5]"
      style={{ padding: "70px 0px" }}
    >
      <div className="absolute hidden lg:block lg:left-[0px] lg:top-[0px] xl:left-[0px] xl:top-[0px] 2xl:left-[0px] 2xl:top-[0px] z-[-1] ">
        <img
          src={img4}
          alt=""
          className="lg:h-[260px] lg:w-[200px] xl:h-[280px] xl:w-[220px] 2xl:h-[300px] 2xl:w-[250px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[30px] lg:bottom-[50px] xl:left-[30px] xl:bottom-[50px] 2xl:left-[30px] 2xl:bottom-[50px]">
        <img src={img1} alt="" className="h-[120px] w-[120px] " />
      </div>
      <div className="absolute hidden lg:block lg:right-[80px] lg:bottom-[0px] xl:right-[80px] xl:bottom-[0px] 2xl:right-[80px] 2xl:bottom-[0px]">
        <img
          src={img5}
          alt=""
          className="lg:h-[90px] lg:w-[35px] xl:h-[95px] xl:w-[40px] 2xl:h-[100px] 2xl:w-[40px]"
        />
      </div>
      <div className="absolute hidden lg:block  lg:right-[5px] lg:top-[100px] xl:right-[10px] xl:top-[100px] 2xl:right-[20px] 2xl:top-[100px] z-[-1] ">
        <img
          src={img2}
          alt=""
          className="lg:h-[220px] lg:w-[130px] xl:h-[240px] xl:w-[140px] 2xl:h-[250px] 2xl:w-[150px]"
        />
      </div>

      <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-[60%_40%]  lg:grid-cols-[60%_40%] gap-[18px] md:gap-[20px] lg:gap-[23px] xl:gap-[26px] ">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] overflow-visible  w-full max-w-full  ">
          <div className="relative overflow-visible  ">
            <div className="absolute hidden 2xl:block lg:left-[-50px] lg:bottom-[100px] xl:left-[-50px] xl:bottom-[60px] 2xl:left-[-50px] 2xl:bottom-[20px]">
              <img src={img3} alt="" className="2xl:h-[100px] 2xl:w-[100px]" />
            </div>
            <img
              src={image}
              alt="Food Image 1"
              className="w-full h-[350px] lg:h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="">
            <img
              src={image1}
              alt="Food Image 2"
              className="w-full h-[350px] lg:h-[457px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 lg:gap-[26px] w-full">
          <h3 className="font-[600] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight">
            100% Trusted Organic Food Store
          </h3>

          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-[2px]">
                <div className="flex w-6 h-6 bg-[#00B207] items-center justify-center rounded-full">
                  <IoMdCheckmark className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h4 className="text-[16px] md:text-[18px] font-[500]">
                  Healthy & natural food for lovers of healthy food.
                </h4>
                <p className="text-[12px] md:text-[14px] font-[400] text-[#808080]">
                  Ut quis tempus erat. Phasellus euismod bibendum magna non
                  tristique. Pellentesque semper vestibulum elit sed
                  condimentum. Nunc pretium fermentum interdum.
                </p>
              </div>
            </div>
          ))}

          <CustomButton text="Shop Now">
            <GoArrowRight className="w-5 h-5 text-white" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FoodStore;
