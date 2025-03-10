import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
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

const slides = [
  {
    image: img1,
    title: "Organic Food",
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect); // ✅ Proper cleanup function
    };
  }, [embla]);

  return (
    <section className="w-full overflow-hidden bg-[#F2F2F2] flex justify-center ">
      <div className="container mx-auto ">
        <Carousel
          plugins={[plugin.current]}
          className="relative"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
          ref={emblaRef}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center ">
                  <div className="md:col-span-2 lg:col-span-3 flex justify-center ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="md:w-[700px] md:h-[500px] lg:w-[700px] lg:h-[500px]  "
                    />
                  </div>

                  <div className=" lg:col-span-2 text-center items-center md:items-start md:text-left flex flex-col gap-[5px] md:gap-[15px] justify-center h-full">
                    <h6 className="text-primary text-[14px] font-[500] uppercase">
                      {slide.subtitle}
                    </h6>
                    <h2 className=" text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] font-[600]  leading-none">
                      {slide.title}
                    </h2>
                    <div>
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

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => embla && embla.scrollTo(index)}
                className={`w-3 h-3 rounded-full ${
                  index === selectedIndex ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-whitec rounded-full p-2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-whitec rounded-full p-2" />
        </Carousel>
      </div>
    </section>
  );
}
