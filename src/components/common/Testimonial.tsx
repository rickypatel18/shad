import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import avatar from "../../assets/images/testimonial/Image.png";
import vector from "../../assets/images/testimonial/Vector.png";
import { CiStar } from "react-icons/ci";

const Testimonial = () => {
  return (
    <div className="w-full flex justify-center bg-gradient-to-t from-[#F2F5F3] via-[#F2F5F3]/44 to-white/70">
      <div
        className="w-full lg:w-[80%] mx-auto "
        style={{ margin: "70px 0px" }}
      >
        <div className="flex justify-between items-center ">
          <div className="flex flex-col leading-tight">
            <h4 className="text-[16px] font-[400] text-[#00B207] font-segoe">
              Testimonial
            </h4>
            <h3 className="text-[40px] font-[600] leading-none">
              Client Testimonials
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex justify-between w-20 sm:w-22 md:w-24 lg:w-28">
              <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full items-center justify-center">
                <GoArrowLeft className=" w-4 h-4 lg:w-5 lg:h-5 " />
              </div>
              <div className="flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#00B207] rounded-full items-center justify-center">
                <GoArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-[24px] "
          style={{ marginTop: "50px" }}
        >
          <div
            className="flex flex-col bg-white rounded-[8px] gap-[16px]"
            style={{
              boxShadow: "0px 10px 20px 0px #00000003",
              padding: "24px",
            }}
          >
            <div className="text-start">
              <img src={vector} alt="" className="" />
            </div>
            <p className="text-[14px] font-[400] text-[#4D4D4D] text-start">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-[12px]">
                <img src={avatar} alt="" className="rounded-full w-12" />
                <div className="flex flex-col">
                  <p className="font-[500] text-[16px] ">Robert Fox</p>
                  <p className="text-[14px] font-[400] text-[#999999]">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex">
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col bg-white rounded-[8px] gap-[16px]"
            style={{
              boxShadow: "0px 10px 20px 0px #00000003",
              padding: "24px",
            }}
          >
            <div className="text-start">
              <img src={vector} alt="" className="" />
            </div>
            <p className="text-[14px] font-[400] text-[#4D4D4D] text-start">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-[12px]">
                <img src={avatar} alt="" className="rounded-full w-12" />
                <div className="flex flex-col">
                  <p className="font-[500] text-[16px] ">Robert Fox</p>
                  <p className="text-[14px] font-[400] text-[#999999]">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex">
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col bg-white rounded-[8px] gap-[16px]"
            style={{
              boxShadow: "0px 10px 20px 0px #00000003",
              padding: "24px",
            }}
          >
            <div className="text-start">
              <img src={vector} alt="" className="" />
            </div>
            <p className="text-[14px] font-[400] text-[#4D4D4D] text-start">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-[12px]">
                <img src={avatar} alt="" className="rounded-full w-12" />
                <div className="flex flex-col">
                  <p className="font-[500] text-[16px] ">Robert Fox</p>
                  <p className="text-[14px] font-[400] text-[#999999]">
                    Customer
                  </p>
                </div>
              </div>
              <div className="flex">
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />{" "}
                <CiStar className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;