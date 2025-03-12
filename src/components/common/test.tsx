import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import avatar from "../../assets/images/testimonial/Image.png";

const testimonials = [
  {
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.",
    name: "Robert Fox",
    role: "Customer1",
    avatar: avatar,
  },
  {
    text: "Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.",
    name: "Jane Doe",
    role: "Customer2",
    avatar: avatar,
  },
  {
    text: "Donec sed neque eget.",
    name: "John Smith",
    role: "Customer3",
    avatar: avatar,
  },
  {
    text: "New testimonial text here.",
    name: "Alice Johnson",
    role: "Customer4",
    avatar: avatar,
  },
  {
    text: "Another testimonial text here.",
    name: "Bob Brown",
    role: "Customer5",
    avatar: avatar,
  },
  {
    text: "Donec sed neque eget.",
    name: "John Smith",
    role: "Customer6",
    avatar: avatar,
  },
  {
    text: "New testimonial text here.",
    name: "Alice Johnson",
    role: "Customer7",
    avatar: avatar,
  },
  {
    text: "Another testimonial text here.",
    name: "Bob Brown",
    role: "Customer8",
    avatar: avatar,
  },
  {
    text: "Another testimonial text here.",
    name: "Bob Brown",
    role: "Customer9",
    avatar: avatar,
  },
];
// Custom Hook for Responsive Cards
const useResponsiveCards = () => {
  const [cardsPerRow, setCardsPerRow] = useState(3);

  const updateCardsPerRow = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerRow(3); // Desktop (3 cards)
    } else if (window.innerWidth >= 768) {
      setCardsPerRow(2); // Tablet (2 cards)
    } else {
      setCardsPerRow(1); // Mobile (1 card)
    }
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  return cardsPerRow;
};

const Testimonial = () => {
  const cardsPerRow = useResponsiveCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - cardsPerRow));
  };

  const handleRightClick = () => {
    let newIndex = currentIndex + cardsPerRow;

    if (newIndex >= testimonials.length) {
      newIndex = testimonials.length - cardsPerRow;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex justify-center bg-gradient-to-t from-[#F2F5F3] to-white relative overflow-hidden">
      <div className="w-full lg:w-[80%] mx-auto" style={{ margin: "70px 0px" }}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col leading-tight">
            <h4 className="text-[16px] font-[400] text-[#00B207]">
              Testimonial
            </h4>
            <h3 className="text-[40px] font-[600] leading-none">
              Client Testimonials
            </h3>
          </div>
          <div className="flex space-x-2">
            <button
              className={`w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleLeftClick}
              disabled={currentIndex === 0}
            >
              <GoArrowLeft className="w-5 h-5" />
            </button>
            <button
              className={`w-10 h-10 bg-[#00B207] rounded-full flex items-center justify-center ${
                currentIndex >= testimonials.length - cardsPerRow
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleRightClick}
              disabled={currentIndex >= testimonials.length - cardsPerRow}
            >
              <GoArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center mt-10 border">
          <div
            className={`grid gap-6 ${
              cardsPerRow === 3 ? "grid-cols-3" : "grid-cols-2"
            }`}
          >
            {testimonials
              .slice(currentIndex, currentIndex + cardsPerRow)
              .map((testimonial, index) => (
                <div
                  className="flex flex-col bg-white rounded-[8px] gap-[16px]"
                  key={index}
                  style={{
                    boxShadow: "0px 10px 20px 0px #00000003",
                    padding: "24px",
                  }}
                >
                  <div className="text-start">
                    <img src={`testimonial.vector`} alt="" className="" />
                  </div>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#4D4D4D] text-start">
                    {testimonial.text}
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-[12px]">
                      <img src={avatar} alt="" className="rounded-full w-12" />
                      <div className="flex flex-col">
                        <p className="font-[500] text-[14px] md:text-[15px] lg:text-[16px]">
                          {testimonial.name}
                        </p>
                        <p className="text-[12px] md:text-[13px] lg:text-[14px] font-[400] text-[#999999]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                      <CiStar className="w-[20px] h-[20px]" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
