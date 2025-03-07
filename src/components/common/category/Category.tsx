
import { CategoryCarousal } from "./CategoryCarousal";
import { GoArrowRight } from "react-icons/go";

const Category = () => {
  return (
    <div
      className="w-full mx-auto flex justify-center items-center flex-col"
      style={{
        backgroundColor: " rgb(255,255,255)",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(242,242,242,1) 60%)",
      }}
    >
      {/* for the heading of the category */}
      <div
        className="w-[100%] lg:w-[80%] flex justify-between items-center "
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
