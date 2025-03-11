import Logo from "./Logo";
import appstore from "../../assets/images/footer/download/Icon=app-store 1.png";
import playstore from "../../assets/images/footer/download/Icon=google-play 1.png";
import appleCard from "../../assets/images/footer/payment/Method=ApplePay.png";
import cartCard from "../../assets/images/footer/payment/Cart.png";
import masterCard from "../../assets/images/footer/payment/Method=Mastercard.png";
import visaCard from "../../assets/images/footer/payment/Method=Visa.png";
import discoverCard from "../../assets/images/footer/payment/Method=Discover.png";
import "../../assets/css/footer.css"
import img1 from "../../assets/images/leaf/footer/1 904.png";
import img2 from "../../assets/images/leaf/footer/Group (3).png";
import img3 from "../../assets/images/leaf/footer/Group 5.png";
import img4 from "../../assets/images/leaf/footer/Group 7.png";
import img5 from "../../assets/images/leaf/footer/Vector (2).png";
import img6 from "../../assets/images/leaf/footer/Vector (3).png";
import img7 from "../../assets/images/leaf/footer/Vector (4).png";

import {
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="  main-footer-section w-full bg-[#1a1a1a] flex justify-center border lg:border lg:border-pink-700 xl:border-blue-700 2xl:border-black">
      {/* <div className="absolute hidden lg:block lg:left-[0px] lg:top-[0px] xl:left-[0px] xl:top-[0px] 2xl:left-[0px] 2xl:top-[0px] z-[-1] ">
        <img
          src={img1}
          alt=""
          className="lg:h-[260px] lg:w-[200px] xl:h-[280px] xl:w-[220px] 2xl:h-[300px] 2xl:w-[250px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[30px] lg:bottom-[50px] xl:left-[30px] xl:bottom-[50px] 2xl:left-[30px] 2xl:bottom-[50px]">
        <img src={img2} alt="" className="h-[120px] w-[120px] " />
      </div>
      <div className="absolute hidden lg:block lg:right-[80px] lg:bottom-[0px] xl:right-[80px] xl:bottom-[0px] 2xl:right-[80px] 2xl:bottom-[0px]">
        <img
          src={img3}
          alt=""
          className="lg:h-[90px] lg:w-[35px] xl:h-[95px] xl:w-[40px] 2xl:h-[100px] 2xl:w-[40px]"
        />
      </div>
      <div className="absolute hidden lg:block  lg:right-[5px] lg:top-[100px] xl:right-[10px] xl:top-[100px] 2xl:right-[20px] 2xl:top-[100px] z-[-1] ">
        <img
          src={img4}
          alt=""
          className="lg:h-[220px] lg:w-[130px] xl:h-[240px] xl:w-[140px] 2xl:h-[250px] 2xl:w-[150px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[0px] lg:top-[0px] xl:left-[0px] xl:top-[0px] 2xl:left-[0px] 2xl:top-[0px] z-[-1] ">
        <img
          src={img5}
          alt=""
          className="lg:h-[260px] lg:w-[200px] xl:h-[280px] xl:w-[220px] 2xl:h-[300px] 2xl:w-[250px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:left-[30px] lg:bottom-[50px] xl:left-[30px] xl:bottom-[50px] 2xl:left-[30px] 2xl:bottom-[50px]">
        <img
          src={img6}
          alt=""
          className="lg:h-[90px] lg:w-[35px] xl:h-[95px] xl:w-[40px] 2xl:h-[100px] 2xl:w-[40px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[80px] lg:bottom-[0px] xl:right-[80px] xl:bottom-[0px] 2xl:right-[80px] 2xl:bottom-[0px]">
        <img
          src={img7}
          alt=""
          className="lg:h-[90px] lg:w-[35px] xl:h-[95px] xl:w-[40px] 2xl:h-[100px] 2xl:w-[40px]"
        />
      </div> */}

      <section className=" w-full lg:w-[80%] text-white pt-0 lg:pt-[300px] mx-auto ">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 md:gap-10  justify-between"
          style={{ margin: "70px 0px 50px 0px" }}
        >
          {/* First div with increased width */}
          <div className="flex flex-col gap-[20px]  col-span-2">
            <Logo />
            <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex gap-[8px] text-center  items-center  justify-start">
              <a
                className="flex rounded-[50px] bg-transparent w-[40px] h-[40px] items-center justify-center hover:bg-[#00B207] transition duration-300"
                href=""
              >
                <RiFacebookFill className="fab fa-facebook-f text-[#96B297] hover:text-white text-[18px]" />
              </a>
              <a
                className="flex rounded-[50px] bg-transparent w-[40px] h-[40px] items-center justify-center hover:bg-[#00B207] transition duration-300"
                href=""
              >
                <RiTwitterFill className="fab fa-twitter text-[#96B297] hover:text-white  text-[18px]" />
              </a>
              <a
                className="flex rounded-[50px] bg-transparent w-[40px] h-[40px] items-center justify-center hover:bg-[#00B207] transition duration-300"
                href=""
              >
                <RiPinterestLine className="fab fa-pinterest text-[#96B297] hover:text-white  text-[18px]" />
              </a>
              <a
                className="flex rounded-[50px] bg-transparent w-[40px] h-[40px] items-center justify-center hover:bg-[#00B207] transition duration-300"
                href=""
              >
                <RiInstagramLine className="fab fa-instagram text-[#96B297] hover:text-white text-[18px]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] ">
            <h3 className="helps-title text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#FFFFFF]">
              My Account
            </h3>
            <ul className="flex flex-col gap-2 leading-none lg:leading-normal">
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Order History
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Shopping Cart
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] ">
            <h3 className="helps-title text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#FFFFFF]">
              Helps
            </h3>
            <ul className="flex flex-col gap-2 leading-none lg:leading-normal">
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Terms &amp; Condition
                </a>
              </li>
              <li>
                <a
                  className="hover:underline text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="helps-title text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
              Helps
            </h3>
            <ul className="flex flex-col gap-2 leading-none lg:leading-normal">
              <li>
                <a
                  className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Terms &amp; Condition
                </a>
              </li>
              <li>
                <a
                  className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]"
                  href=""
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[20px]  col-span-2">
            <h3 className="helps-title text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#FFFFFF]">
              Download Mobile App
            </h3>

            <div className="flex flex-wrap gap-[8px] justify-start">
              {/* App Store */}
              <div
                className="flex items-center bg-[#333333] rounded-[4px] gap-[6px]"
                style={{ padding: "15px" }}
              >
                <img
                  className="w-[28px] h-[28px] object-contain"
                  src={appstore}
                  alt="App Store"
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[11px] font-[400] text-[#B3B3B3]">
                    Download on the
                  </p>
                  <h4 className="text-[16px] font-[500] text-white">
                    App Store
                  </h4>
                </div>
              </div>

              {/* Google Play */}
              <div
                className="flex items-center bg-[#333333] rounded-[4px] gap-[6px]"
                style={{ padding: "15px" }}
              >
                <img
                  className="w-[28px] h-[28px] object-contain"
                  src={playstore}
                  alt="Google Play"
                />
                <div className="flex flex-col leading-tight">
                  <p className="text-[11px] font-[400] text-[#B3B3B3]">
                    Download on the
                  </p>
                  <h4 className="text-[16px] font-[500] text-white">
                    Google Play
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-t-[#333333] flex flex-col md:flex-row items-center justify-between gap-[10px]"
          style={{ padding: "15px 0px" }}
        >
          <div>
            <p className="text-[14px] font-[400] text-[#999999]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
          </div>

          <div className="flex gap-[8px]">
            <img
              alt="Apple Pay logo"
              className="h-[29px] w-[39px] object-cover border border-[#1a1a1a]"
              src={appleCard}
            />
            <img
              alt="Visa logo"
              className="h-[29px] w-[39px] object-cover border border-[#1a1a1a]"
              src={discoverCard}
            />
            <img
              alt="Discover logo"
              className="h-[29px] w-[39px] object-cover border border-[#1a1a1a]"
              src={visaCard}
            />
            <img
              alt="MasterCard logo"
              className="h-[29px] w-[39px] object-cover border border-[#1a1a1a]"
              src={masterCard}
            />
            <img
              alt="Secure Payment logo"
              className="h-[29px] w-[39px] object-cover border border-[#1a1a1a]"
              src={cartCard}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
