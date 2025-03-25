import { Card, CardContent } from "@/components/ui/card/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousal/carousel";
import image1 from "../../../assets/images/categoryimage/Vegetable.png";
import image2 from "../../../assets/images/categoryimage/fish 1.png";
import image3 from "../../../assets/images/categoryimage/fruits 1.png";
import image4 from "../../../assets/images/categoryimage/meat 1.png";
import image5 from "../../../assets/images/categoryimage/snacks 1.png";
import image6 from "../../../assets/images/categoryimage/soft-drink 1.png";
import image7 from "../../../assets/images/categoryimage/fruits 1.png";
import image8 from "../../../assets/images/categoryimage/meat 1.png";
import image9 from "../../../assets/images/categoryimage/snacks 1.png";
// import { GoArrowRight } from "react-icons/go";

const items = [
    {
        id: 1,
        img: image1,
        title: "Vegetables",
        description: "165 Products",
    },
    {
        id: 2,
        img: image2,
        title: "Fresh Fruit",
        description: "137 Products",
    },
    {
        id: 3,
        img: image3,
        title: "Fish",
        description: "34 Products",
    },
    {
        id: 4,
        img: image4,
        title: "Meat",
        description: "165 Products",
    },
    {
        id: 5,
        img: image5,
        title: "Water and Drinks",
        description: "48 Products",
    },
    {
        id: 6,
        img: image6,
        title: "Snacks",
        description: "165 Products",
    },
    {
        id: 7,
        img: image7,
        title: "Best Deals",
        description: "Exclusive discounts.",
    },
    {
        id: 8,
        img: image8,
        title: "Fish",
        description: "34 Products",
    },
    {
        id: 9,
        img: image9,
        title: "Meat",
        description: "165 Products",
    },
];

export function CategoryCarousal() {
    return (
        <Carousel className="w-full mx-auto ">
            <CarouselContent className="w-full flex gap-x-4">
                {items.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className=" group pl-1 pr-4 basis-1/3 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 xl:basis-1/6 flex-grow"
                    >
                        <div className="w-full h-full">
                            <Card className="h-full border-[#EDEDED] hover:border-[#2C742F] hover:shadow-[0px_0px_12px_0px_#20B52652] transition-shadow duration-300 bg-[white]">
                                <CardContent
                                    className="flex flex-col items-center justify-between h-full gap-[20px]"
                                    style={{ padding: "30px 0px 10px 0px" }}
                                >
                                    <div>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center gap-[6px] flex-grow">
                                        <h3 className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-center  group-hover:text-[#2C742F] transition duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
