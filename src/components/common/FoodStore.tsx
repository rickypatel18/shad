import image from "../../assets/images/categoryimage/Image.png";
import image1 from "../../assets/images/categoryimage/Image (1).png";
import { IoMdCheckmark } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import CustomButton from "../custom/CustomButton";

const FoodStore = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-[26px]">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]  w-full max-w-full overflow-hidden">
          <div>
            <img
              src={image}
              alt="Food Image 1"
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-md"
            />
          </div>
          <div>
            <img
              src={image1}
              alt="Food Image 2"
              className="w-full h-[300px] lg:h-[457px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 lg:gap-[26px] w-full">
          <h3 className="font-[600] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] leading-tight">
            100% Trusted Organic Food Store
          </h3>

          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-[2px]">
                <div className="flex w-6 h-6 bg-[#00B207] items-center justify-center rounded-full">
                  <IoMdCheckmark className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h4 className="text-[16px] md:text-[18px] font-[500]">
                  Healthy & natural food for lovers of healthy food.
                </h4>
                <p className="text-[12px] md:text-[14px] font-[400] text-[#808080]">
                  Ut quis tempus erat. Phasellus euismod bibendum magna non
                  tristique. Pellentesque semper vestibulum elit sed
                  condimentum. Nunc pretium fermentum interdum.
                </p>
              </div>
            </div>
          ))}

          <CustomButton
          text="Shop Now"
        >
          <GoArrowRight className="w-5 h-5 text-white" />
        </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FoodStore;
