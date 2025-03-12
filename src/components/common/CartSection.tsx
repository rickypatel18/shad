import { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { HiMenu, HiOutlineShoppingBag, HiX } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import "../../js/search.js"
const CartSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between gap-[20px] xl:gap-[40px] h-[34px] md:justify-between mt-0 ">
      {/* Phone Section */}
      <div className="flex items-center justify-center h-[56px] gap-[8px]">
        <FiPhoneCall className="h-[24px] w-[24px]" />
        <p className="hidden xl:block text-[14px] font-[500] leading-none ml-2 ">
          (219) 555-0114
        </p>
      </div>

      {/* Icons */}
      <div className="flex flex-row gap-[20px]">
        <LuSearch className="h-[24px] w-[24px]" id="search-id"/>
        <div
          id="search-dropdown"
          className="fixed top-[-50vh] left-0 w-full h-[30vh] bg-white shadow-lg border border-gray-300 opacity-0 scale-100 transition-all duration-300 ease-in-out pointer-events-none flex items-center justify-center overflow-x-auto"
        >
          <div className="relative w-[90%] max-w-[400px]">
            <div className="absolute top-[-60px] right-2">
              <i
                id="search-close"
                className="fa-solid fa-xmark text-2xl cursor-pointer"
              ></i>
            </div>

            <p className="text-black font-[500] text-2xl mb-5">
              What are you looking for?
            </p>

            <div className="flex items-center w-full border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                className="w-full p-2 text-lg outline-none"
                placeholder="Search..."
              />
              <button className="bg-[#00b207] text-white px-4 py-[10px]">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <FaRegHeart className="h-[24px] w-[24px]" />

        {/* Cart */}
        <div className="relative">
          <HiOutlineShoppingBag className="h-[24px] w-[24px]" />
          <span className="absolute top-[-5px] left-[12px] md:top-[-6px] md:left-[10px] bg-[#2c742f] text-whitec rounded-full w-[15px] h-[15px] md:w-[17px] md:h-[17px] text-[11px] flex items-center justify-center">
            9
          </span>
        </div>

        <FaRegUser className="h-[22px] w-[24px]" />

        {/* Hamburger Menu */}
        <div className="relative z-50 block lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`fixed top-0 right-0 w-[75vw] h-screen bg-whitec shadow-lg transition-all duration-300 ease-in-out 
                        ${
                          menuOpen
                            ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                            : "opacity-0 scale-95 translate-x-5 pointer-events-none"
                        }`}
          >
            {/* Close Button */}
            <div className="flex justify-end px-6 pt-4">
              <button onClick={toggleMenu}>
                <HiX className="text-2xl cursor-pointer" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition cursor-pointer border-b">
                <a href="#">Home</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition cursor-pointer border-b">
                <a href="#">Shop</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition cursor-pointer border-b">
                <a href="#">Pages</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition cursor-pointer border-b">
                <a href="#">More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
