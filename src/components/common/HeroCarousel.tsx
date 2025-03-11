import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousal/carousel";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../assets/images/carousal/carousal-img.png";
import CustomButton from "@/components/custom/CustomButton";
import img2 from "../../assets/images/leaf/Group 2.png";
import img3 from "../../assets/images/leaf/Group 3.png";
import img4 from "../../assets/images/leaf/Group 4.png";
import img5 from "../../assets/images/leaf/Group 5.png";
import img6 from "../../assets/images/leaf/Top.png";
import img7 from "../../assets/images/leaf/growth-close-up-environmental-lush-natural 3.png";
import img8 from "../../assets/images/leaf/Group 1.png";
import img9 from "../../assets/images/leaf/growth-close-up-environmental-lush-natural 2.png";
import img10 from "../../assets/images/leaf/objects 1.png";

const slides = [
  {
    image: img1,
    title: "Fresh & Healthy Organic Food",
    subtitle: "Welcome to Shopery",
    description1: "Sale up to 30% OFF",
    description2: "Free shipping on all your orders. We deliver, you enjoy.",
  },
  {
    image: img1,
    title: "Fresh & Healthy Organic Food",
    subtitle: "Best Quality Products",
    description1: "Sale up to 30% OFF",
    description2: "Fresh from farm to your table. Healthy and organic.",
  },
  {
    image: img1,
    title: "Healthy Lifestyle",
    subtitle: "Eat Fresh, Stay Fit",
    description1: "Sale up to 30% OFF",
    description2: "100% organic food for a better life.",
  },
];

export function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="w-full  bg-[#F2F2F2] flex justify-center  relative overflow-visible z-[10]">
      <div className="abs-div1 absolute hidden lg:block lg:left-[50px] xl:left-[90px] z-[20]">
        <img
          src={img9}
          alt=""
          className="lg:w-[85px] lg:h-[50px] xl:w-[96px] xl:h-[60px]"
        />
      </div>
      <div className="abs-div2 absolute hidden lg:block lg:left-[0px] xl:left-[50px] top-[80px] z-[-1]">
        <img
          src={img3}
          alt=""
          className="lg:w-[150px] lg:h-[130px] xl:w-[170px] xl:h-[150px]"
        />
      </div>
      <div className="abs-div3 absolute hidden lg:block lg:left-[20px] xl:left-[50px] bottom-[50px]  z-[-1]">
        <img
          src={img5}
          alt=""
          className="lg:w-[160px] lg:h-[80px] xl:w-[200px] xl:h-[100px]"
        />
      </div>
      <div className="abs-div4 absolute hidden lg:block lg:right-[0px] lg:top-[0px] xl:right-[0px] xl:top-[0px]  z-[10]">
        <img
          src={img10}
          alt=""
          className="lg:w-[100px] lg:h-[90px] xl:w-[120px] xl:h-[110px]"
        />
      </div>
      <div className="abs-div5 absolute hidden lg:block right-[0px] bottom-[0px]  z-[-1] ">
        <img
          src={img8}
          alt=""
          className="lg:w-[130px] lg:h-[110px] xl:w-[150px] xl:h-[130px]"
        />
      </div>
      <div className="abs-div6 absolute hidden lg:block lg:right-[120px] lg:bottom-[-50px] xl:right-[140px] xl:bottom-[-50px] z-[10] ">
        <img
          src={img6}
          alt=""
          className=" lg:w-[100px] lg:h-[130px] xl:w-[110px] xl:h-[140px]"
        />
      </div>
      <div className="abs-div7 absolute hidden lg:block lg:right-[200px] lg:top-[50px] xl:right-[200px] xl:top-[50px] 2xl:right-[300px] 2xl:top-[50px] z-[-1] ">
        <img
          src={img2}
          alt=""
          className="lg:w-[140px] lg:h-[100px] xl:w-[140px] xl:h-[100px]"
        />
      </div>
      <div className="abs-div8 absolute hidden lg:block  lg:right-[400px] lg:top-[0px] xl:right-[400px] xl:top-[0px] 2xl:right-[600px] 2xl:top-[0px] z-[-1] ">
        <img
          src={img4}
          alt=""
          className=" lg:w-[130px] lg:h-[90px] xl:w-[140px] xl:h-[100px]"
        />
      </div>
      <div
        className="w-[80%] mx-auto  relative z-[20]"
        style={{ paddingBottom: "80px", marginTop: "70px" }}
      >
        <div className="abs-div9 absolute hidden lg:block lg:left-[110px] lg:bottom-[40px] xl:left-[150px] xl:bottom-[20px] z-[25] ">
          <img src={img7} alt="" className="w-[50px] h-[50px]" />
        </div>

        <div>
          <Carousel
            plugins={[plugin.current]}
            className="relative"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center">
                    <div className="md:col-span-2 lg:col-span-3 flex justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="md:w-[700px] md:h-[500px] lg:w-[700px] lg:h-[500px]"
                      />
                    </div>
                    <div className="lg:col-span-2 text-center items-center md:text-left md:items-start   flex flex-col gap-[20px]  justify-center h-full ">
                      <h6 className="text-primary text-[14px] font-[500] uppercase">
                        {slide.subtitle}
                      </h6>
                      <h2 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] font-[600] leading-none">
                        {slide.title}
                      </h2>
                      <div className="flex flex-col gap-[10px]">
                        <h3 className="text-[22px] md:text-[25px] lg:text-[27px] xl:text-[32px] font-[400]">
                          {slide.description1}
                        </h3>
                        <p className="font-[400] text-greyc text-[14px]">
                          {slide.description2}
                        </p>
                      </div>
                      <CustomButton text="Shop Now">
                        <GoArrowRight className="w-5 h-5 text-white" />
                      </CustomButton>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-whitec rounded-full p-2" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-whitec rounded-full p-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
