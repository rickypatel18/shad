import productimage1 from "../../../assets/images/product/Image.png";
import img1 from "../../../assets/images/leaf/Group 6.png";
import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";

const FeatureProductCard = () => {
  return (
    <section className="w-full mx-auto flex justify-center relative">
      <div className="absolute hidden lg:block lg:left-[-30px] xl:left-[-20px] 2xl:left-[0px] bottom-[-30px]">
        <img src={img1} alt="" className="h-[400px] lg:w-[100px] xl:w-[110px] 2xl:w-[120px]" />
      </div>
      <section className="main-feature-product-section w-full lg:w-[80%] mx-auto  ">
        <div
          className="w-[100%] flex justify-between items-center  "
          style={{ margin: "50px 0px 30px 0px" }}
        >
          <div className="">
            <h3 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[600] leading-none">
              Featured Products
            </h3>
          </div>

          <div className="flex  items-center gap-1 lg:gap-2 text-primary ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-[500] ">
              View All
            </p>
            <GoArrowRight className="w-[13px] h-[13px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] " />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] md:gap-[10px] lg:gap-[15px] xl:gap-[20px]">
          {/* product card */}
          <div className=" border border-[#E6E6E6] md:p-4">
            <div>
              <img
                src={productimage1}
                alt="Product"
                className="w-[400px] h-[300px] object-contain rounded-lg"
              />
            </div>
            <div
              className="flex justify-between w-[100%] items-center"
              style={{ padding: "15px" }}
            >
              <div className="flex flex-col items-start justify-center">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                  Green Apple
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                  $14.99
                </p>
                <div className="flex ">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
              <div className="flex w-[35px] h-[35px] sm:w[50px] sm:h-[50px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
              </div>
            </div>
          </div>
          <div className=" border border-[#E6E6E6] md:p-4">
            <div>
              <img
                src={productimage1}
                alt="Product"
                className="w-[400px] h-[300px] object-contain rounded-lg"
              />
            </div>
            <div
              className="flex justify-between w-[100%] items-center"
              style={{ padding: "15px" }}
            >
              <div className="flex flex-col items-start justify-center">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                  Green Apple
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                  $14.99
                </p>
                <div className="flex ">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
              <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
              </div>
            </div>
          </div>
          <div className=" border border-[#E6E6E6] md:p-4">
            <div>
              <img
                src={productimage1}
                alt="Product"
                className="w-[400px] h-[300px] object-contain rounded-lg"
              />
            </div>
            <div
              className="flex justify-between w-[100%] items-center"
              style={{ padding: "15px" }}
            >
              <div className="flex flex-col items-start justify-center">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                  Green Apple
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                  $14.99
                </p>
                <div className="flex ">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
              <div className="flex w-[35px] h-[35px] sm:w[50px] sm:h-[50px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
              </div>
            </div>
          </div>
          <div className=" border border-[#E6E6E6] md:p-4">
            <div>
              <img
                src={productimage1}
                alt="Product"
                className="w-[400px] h-[300px] object-contain rounded-lg"
              />
            </div>
            <div
              className="flex justify-between w-[100%] items-center"
              style={{ padding: "15px" }}
            >
              <div className="flex flex-col items-start justify-center">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                  Green Apple
                </p>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                  $14.99
                </p>
                <div className="flex ">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>
              <div className="flex w-[35px] h-[35px] sm:w[50px] sm:h-[50px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureProductCard;
