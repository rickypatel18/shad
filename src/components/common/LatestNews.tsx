import img1 from "../../assets/images/latestnews/Image.png";
import img2 from "../../assets/images/latestnews/Image (1).png";
import img3 from "../../assets/images/latestnews/Image (2).png";

import img_1 from "../../assets/images/leaf/latestnews/Group 1.png";
import img_2 from "../../assets/images/leaf/latestnews/Group 10.png";
import img_3 from "../../assets/images/leaf/latestnews/Group 3.png";
import img_4 from "../../assets/images/leaf/latestnews/Group 4.png";
import img_5 from "../../assets/images/leaf/latestnews/Group 6.png";
import img_6 from "../../assets/images/leaf/latestnews/Group 7.png";
import img_7 from "../../assets/images/leaf/latestnews/Vector (2).png";
import img_8 from "../../assets/images/leaf/latestnews/Vector (3).png";
import img_9 from "../../assets/images/leaf/latestnews/Vector (4).png";
import img_10 from "../../assets/images/leaf/latestnews/Vector (5).png";
import img_11 from "../../assets/images/leaf/latestnews/Vector (6).png";
import img_12 from "../../assets/images/leaf/latestnews/Vector (7).png";
import img_13 from "../../assets/images/leaf/latestnews/Vector (8).png";

import { CiUser } from "react-icons/ci";
import { FiTag } from "react-icons/fi";
import { GoArrowRight, GoComment } from "react-icons/go";

