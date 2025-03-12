import avatar from "../../assets/images/testimonial/Image.png";
import vector from "../../assets/images/testimonial/Vector.png";
import img1 from "../../assets/images/leaf/testimonial/3 8.png";
import img2 from "../../assets/images/leaf/testimonial/Group 12.png";
import img3 from "../../assets/images/leaf/testimonial/growth-close-up-environmental-lush-natural 6.png";

import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const testimonials = [
  {
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.",
    name: "Robert Fox",
    role: "Customer1",
    avatar: avatar,
  },
  {
    text: "Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    name: "Jane Doe",
    role: "Customer2",
    avatar: avatar,
  },
  {
    text: "Donec sed neque eget.",
    name: "John Smith",
    role: "Customer3",
    avatar: avatar,
  },
  {
    text: "New testimonial text here.",
    name: "Alice Johnson",
    role: "Customer4",
    avatar: avatar,
  },
  {
    text: "Another testimonial text here.",
    name: "Bob Brown",
    role: "Customer5",
    avatar: avatar,
  },
  {
    text: "Donec sed neque eget.",
    name: "John Smith",
    role: "Customer6",
    avatar: avatar,
  },
  {
    text: "New testimonial text here.",
    name: "Alice Johnson",
    role: "Customer7",
    avatar: avatar,
  },
  {
    text: "Another testimonial text here.",
    name: "Bob Brown",
    role: "Customer8",
    avatar: avatar,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 6));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 3
        ? testimonials.length - 3
        : prevIndex + 3
    );
  };

  return (
    <div
      className="w-full flex justify-center bg-gradient-to-t from-[#F2F5F3] via-[#F2F5F3]/44 to-white/70 relative overflow-visible z-[20] "
      
    >
      <div className="absolute hidden lg:block lg:left-[5%] lg:bottom-[-12%] xl:left-[5%] xl:bottom-[-13%] 2xl:left-[5%] 2xl:bottom-[-14%] z-[-1] ">
        <img
          src={img1}
          alt=""
          className="lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] 2xl:w-[120px] 2xl:h-[120px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[1%] lg:top-[3%]  xl:right-[1%] xl:top-[4%]  2xl:right-[1%] 2xl:top-[5%] z-[-1] ">
        <img
          src={img2}
          alt=""
          className="lg:w-[85px] lg:h-[185px] xl:w-[90px] xl:h-[190px] 2xl:w-[100px] 2xl:h-[200px] "
        />
      </div>

      <div
        className="w-full lg:w-[80%] mx-auto  relative z-[20]"
        style={{ margin: "70px 0px" }}
      >
        <div className="flex justify-between items-center">
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
              <div
                className={`flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gray-200 rounded-full items-center justify-center ${
                  currentIndex <= 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={currentIndex > 0 ? handleLeftClick : undefined}
              >
                <GoArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <div
                className={`flex w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#00B207] rounded-full items-center justify-center ${
                  currentIndex >= testimonials.length - 3
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={
                  currentIndex < testimonials.length - 3
                    ? handleRightClick
                    : undefined
                }
              >
                <GoArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full flex justify-center  relative z-[20]"
          style={{ marginTop: "40px" }}
        >
          <div className="absolute hidden lg:block  lg:right-[-5%] lg:top-[-10%] xl:right-[-4%] xl:top-[-25%] 2xl:right-[-3%] 2xl:top-[-25%] z-[-1] ">
            <img
              src={img3}
              alt=""
              className="lg:w-[80px] lg:h-[80px] xl:w-[85px] xl:h-[85px] 2xl:w-[90px] 2xl:h-[90px] "
            />
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[24px] ">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <div
                  className="flex flex-col bg-white rounded-[8px] gap-[16px]"
                  key={index}
                  style={{
                    boxShadow: "0px 10px 20px 0px #00000003",
                    padding: "24px",
                  }}
                >
                  <div className="text-start">
                    <img src={vector} alt="" className="" />
                  </div>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#4D4D4D] text-start">
                    {testimonial.text}
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-[12px]">
                      <img src={avatar} alt="" className="rounded-full w-12" />
                      <div className="flex flex-col">
                        <p className="font-[500] text-[14px] md:text-[15px] lg:text-[16px]">
                          {testimonial.name}
                        </p>
                        <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
