import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousal/carousel";

import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";
import img1 from "../../assets/images/carousal/carousal-img.png";

const slides = [
  {
    image: img1,
    title: "Organic Food",
    subtitle: "Welcome to Shopery",
    description: "Free shipping on all your orders. We deliver, you enjoy.",
  },
  {
    image: img1,
    title: "Fresh Vegetables",
    subtitle: "Best Quality Products",
    description: "Fresh from farm to your table. Healthy and organic.",
  },
  {
    image: img1,
    title: "Healthy Lifestyle",
    subtitle: "Eat Fresh, Stay Fit",
    description: "100% organic food for a better life.",
  },
];

export function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="w-full overflow-hidden bg-[#F2F2F2] pb-10 lg:pb-[150px] flex justify-center">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="p-6 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-6">
                  {/* Image Section with Red Background */}
                  <div className="lg:col-span-3 flex justify-center p-4 rounded-lg ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2">
                    <h6 className="text-primary  uppercase mb-2">
                      {slide.subtitle}
                    </h6>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 text-lg">{slide.description}</p>

                    <Button
                      className={cn(
                        "mt-5 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full flex items-center gap-2"
                      )}
                    >
                      Shop Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Previous & Next Controls */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2" />
        </Carousel>
      </div>
    </section>
  );
}
