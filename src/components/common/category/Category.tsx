import { CategoryCarousal } from "./CategoryCarousal";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../assets/images/leaf/growth-close-up-environmental-lush-natural 4.png";
import img2 from "../../../assets/images/leaf/Group 7.png";
import img3 from "../../../assets/images/leaf/1 903.png";

const Category = () => {
  return (
    <div className="w-full mx-auto flex justify-center items-center flex-col bg-gradient-to-t from-white via-white to-[#F2F2F2] relative z-[10]">
      <div className="absolute hidden lg:block top-[-25px] lg:left-[80px] xl:left-[90px]  2xl:left-[120px] z-[50]">
        <img
          src={img1}
          alt=""
          className="lg:h-[60px] lg:w-[60px] xl:h-[65px] xl:w-[65px] 2xl:h-[70px] 2xl:w-[70px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:bottom-[60px] xl:bottom-[55px] 2xl:bottom-[50px] right-[0px] z-[-1]">
        <img
          src={img2}
          alt=""
          className="lg:h-[90px] lg:w-[80px] xl:h-[100px] xl:w-[100px] 2xl:h-[130px] 2xl:w-[120px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:bottom-[0px] lg:right-[80px] xl:bottom-[-5px] xl:right-[100px] 2xl:bottom-[-10px] 2xl:right-[120px] z-[-1]">
        <img
          src={img3}
          alt=""
          className="lg:w-[80px] lg:h-[80px] xl:w-[85px] xl:h-[85px] 2xl:w-[90px] 2xl:h-[90px]"
        />
      </div>

      {/* for the heading of the category */}
      <div
        className="w-[100%] lg:w-[80%] flex justify-between items-center"
        style={{ margin: "50px 0px 30px 0px" }}
      >
        <div className="">
          <h3 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[600] leading-none">
            Shop by Top Categories
          </h3>
        </div>

        <div className="flex  items-center gap-1 lg:gap-2 text-primary ">
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-[500] ">
            View All
          </p>
          <GoArrowRight className="w-[13px] h-[13px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] " />
        </div>
      </div>
      {/*title ends here */}

      <div className=" w-full mx-auto flex justify-center">
        <div
          className="flex flex-col w-[70%] sm:w-[80%] md:w-[85%] lg:w-[80%] mx-auto justify-center"
          style={{ marginBottom: "70px" }}
        >
          <CategoryCarousal />
        </div>
      </div>
    </div>
  );
};

export default Category;
