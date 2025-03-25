import logo from "../../assets/images/logo/logo-img.png";

const Logo = () => {
  return (
    <section >
      <div className="flex items-center gap-[5px  ] md:gap-[8px] " >
        <img
          src={logo}
          alt="logo"
          className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
        />

        <h2 className="text-[20px] md:text-[27px] lg:text-[30px] xl:tex t-[32px] font-[500] ">Ecobazar</h2>
      </div>
    </section>
  );
};

export default Logo;