const LatestNews = () => {
  const latestNews = [
    {
      id: 1,
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      date: "23",
      month: "July",
      author: "Admin",
      category: "Food",
      comments: "65 Comments",
      image: img1, // Replace with actual image URL
    },
    {
      id: 2,
      title: "Sed ut perspiciatis unde omnis iste natus error sit.",
      date: "10",
      month: "June",
      author: "Admin",
      category: "Health",
      comments: "42 Comments",
      image: img2,
    },
    {
      id: 3,
      title: "Sed ut perspiciatis unde omnis iste natus error sit.",
      date: "10",
      month: "June",
      author: "Admin",
      category: "Health",
      comments: "42 Comments",
      image: img3,
    },
  ];

  return (
    <section
      className="w-[100%]  bg-[#F2F2F2] flex justify-center  z-[20] relative overflow-hidden "
      style={{ padding: "70px 0px" }}
    >
      <div className="absolute hidden lg:block lg:left-[100px] lg:top-[0px] xl:left-[120px] 2xl:left-[150px] z-[-1] ">
        <img
          src={img_1}
          alt=""
          className="lg:w-[180px] lg:h-[180px] xl:w-[190px] xl:h-[200px] 2xl:w-[200px] 2xl:h-[230px] "
        />
      </div>
      <div className="absolute hidden lg:block  lg:left-[0px] lg:top-[15%] xl:right-[0px] xl:top-[12%] 2xl:right-[0px] 2xl:top-[10%] z-[-1] ">
        <img
          src={img_2}
          alt=""
          className="lg:w-[80px] lg:h-[130px] xl:w-[90px] xl:h-[140px] 2xl:w-[100px] 2xl:h-[150px] "
        />
      </div>
      <div className="absolute hidden lg:block  lg:left-[40px] lg:bottom-[30%] xl:left-[60px] xl:bottom-[25%] 2xl:left-[80px] 2xl:bottom-[20%] z-[-1] ">
        <img
          src={img_4}
          alt=""
          className="lg:w-[120px] lg:h-[120px] xl:w-[130px] xl:h-[130px] 2xl:w-[140px] 2xl:h-[140px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[0px] lg:bottom-[45%] xl:left-[0px] xl:bottom-[40%] 2xl:left-[0px] 2xl:bottom-[35%] z-[-1] ">
        <img
          src={img_5}
          alt=""
          className="lg:w-[80px] lg:h-[160px] xl:w-[85px] xl:h-[170px] 2xl:w-[90px] 2xl:h-[180px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[0px] lg:bottom-[0%] xl:left-[0px] xl:bottom-[0%] 2xl:left-[0px] 2xl:bottom-[0%] z-[-1]  ">
        <img
          src={img_6}
          alt=""
          className="lg:w-[95px] lg:h-[35px] xl:w-[100px] xl:h-[38px] 2xl:w-[100px] 2xl:h-[40px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[0%] lg:top-[0%] xl:left-[0%] xl:top-[0%] 2xl:left-[0%] 2xl:top-[0%] z-[-1]  ">
        <img
          src={img_7}
          alt=""
          className="lg:w-[130px] lg:h-[70px] xl:w-[135px] xl:h-[70px] 2xl:w-[140px] 2xl:h-[70px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[1%] lg:bottom-[5%] xl:left-[2%] xl:bottom-[5%] 2xl:left-[3%] 2xl:bottom-[5%] z-[-1] ">
        <img
          src={img_8}
          alt=""
          className="lg:w-[120px] lg:h-[120px] xl:w-[130px] xl:h-[130px] 2xl:w-[140px] 2xl:h-[140px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[15%] lg:top-[0%] xl:right-[13%] xl:top-[0%] 2xl:right-[11%] 2xl:top-[0%] z-[-1]  ">
        <img
          src={img_9}
          alt=""
          className="lg:w-[100px] lg:h-[170px] xl:w-[105px] xl:h-[170px] 2xl:w-[110px] 2xl:h-[170px] "
        />
      </div>
      <div className="absolute hidden lg:block  lg:right-[2%] lg:top-[0%] xl:right-[2%] xl:top-[0%] 2xl:right-[2%] 2xl:top-[0%] z-[-1] ">
        <img
          src={img_10}
          alt=""
          className="lg:w-[130px] lg:h-[130px] xl:w-[140px] xl:h-[140px] 2xl:w-[150px] 2xl:h-[150px] "
        />
      </div>
      <div className="absolute hidden lg:block   lg:right-[0%] lg:top-[0%] xl:right-[0%] xl:top-[0%] 2xl:right-[0%] 2xl:top-[0%] z-[-1] ">
        <img
          src={img_11}
          alt=""
          className="lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px] "
        />
      </div>
      <div className="absolute hidden  lg:block  lg:right-[5px] lg:bottom-[20%] xl:right-[5px] xl:bottom-[20%] 2xl:right-[5px] 2xl:bottom-[20%] z-[-1] ">
        <img
          src={img_12}
          alt=""
          className="lg:w-[110px] lg:h-[220px] xl:w-[120px] xl:h-[230px] 2xl:w-[130px] 2xl:h-[240px] "
        />
      </div>
      <div className="absolute hidden  lg:block  lg:right-[2%] lg:bottom-[4%] xl:right-[2%] xl:bottom-[4%] 2xl:right-[2%] 2xl:bottom-[4%] z-[-1] ">
        <img
          src={img_13}
          alt=""
          className="lg:w-[180px] lg:h-[120px] xl:w-[190px] xl:h-[120px] 2xl:w-[200px] 2xl:h-[120px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[10px] lg:top-[23%] xl:right-[10px] xl:top-[23%] 2xl:right-[10px] 2xl:top-[23%] z-[-1] ">
        <img
          src={img_3}
          alt=""
          className="lg:w-[200px] lg:h-[100px] xl:w-[210px] xl:h-[110px] 2xl:w-[220px] 2xl:h-[120px] "
        />
      </div>

      <section className="lg:w-[80%] ">
        <div className="flex flex-col justify-center items-center leading-none">
          <p className="text-primary text-[16px] font-[400] font-segoe">Blog</p>
          <h3 className="text-[40px] font-[600]  ">Latest News</h3>
        </div>

        <section
          className="latest-news-cards-section  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-7 xl:gap-8 "
          style={{ marginTop: "40px" }}
        >
          {latestNews.map((post) => (
           <div key={post.id} className="bg-white rounded-[8px] relative group">
           <img
             alt={post.title}
             className="w-full h-80 object-cover rounded-tl-[8px] rounded-tr-[8px]"
             src={post.image}
           />
         
           <div className="absolute top-[240px] left-[30px] bg-white rounded w-13 h-13 flex flex-col items-center justify-center">
             <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
               {post.date}
             </span>
             <span className="text-[12px] font-[500] text-[#808080]">
               {post.month}
             </span>
           </div>
         
           <div className="flex flex-col gap-[20px] p-[20px]" style={{padding:"20px"}}>
             <div className="flex flex-col gap-[8px]">
               <div className="flex flex-wrap gap-[16px]">
                 <div className="flex items-center gap-[4px] text-[13px] lg:text-[14px] font-[400] text-[#4D4D4D]">
                   <CiUser className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                   <p>By {post.author}</p>
                 </div>
                 <div className="flex items-center gap-[4px] text-[13px] lg:text-[14px] font-[400] text-[#4D4D4D]">
                   <FiTag className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                   <p>{post.category}</p>
                 </div>
                 <div className="flex items-center gap-[4px] text-[13px] lg:text-[14px] font-[400] text-[#4D4D4D]">
                   <GoComment className="w-4 h-4 md:w-5 md:h-5 text-[#4D4D4D]" />
                   <p>{post.comments}</p>
                 </div>
               </div>
         
               {/* Targeting the title color on parent hover */}
               <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-black group-hover:text-[#2C742F] transition-colors duration-300">
                 {post.title}
               </h4>
             </div>
         
             <button className="flex items-center gap-[15px] text-[#00B207]">
               <p className="text-[14px] md:text-[15px] lg:text-[16px] font-[600]">
                 Read More
               </p>
               <GoArrowRight className="w-5 h-5 text-primary" />
             </button>
           </div>
         </div>
         
          ))}
        </section>
      </section>
    </section>
  );
};

export default LatestNews;
