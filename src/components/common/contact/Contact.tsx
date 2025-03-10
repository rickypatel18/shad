import { SlLocationPin } from "react-icons/sl";
import { FiMail, FiPhoneCall } from "react-icons/fi";

import inc_n from "../../../assets/images/incomplete/incomplete-normal.png";
import inc_h from "../../../assets/images/incomplete/incomplete-hovered.png";

const Contact = () => {
  return (
    <div
      className=" w-full lg:w-[80%] flex justify-center"
      style={{ marginBottom: "70px" }}
    >
      <div className=" flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto ">
          {/* First div (1 column) */}
          <div
            className="group col-span-1 rounded-[8px] flex flex-col gap-[16px]"
            style={{ border: "1px solid #20B52633", padding: "20px" }}
          >
            <div className="relative flex justify-center items-center w-[56px] h-[60px]">
              {/* Default Image (Hidden on Hover) */}
              <img
                src={inc_n}
                alt=""
                className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Hover Image (Visible on Hover) */}
              <img
                src={inc_h}
                alt=""
                className="absolute inset-0 w-[80px] z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Location Icon (Always Visible & Changes Color on Hover) */}
              <SlLocationPin className="h-[22px] w-[22px] z-20 text-primary transition-colors duration-300 group-hover:!text-white" />
            </div>

            <div className="flex flex-col gap-[10px] w-full break-words whitespace-normal">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase">
                Our Location
              </p>
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#666666]">
                1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
              </p>
            </div>
          </div>

          {/* Second div (1 column) */}
          <div
            className="group col-span-1 rounded-[8px] flex flex-col gap-[16px]"
            style={{ border: "1px solid #20B52633", padding: "20px" }}
          >
            <div className="relative flex justify-center items-center w-[56px] h-[60px]  ">
              <img
                src={inc_n}
                alt=""
                className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
              />

              <img
                src={inc_h}
                alt=""
                className="absolute inset-0 w-[80px] z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              />

              <FiPhoneCall className="h-[22px] w-[22px] z-20 text-primary transition-colors duration-300 group-hover:!text-white " />
            </div>
            <div className="flex flex-col gap-[10px] w-full break-words whitespace-normal">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase ">
                Call Us 24/7
              </p>
              <p className="text-[20px] md:text-[22px] lg:text-[24px] font-[400] text-primary">
                (303) 555-0105
              </p>
            </div>
          </div>

          {/* Third div (2 columns wide) */}
          <div
            className="group col-span-2 rounded-[8px] flex flex-col gap-[16px]"
            style={{ border: "1px solid #20B52633", padding: "20px" }}
          >
            <div className="relative flex justify-center items-center w-[56px] h-[60px]  ">
              <img
                src={inc_n}
                alt=""
                className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
              />

              <img
                src={inc_h}
                alt=""
                className="absolute inset-0 w-[80px] z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
              />

              <FiMail className="h-[22px] w-[22px] z-30 text-primary group-hover:!text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-[10px] w-full break-words whitespace-normal">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[500] uppercase ">
                Subscribe Newsletter
              </p>

              {/* Input + Button container */}
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-[100%] rounded-full outline-none text-[12px] md:text-[13px] lg:text-[14px] font-[400]  placeholder-[#999999] text-[#999999] border border-[#E6E6E6]"
                  style={{ padding: "13px" }}
                  placeholder="Your email address"
                  aria-label="email address"
                />
                <button
                  className="bg-[#00B207] absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full  text-white text-[13px] lg:text-[14px] font-[600]"
                  style={{ padding: "14px 32px" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
