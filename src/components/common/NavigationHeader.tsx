import CartSection from "./CartSection";
import Logo from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

const NavigationHeader = () => {
  return (
    <div className="flex justify-between w-[80%] h-[78px] items-center ">
      <NavigationLinks />
      <Logo />
      <CartSection />
    </div>
  );
};

export default NavigationHeader;
