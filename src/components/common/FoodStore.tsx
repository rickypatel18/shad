import image from "../../assets/images/categoryimage/Image.png";
import image1 from "../../assets/images/categoryimage/Image (1).png";
import { IoMdCheckmark } from "react-icons/io";
import Button from "../custom/Button";
import { GoArrowRight } from "react-icons/go";

const FoodStore = () => {
    return (
        <div className="w-full border flex justify-center">
            <div className="w-[80%] mx-auto  flex gap-[50px]">
                <div className="flex gap-[24px]">
                    <div>
                        <img
                            src={image}
                            alt=""
                            className="h-auto w-[500px] object-cover"
                        />
                    </div>
                    <div>
                        <img src={image1} alt="" className=" w-[844px] object-cover" />
                    </div>
                </div>

                <div className="flex flex-col gap-[30px] border">
                    <div>
                        <h3 className="font-[600] text-[40px] leading-none">
                            100% Trusted Organic Food Store
                        </h3>
                    </div>
                    <div className="flex gap-[12px]">
                        <div className="flex w-[35px] h-[35px] sm:w[50px] sm:h-[50px] md:w-[50px] md:h-[25px] bg-[red] items-center justify-center rounded-full">
                            <IoMdCheckmark className="w-[19px] h-[19px] sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px]" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h4 className="text-[18px] font-[500]">
                                Healthy & natural food for lovers of healthy food.
                            </h4>
                            <p className="text-[14px] font-[400] text-[#808080]">
                                Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
                                Pellentesque semper vestibulum elit sed condimentum. Nunc pretium
                                fermentum interdum.
                            </p>
                        </div>
                    </div>


                    <div className="flex  gap-[12px]">
                        <div>
                            <IoMdCheckmark className="[bg-[#00B207]" />
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h4 className="text-[18px] font-[500] ">
                                Healthy & natural food for lovers of healthy food.
                            </h4>
                            <p className="text-[14px] font-[400] text-[#808080]">
                                Ut quis tempus erat. Phasellus euismod bibendum magna non
                                tristique. Pellentesque semper vestibulum elit sed
                                condimentum. Nunc pretium fermentum interdum.{" "}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Button>
                            Shop Now
                            <GoArrowRight className="w-[20px] h-[20px] text-whitec" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodStore;
