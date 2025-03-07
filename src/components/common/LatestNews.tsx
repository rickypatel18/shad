import img1 from "../../assets/images/latestnews/Image.png";
import img2 from "../../assets/images/latestnews/Image (1).png";
import img3 from "../../assets/images/latestnews/Image (2).png";
import { CiUser } from "react-icons/ci";
import { FiTag } from "react-icons/fi";
import { GoArrowRight, GoComment } from "react-icons/go";

const LatestNews = () => {
  return (
    <section
      className="w-[100%]  bg-[#F2F2F2] flex justify-center"
      style={{ padding: "70px 0px" }}
    >
      <section className="lg:w-[80%]">
        <div className="flex flex-col justify-center items-center leading-none">
          <p className="text-primary text-[16px] font-[400]">Blog</p>
          <h3 className="text-[40px] font-[600] text-[#1A1A1A] ">
            Latest News
          </h3>
        </div>

        <section
          className="latest-news-cards-section  grid grid-cols-1 md:grid-cols-3 gap-8 "
          style={{ marginTop: "40px" }}
        >
          <div className="bg-white rounded-[8px] relative">
            <img
              alt="Sliced oranges on a blue background"
              className="w-full h-80 object-cover rounded-tl-[8px] rounded-tr-[8px] "
              src={img2}
            />

            <div className="absolute top-[240px] left-[30px] bg-white text-black rounded w-13 h-13 flex flex-col items-center justify-center">
              <span className="text-[20px] font-[500] ">23</span>
              <span className="text-[12px] font-[500] text-[#808080]">
                July
              </span>
            </div>
            <div
              className="flex flex-col gap-[20px] "
              style={{ padding: "20px" }}
            >
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-wrap gap-[16px]">
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <CiUser className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>By Admin</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <FiTag className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>Food</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <GoComment className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>65 Comments</p>
                  </div>
                </div>
                <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#1A1A1A] hover:text-[#2C742F]">
                  Curabitur porttitor orci eget neque accumsan venenatis.
                </h4>
              </div>
              <button className="flex px-38px items-center gap-[15px] bg-[red-500] text-[#00B207]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[600]">
                  Read More
                </p>
                <GoArrowRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[8px] relative">
            <img
              alt="Sliced oranges on a blue background"
              className="w-full h-80 object-cover rounded-tl-[8px] rounded-tr-[8px] "
              src={img3}
            />

            <div className="absolute top-[240px]  left-[30px] bg-white text-black rounded w-13 h-13 flex flex-col items-center justify-center">
              <span className="text-[20px] font-[500] ">23</span>
              <span className="text-[12px] font-[500] text-[#808080]">
                July
              </span>
            </div>
            <div
              className="flex flex-col gap-[20px] "
              style={{ padding: "20px" }}
            >
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-wrap gap-[16px]">
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <CiUser className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>By Admin</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <FiTag className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>Food</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <GoComment className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>65 Comments</p>
                  </div>
                </div>
                <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#1A1A1A] hover:text-[#2C742F]">
                  Curabitur porttitor orci eget neque accumsan venenatis.
                </h4>
              </div>
              <button className="flex px-38px items-center gap-[15px] bg-[red-500] text-[#00B207]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[600]">
                  Read More
                </p>
                <GoArrowRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-[8px] relative">
            <img
              alt="Sliced oranges on a blue background"
              className="w-full h-80 object-cover rounded-tl-[8px] rounded-tr-[8px] "
              src={img1}
            />

            <div className="absolute top-[240px]  left-[30px] bg-white text-black rounded w-13 h-13 flex flex-col items-center justify-center">
              <span className="text-[20px] font-[500] ">23</span>
              <span className="text-[12px] font-[500] text-[#808080]">
                July
              </span>
            </div>
            <div
              className="flex flex-col gap-[20px] "
              style={{ padding: "20px" }}
            >
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-wrap gap-[16px]">
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <CiUser className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>By Admin</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <FiTag className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>Food</p>
                  </div>
                  <div className="flex justify-center items-center gap-[4px] text-[14px] font-[400] text-[#4D4D4D]">
                    <GoComment className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                    <p>65 Comments</p>
                  </div>
                </div>
                <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#1A1A1A] hover:text-[#2C742F]">
                  Curabitur porttitor orci eget neque accumsan venenatis.
                </h4>
              </div>
              <button className="flex px-38px items-center gap-[15px] bg-[red-500] text-[#00B207]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[600]">
                  Read More
                </p>
                <GoArrowRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default LatestNews;
