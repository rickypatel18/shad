import logo from "../../assets/images/logo/logo-img.png"; 

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-[8px]">
        <img
          src={logo}
          alt="logo"
          className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]"
        />

        <h2 className="ml-[5px] md:ml-2 text-[20px] md:text-[32px] text-black font-[500] ">
          Ecobazar
        </h2>
      </div>
    </div>
  );
};

export default Logo;
