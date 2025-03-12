import { CiStar } from "react-icons/ci";
import productimage1 from "../../assets/images/product/Image.png";
import bspimg from "../../assets/images/product/best-seller-product-image.png";
import img1 from "../../assets/images/leaf/Group 10.png";
import img2 from "../../assets/images/leaf/1 902.png";
import img3 from "../../assets/images/leaf/growth-close-up-environmental-lush-natural 5.png";
import img4 from "../../assets/images/leaf/Group 2-bs.png";
import img5 from "../../assets/images/leaf/Group 1-bs.png";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import CustomButton from "../custom/CustomButton";

const BestSellerProductCard = () => {
  return (
    <section
      className="w-full flex justify-center relative "
    >
      <div className="absolute hidden lg:block lg:left-[0px] lg:top-[50%] xl:left-[0px] xl:top-[50%] 2xl:left-[0px] 2xl:top-[50%]">
        <img
          src={img1}
          alt=""
          className="lg:w-[80px] lg:h-[140px] xl:w-[90px] xl:h-[150px] 2xl:w-[100px] 2xl:h-[160px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[50px] lg:top-[60%] xl:left-[60px] xl:top-[60%] 2xl:left-[80px] 2xl:top-[60%]">
        <img
          src={img2}
          alt=""
          className="lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] 2xl:w-[90px] 2xl:h-[90px] "
        />
      </div>

      <div className="absolute hidden lg:block lg:left-[-20px] lg:top-[10px] xl:left-[-20px] xl:top-[20px] 2xl:left-[-20px] 2xl:top-[0px]">
        <img
          src={img4}
          alt=""
          className="lg:w-[130px] lg:h-[130px] xl:w-[150px] xl:h-[150px] 2xl:w-[170px] 2xl:h-[170px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[0px] lg:top-[50%] xl:right-[0px] xl:top-[50%] 2xl:right-[0px] 2xl:top-[50%]">
        <img
          src={img5}
          alt=""
          className="lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] 2xl:w-[140px] 2xl:h-[140px] "
        />
      </div>
      <section
        className="main-bestseller-product-section w-[100%] lg:w-[80%] justify-center mx-auto "
        style={{ paddingBottom: "70px" }}
      >
        <div
          className="flex justify-between items-center"
          style={{ margin: "50px 0px 30px 0px" }}
        >
          <div className="">
            <h3 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[600] leading-none">
              Best Seller Products
            </h3>
          </div>

          <div className="flex  items-center gap-1 lg:gap-2 text-primary ">
            <p className="text-[13px] md:text-[15px] lg:text-[16px] font-[500] ">
              View All
            </p>
            <GoArrowRight className="w-[13px] h-[13px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] " />
          </div>
        </div>

        <div className="flex flex-col gap-[35px]">
          {/* product-cols-5 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[5px] md:gap-[10px] lg:gap-[14px] xl:gap-[18px] 2xl:gap-[20px]">
            {/* product card */}
            <div className=" border border-[#E6E6E6] rounded-[6px] md:p-4 ">
              <div className="">
                <img
                  src={productimage1}
                  alt="Product"
                  className="w-[400px] h-[240px] lg:w-[400px] lg:h-[260px] xl:w-[400px] xl:h-[280px] 2xl:w-[400px] 2xl:h-[300px] object-contain rounded-lg"
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
                <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                  <HiOutlineShoppingBag className="w-[19px] h-[19px]  md:w-[25px] md:h-[25px]" />
                </div>
              </div>
            </div>
            <div className=" border border-[#E6E6E6] rounded-[6px] md:p-4 ">
              <div className="">
                <img
                  src={productimage1}
                  alt="Product"
                  className="w-[400px] h-[240px] lg:w-[400px] lg:h-[260px] xl:w-[400px] xl:h-[280px] 2xl:w-[400px] 2xl:h-[300px] object-contain rounded-lg"
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
                <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                  <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
                </div>
              </div>
            </div>
            <div className=" border border-[#E6E6E6] rounded-[6px] md:p-4 ">
              <div className="">
                <img
                  src={productimage1}
                  alt="Product"
                  className="w-[400px] h-[240px] lg:w-[400px] lg:h-[260px] xl:w-[400px] xl:h-[280px] 2xl:w-[400px] 2xl:h-[300px] object-contain rounded-lg"
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
                <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                  <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
                </div>
              </div>
            </div>
            <div className=" border border-[#E6E6E6] rounded-[6px] md:p-4 ">
              <div className="">
                <img
                  src={productimage1}
                  alt="Product"
                  className="w-[400px] h-[240px] lg:w-[400px] lg:h-[260px] xl:w-[400px] xl:h-[280px] 2xl:w-[400px] 2xl:h-[300px] object-contain rounded-lg"
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
                <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                  <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
                </div>
              </div>
            </div>
            <div className=" border border-[#E6E6E6] rounded-[6px] md:p-4 ">
              <div className="">
                <img
                  src={productimage1}
                  alt="Product"
                  className="w-[400px] h-[240px] lg:w-[400px] lg:h-[260px] xl:w-[400px] xl:h-[280px] 2xl:w-[400px] 2xl:h-[300px] object-contain rounded-lg"
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
                <div className="flex w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#f2f2f2] items-center justify-center rounded-full">
                  <HiOutlineShoppingBag className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
                </div>
              </div>
            </div>
          </div>

          {/* cols-4 */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[5px] md:gap-[10px] lg:gap-[15px] xl:gap-[22px] 2xl:gap-[24px]">
            {/* product card */}

            <section className="w-full sm:w-full grid grid-cols-1 gap-[16px]">
              <div className=" ">
                <h4 className="text-[24px] font-[500] flex">Hot Deals</h4>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full grid grid-cols-1 gap-[16px]">
              <div className=" ">
                <h4 className="text-[24px] font-[500] flex">Hot Deals</h4>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full grid grid-cols-1 gap-[16px]">
              <div className=" ">
                <h4 className="text-[24px] font-[500] flex">Hot Deals</h4>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
              <div className=" flex border border-[#E6E6E6] rounded-[6px] w-full  items-center">
                <div className="shrink-0">
                  <img
                    src={productimage1}
                    alt="Product"
                    className="w-[100px] h-[100px] object-cover rounded-lg "
                  />
                </div>

                {/* Text Section - No Extra Gaps */}
                <div
                  className="flex flex-col items-start justify-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[400] text-[#2B572E]">
                    Green Apple
                  </p>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-[500]">
                    $14.99
                  </p>
                  <div className="flex">
                    <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex justify-center relative">
              <section
                className="relative w-[300px] sm:w-full h-auto rounded-[6px] bg-no-repeat bg-cover bg-center min-h-[400px] flex justify-center "
                style={{ backgroundImage: `url(${bspimg})` }}
              >
                {/* Background Absolute Div */}
                <div className="absolute hidden lg:block lg:right-[-40px] lg:bottom-[-10px] xl:right-[-50px] xl:bottom-[-10px] 2xl:right-[-60px] 2xl:bottom-[-10px] z-[-1]">
                  <img
                    src={img3}
                    alt=""
                    className="lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] opacity-90"
                  />
                </div>

                {/* Main Content (Ensures it stays above) */}
                <div
                  className=" flex flex-col gap-[20px] justify-start items-center text-center z-[10] "
                  style={{ marginTop: "30px" }}
                >
                  <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[10px] md:text-[11px] lg:text-[12px] font-[500] uppercase">
                        Hot Sale
                      </p>
                      <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-[600] leading-none">
                        Save 37% on Every Order
                      </h3>
                    </div>
                  </div>
                  <div>
                    <CustomButton
                      text="Shop Now"
                      bgColor="bg-white"
                      textColor="text-primary"
                      hoverTextColor="hover:text-blackc"
                      hoverBgColor="hover:bg-[#E5E5E5]"
                    >
                      <GoArrowRight className="w-5 h-5 text-primary" />
                    </CustomButton>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BestSellerProductCard;
