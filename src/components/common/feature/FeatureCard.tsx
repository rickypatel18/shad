import { LuHeadset } from "react-icons/lu";
import { BsBox, BsTruck } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import inc_n from "../../../assets/images/incomplete/incomplete-normal.png";
import inc_h from "../../../assets/images/incomplete/incomplete-hovered.png";

const FeatureCard = () => {
  return (
    <section className="feature-section w-full mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-[24px] justify-center items-stretch text-center  shadow-[0px_0.5px_0px_#CCCCCC]">
        {/* <!-- Feature Card --> */}

        <div
          className="group flex flex-col items-center text-center gap-[16px] h-full "
          style={{ padding: "40px" }}
        >
          {/* Image Container */}
          <div className="relative flex justify-center items-center w-[80px] h-[90px] mb-2">
            <img
              src={inc_n}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src={inc_h}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            {/* Icon stays visible, but changes to red on hover */}
            <BsBox className="absolute h-[32px] w-[32px] z-50 text-primary group-hover:text-red-500 transition-colors duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Text Content */}
          <div className="text-left flex flex-col gap-2 flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] ">
              Free Shipping on Product
            </h3>
            <p className="text-[12px] md:text-[14px] text-center font-[400] text-[#999999]">
              Free shipping with discount
            </p>
          </div>
        </div>

        <div
          className="group flex flex-col items-center text-center gap-[16px] h-full "
          style={{ padding: "40px" }}
        >
          <div className="relative flex justify-center items-center  w-[80px] h-[90px]  mb-2">
            <img
              src={inc_n}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src={inc_h}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <HiOutlineShoppingBag className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] ">
              Great Support 24/7
            </h3>
            <p className="text-[12px] md:text-[14px]  text-center  font-[400] text-[#999999]">
              Instant access to Contact and more
            </p>
          </div>
        </div>

        <div
          className="group flex flex-col text-center items-center  gap-[16px] "
          style={{ padding: "40px" }}
        >
          <div className="relative flex justify-center items-center  w-[80px] h-[90px]  mb-2">
            <img
              src={inc_n}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src={inc_h}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <LuHeadset className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] ">
              100% Secure Payment
            </h3>
            <p className="text-[12px] md:text-[14px] text-center font-[400] text-[#999999]">
              We ensure your money is safe
            </p>
          </div>
        </div>

        <div
          className="group flex flex-col items-center text-center gap-[16px] h-full "
          style={{ padding: "40px" }}
        >
          <div className="relative flex justify-center items-center  w-[80px] h-[90px]  mb-2">
            <img
              src={inc_n}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src={inc_h}
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <BsTruck className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] ">
              Money-Back Guarantee
            </h3>
            <p className="text-[12px] md:text-[14px] text-center font-[400] text-[#999999]">
              30 days money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
