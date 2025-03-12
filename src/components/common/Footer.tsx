import Logo from "./Logo";
import appstore from "../../assets/images/footer/download/Icon=app-store 1.png";
import playstore from "../../assets/images/footer/download/Icon=google-play 1.png";
import appleCard from "../../assets/images/footer/payment/Method=ApplePay.png";
import cartCard from "../../assets/images/footer/payment/Cart.png";
import masterCard from "../../assets/images/footer/payment/Method=Mastercard.png";
import visaCard from "../../assets/images/footer/payment/Method=Visa.png";
import discoverCard from "../../assets/images/footer/payment/Method=Discover.png";
import "../../assets/css/footer.css";
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
    <div className="  main-footer-section w-full bg-[#1a1a1a] flex justify-center relative z-[20] " >
      <div className="absolute hidden lg:block lg:left-[0%] lg:top-[0%] xl:left-[0%] xl:top-[0%] 2xl:left-[0%] 2xl:top-[0%] z-[-1]">
        <img
          src={img2}
          alt=""
          className=" lg:h-[400px] lg:w-[300px] xl:h-[350px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[250px] "
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[12%] lg:top-[0%] xl:right-[10%] xl:top-[0%] 2xl:right-[10%] 2xl:top-[0%] z-[-1] ">
        <img
          src={img3}
          alt=""
          className="lg:h-[130px] lg:w-[75px] xl:h-[140px] xl:w-[80px] 2xl:h-[150px] 2xl:w-[80px] "
        />
      </div>
      <div className="absolute hidden lg:block  lg:right-[0%] lg:top-[45%] xl:right-[0%] xl:top-[45%] 2xl:right-[0%] 2xl:top-[45%] z-[-1] ">
        <img
          src={img4}
          alt=""
          className="lg:h-[70px] lg:w-[30px] xl:h-[60px] xl:w-[25px] 2xl:h-[60px] 2xl:w-[25px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[1%] lg:top-[3%] xl:right-[1%] xl:top-[3%] 2xl:right-[1%] 2xl:top-[3%] z-[-1]  ">
        <img
          src={img5}
          alt=""
          className="lg:h-[80px] lg:w-[80px] xl:h-[80px] xl:w-[80px] 2xl:h-[80px] 2xl:w-[80px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[30px] lg:top-[30%] xl:right-[30px] xl:top-[30%] 2xl:right-[30px] 2xl:top-[30%] z-[-1]">
        <img
          src={img6}
          alt=""
          className="lg:h-[90px] lg:w-[90px] xl:h-[90px] xl:w-[90px] 2xl:h-[90px] 2xl:w-[90px]"
        />
      </div>
      <div className="absolute hidden lg:block lg:right-[5%] lg:bottom-[25%] xl:right-[3%] xl:bottom-[25%] 2xl:right-[3%] 2xl:bottom-[25%] z-[-1] ">
        <img
          src={img7}
          alt=""
          className="lg:h-[70px] lg:w-[100px] xl:h-[70px] xl:w-[100px] 2xl:h-[70px] 2xl:w-[100px]"
        />
      </div>
      <section className=" w-full text-white pt-0 lg:pt-[300px] mx-auto flex flex-col justify-center items-center">
        <div className="w-full lg:w-[80%] ">
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-5 md:gap-10  justify-between "
            style={{ margin: "60px 0px 50px 0px" }}
          >
            {/* First div with increased width */}
            <div className="flex flex-col gap-[20px] col-span-2 ">
              <Logo />
              <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
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
            <div className="flex flex-col gap-[20px]  ">
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
            <div className="flex flex-col gap-[20px]  ">
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
            <div className="flex flex-col gap-[20px] ">
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
            <div className="flex flex-col gap-[20px]  col-span-2 ">
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
        </div>

        <div
          className="w-full border-t border-t-[#333333] flex  items-center justify-center gap-[10px] relative z-[10]"
          style={{ padding: "20px 0px" }}
        >
          <div className="w-full lg:w-[80%] flex flex-col items-center justify-center md:flex-row md:justify-between ">
            <div className="absolute hidden lg:block lg:left-[2%] lg:top-[-60%] xl:left-[3%] xl:top-[-60%] 2xl:left-[3%] 2xl:top-[-65%] z-[20] ">
              <img
                src={img1}
                alt=""
                className="lg:h-[70px] lg:w-[60px] xl:h-[70px] xl:w-[60px] 2xl:h-[70px] 2xl:w-[60px]"
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <p className="text-[14px] font-[400] text-[#999999]">
                Ecobazar eCommerce © 2021. All Rights Reserved
              </p>
            </div>
            {/* Payment Icons */}
            <div className="flex gap-[8px] justify-center md:justify-end">
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
        </div>
      </section>
    </div>
  );
};

export default Footer;
