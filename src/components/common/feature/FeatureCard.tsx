import { LuHeadset } from "react-icons/lu";
import { BsBox, BsTruck } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const FeatureCard = () => {
  return (
    <section className="feature-section w-full mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-[24px] justify-center items-stretch text-center mx-2 md:mx-[0px]  shadow-[0px_0.5px_0px_#CCCCCC]">
        {/* <!-- Feature Card --> */}

        <div
          className="group flex flex-col items-center text-center gap-[16px] h-full relative 
               after:block after:content-[''] after:absolute after:bottom-0 after:left-1/2 
               after:w-0 after:h-[2px] after:bg-[#1A1A1A] after:transition-all after:duration-300 
               group-hover:after:w-full group-hover:after:left-0"
          style={{ padding: "40px" }}
        >
          {/* Image Container */}
          <div className="relative flex justify-center items-center w-[80px] h-[90px] mb-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/09df/5f7d/6a4719982b1d015b74597372ef23faaf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jKpGwobgLuMzqh15H6XliZjX66gp4jXXEyjV~n0hYaDKFnbQ0aS8kDeo-ypL726fkE~6bd47svB551WzXt6JOqVojeRw2O0DbBtCH-AgtU8HrX6Q4xrZuADjJUWpjMiq~GTYLD6dELWfV8MD~kta8eeP62GS7gKrv5hM~K5TUFyvgt2fpceorhbdByLeJjU8o-IBB5XDiKbCTLAEKaxIKm-htlZLxqy7pPsMk6JS2gVNU84Sc0qZQHbEOg0ZSyLRFaZkk91eshMJs-6~i3iuhw0JlvnKT6N1IM1BA2FMdfeb8xa2NOplKvFWPUw1Ac3Y8w8ovPnQXOb3aAlHINRQlg__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3fce/5320/41a3a48a86ffeaf37c4550b4095f9bb2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PzUiB8Y2VV6R7en0L6N3Ze-KR4KNJNslV6WV0tQxmyyKMU1CQyWhqUac56psmVUiiQ~mp2k0DvqLu6lMWVHV5L-nXqLdBNdA8SEUhxG-UkjopU5R1NhYBwfrJ9ZErxJ7QYoHYiMir1OKIKe2E08O~RNnE~0~GvZgRBXCG5vBOQvcK1GoKvuNlC6j1bizGtfdLoIu971RUp0RkQDhTJ21PxphWEt7QUmaYvhZbyXl23CI4s3tHXINpHuh2myh7mPV3Q2Mh25mle6m2y-jZqnP9veYobm3rGCFDoGh1ulMiBX~iT2gQOJGrmkDRd09PU8ZeaZx6gAzHatnYdRvcYho0g__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            {/* Icon stays visible, but changes to red on hover */}
            <BsBox className="absolute h-[32px] w-[32px] z-50 text-primary group-hover:text-red-500 transition-colors duration-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Text Content */}
          <div className="text-left flex flex-col gap-2 flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] text-[#1A1A1A]">
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
              src="https://s3-alpha-sig.figma.com/img/09df/5f7d/6a4719982b1d015b74597372ef23faaf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jKpGwobgLuMzqh15H6XliZjX66gp4jXXEyjV~n0hYaDKFnbQ0aS8kDeo-ypL726fkE~6bd47svB551WzXt6JOqVojeRw2O0DbBtCH-AgtU8HrX6Q4xrZuADjJUWpjMiq~GTYLD6dELWfV8MD~kta8eeP62GS7gKrv5hM~K5TUFyvgt2fpceorhbdByLeJjU8o-IBB5XDiKbCTLAEKaxIKm-htlZLxqy7pPsMk6JS2gVNU84Sc0qZQHbEOg0ZSyLRFaZkk91eshMJs-6~i3iuhw0JlvnKT6N1IM1BA2FMdfeb8xa2NOplKvFWPUw1Ac3Y8w8ovPnQXOb3aAlHINRQlg__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3fce/5320/41a3a48a86ffeaf37c4550b4095f9bb2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PzUiB8Y2VV6R7en0L6N3Ze-KR4KNJNslV6WV0tQxmyyKMU1CQyWhqUac56psmVUiiQ~mp2k0DvqLu6lMWVHV5L-nXqLdBNdA8SEUhxG-UkjopU5R1NhYBwfrJ9ZErxJ7QYoHYiMir1OKIKe2E08O~RNnE~0~GvZgRBXCG5vBOQvcK1GoKvuNlC6j1bizGtfdLoIu971RUp0RkQDhTJ21PxphWEt7QUmaYvhZbyXl23CI4s3tHXINpHuh2myh7mPV3Q2Mh25mle6m2y-jZqnP9veYobm3rGCFDoGh1ulMiBX~iT2gQOJGrmkDRd09PU8ZeaZx6gAzHatnYdRvcYho0g__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <HiOutlineShoppingBag className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] text-[#1A1A1A]">
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
              src="https://s3-alpha-sig.figma.com/img/09df/5f7d/6a4719982b1d015b74597372ef23faaf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jKpGwobgLuMzqh15H6XliZjX66gp4jXXEyjV~n0hYaDKFnbQ0aS8kDeo-ypL726fkE~6bd47svB551WzXt6JOqVojeRw2O0DbBtCH-AgtU8HrX6Q4xrZuADjJUWpjMiq~GTYLD6dELWfV8MD~kta8eeP62GS7gKrv5hM~K5TUFyvgt2fpceorhbdByLeJjU8o-IBB5XDiKbCTLAEKaxIKm-htlZLxqy7pPsMk6JS2gVNU84Sc0qZQHbEOg0ZSyLRFaZkk91eshMJs-6~i3iuhw0JlvnKT6N1IM1BA2FMdfeb8xa2NOplKvFWPUw1Ac3Y8w8ovPnQXOb3aAlHINRQlg__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3fce/5320/41a3a48a86ffeaf37c4550b4095f9bb2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PzUiB8Y2VV6R7en0L6N3Ze-KR4KNJNslV6WV0tQxmyyKMU1CQyWhqUac56psmVUiiQ~mp2k0DvqLu6lMWVHV5L-nXqLdBNdA8SEUhxG-UkjopU5R1NhYBwfrJ9ZErxJ7QYoHYiMir1OKIKe2E08O~RNnE~0~GvZgRBXCG5vBOQvcK1GoKvuNlC6j1bizGtfdLoIu971RUp0RkQDhTJ21PxphWEt7QUmaYvhZbyXl23CI4s3tHXINpHuh2myh7mPV3Q2Mh25mle6m2y-jZqnP9veYobm3rGCFDoGh1ulMiBX~iT2gQOJGrmkDRd09PU8ZeaZx6gAzHatnYdRvcYho0g__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <LuHeadset className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] text-[#1A1A1A]">
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
              src="https://s3-alpha-sig.figma.com/img/09df/5f7d/6a4719982b1d015b74597372ef23faaf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jKpGwobgLuMzqh15H6XliZjX66gp4jXXEyjV~n0hYaDKFnbQ0aS8kDeo-ypL726fkE~6bd47svB551WzXt6JOqVojeRw2O0DbBtCH-AgtU8HrX6Q4xrZuADjJUWpjMiq~GTYLD6dELWfV8MD~kta8eeP62GS7gKrv5hM~K5TUFyvgt2fpceorhbdByLeJjU8o-IBB5XDiKbCTLAEKaxIKm-htlZLxqy7pPsMk6JS2gVNU84Sc0qZQHbEOg0ZSyLRFaZkk91eshMJs-6~i3iuhw0JlvnKT6N1IM1BA2FMdfeb8xa2NOplKvFWPUw1Ac3Y8w8ovPnQXOb3aAlHINRQlg__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/3fce/5320/41a3a48a86ffeaf37c4550b4095f9bb2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PzUiB8Y2VV6R7en0L6N3Ze-KR4KNJNslV6WV0tQxmyyKMU1CQyWhqUac56psmVUiiQ~mp2k0DvqLu6lMWVHV5L-nXqLdBNdA8SEUhxG-UkjopU5R1NhYBwfrJ9ZErxJ7QYoHYiMir1OKIKe2E08O~RNnE~0~GvZgRBXCG5vBOQvcK1GoKvuNlC6j1bizGtfdLoIu971RUp0RkQDhTJ21PxphWEt7QUmaYvhZbyXl23CI4s3tHXINpHuh2myh7mPV3Q2Mh25mle6m2y-jZqnP9veYobm3rGCFDoGh1ulMiBX~iT2gQOJGrmkDRd09PU8ZeaZx6gAzHatnYdRvcYho0g__"
              alt=""
              className="absolute inset-0 w-[80px] z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            />
            <BsTruck className="absolute h-[32px] w-[32px] z-50 text-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="text-left flex flex-col gap-2  flex-grow">
            <h3 className="text-[16px] md:text-[18px] text-center font-[600] text-[#1A1A1A]">
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
