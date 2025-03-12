import img1 from "../../../assets/images/carousal/carousal-logo-img/Group (2).png";
import img2 from "../../../assets/images/carousal/carousal-logo-img/Vector (1).png";
import img3 from "../../../assets/images/carousal/carousal-logo-img/Vector.png";
import img4 from "../../../assets/images/carousal/carousal-logo-img/bookoff-corporation-logo.png";
import img5 from "../../../assets/images/carousal/carousal-logo-img/food.png";
import img6 from "../../../assets/images/carousal/carousal-logo-img/mango-1.png";
import line from "../../../assets/images/carousal/carousal-logo-img/Line 9.png";
import img_1 from "../../../assets/images/leaf/Group 4-contact.png";

const Carousal = () => {
  return (
    <div
      className="w-full flex justify-center relative z-[20]  overflow-hidden "
    >
      <div className="absolute hidden lg:block lg:right-[-15px] lg:top-[-15px] xl:right-[-15px] xl:top-[-15px] 2xl:right-[0px] 2xl:top-[-15px] z-[-1] ">
        <img
          src={img_1}
          alt=""
          className="lg:h-[130px] lg:w-[130px] xl:h-[140px] xl:w-[140px] 2xl:h-[150px] 2xl:w-[150px] "
        />
      </div>
      <div className="overflow-x-auto carousal whitespace-nowrap w-[100%] lg:w-[80%] ">
        <div
          className="flex items-center justify-between gap-8 lg:gap-10 "
          style={{ padding: "70px 0px" }}
        >
          {/* <!-- Image 1 --> */}
          <img src={img1} alt="Image 1" className="max-w-[120px] h-auto mr-2" />
          <img src={line} alt="Divider" className="max-w-[50px] mr-2" />

          {/* <!-- Image 2 --> */}
          <img src={img2} alt="Image 2" className="max-w-[120px] h-auto mr-2" />
          <img src={line} alt="Divider" className="max-w-[50px] mr-2" />

          {/* <!-- Image 3 --> */}
          <img src={img3} alt="Image 3" className="max-w-[120px] h-auto mr-2" />
          <img src={line} alt="Divider" className="max-w-[50px] mr-2" />

          {/* <!-- Image 4 --> */}
          <img src={img4} alt="Image 4" className="max-w-[120px] h-auto mr-2" />
          <img src={line} alt="Divider" className="max-w-[50px] mr-2" />

          {/* <!-- Image 5 --> */}
          <img src={img5} alt="Image 5" className="max-w-[120px] h-auto mr-2" />
          <img src={line} alt="Divider" className="max-w-[50px] mr-2" />

          {/* <!-- Image 6 (No Divider after last image) --> */}
          <img src={img6} alt="Image 6" className="max-w-[120px] h-auto" />
        </div>
        {/* contact us */}
      </div>
    </div>
  );
};

export default Carousal;
