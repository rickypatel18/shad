import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const CartSection = () => {
    return (
        <div className="flex items-center justify-between gap-[40px]  h-[34px] md:justify-between mt-0">
            <div className="flex items-center justify-center h-[56px] gap-[8px]">
                <FiPhoneCall className="h-[24px] w-[24px] " />
                <p className="text-[14px] font-[500] leading-none ml-2 text-black">
                    (219) 555-0114
                </p>
            </div>

            <div className="flex flex-row gap-[20px]">
                {/* search icon  */}
                <div>
                    <LuSearch className="h-[24px] w-[24px] " />
                </div>

                {/* Heart Icon  */}
                <div>
                    <FaRegHeart className="h-[24px] w-[24px] " />
                </div>

                {/* Cart  */}
                <div className="relative">
                    <HiOutlineShoppingBag className="h-[24px] w-[24px] " />
                    <span className="absolute border-none top-[1px] left-[15px] md:top-[2px] md:left-[20px] transform -translate-x-1/2 -translate-y-1/2 bg-[#2c742f] text-white rounded-full w-[13px] h-[13px] md:w-[17px] md:h-[17px] text-[11px] flex items-center justify-center text-center align-center">
                        9
                    </span>
                </div>

                {/* User icon */}
                <div>
                    <FaRegUser className="h-[22px] w-[24px] " />
                </div>

                {/* (Hamburger Icon)  */}
                <div className="relative z-50 hidden">
                    <i
                        className="block md: fa-solid fa-bars cursor-pointer text-xl"
                        id="menu-toggle"
                    ></i>

                    {/* Right Dropdown Menu  */}
                    <div
                        id="dropdown-menu"
                        className="fixed top-0 right-0 w-[75vw] h-screen bg-white rounded-lg border border-gray-300 opacity-0 scale-95 translate-x-5 transition-all duration-300 ease-in-out pointer-events-none overflow-y-auto"
                    >
                        {/* Close Button  */}
                        <div className="flex justify-end px-6 pt-4">
                            <i
                                id="menu-close"
                                className="fa-solid fa-xmark text-xl cursor-pointer"
                            ></i>
                        </div>
                        <div>
                            <p className="bg-gray-100 text-center">Navlinks</p>
                        </div>

                        <ul className="py-2">
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-all cursor-pointer border-b">
                                <a href="#">Home</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-all cursor-pointer border-b">
                                <a href="#">Shop</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-all cursor-pointer border-b">
                                <a href="#">Pages</a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-all cursor-pointer border-b">
                                <a href="#">More</a>
                            </li>
                        </ul>

                        <div className="mt-5">
                            <p className="bg-gray-100 text-center">Categories</p>
                        </div>

                        <ul className="py-2 bg-white" id="category-menu">
                            {/* Category 1  */}
                            <li className="relative px-4 py-2 cursor-pointer hover:bg-gray-100 category-item border-b">
                                <span>Electronics</span>
                                <i className="fas fa-chevron-down absolute right-4 top-3 text-gray-400 toggle-icon"></i>
                            </li>
                            <ul className="pl-6  subcategory">
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">
                                    Smartphones
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">
                                    Cameras
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">
                                    Laptops
                                </li>
                            </ul>

                            {/* Category 2  */}
                            <li className="relative px-4 py-2 cursor-pointer hover:bg-gray-100 category-item border-b">
                                <span>Fashion</span>
                                <i className="fas fa-chevron-down absolute right-4 top-3 text-gray-400 toggle-icon"></i>
                            </li>
                            <ul className="pl-6  subcategory">
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">Men</li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">Women</li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">Kids</li>
                            </ul>

                            {/* Category 3  */}
                            <li className="relative px-4 py-2 cursor-pointer hover:bg-gray-100 category-item border-b">
                                <span>Home & Kitchen</span>
                                <i className="fas fa-chevron-down absolute right-4 top-3 text-gray-400 toggle-icon"></i>
                            </li>
                            <ul className="pl-6  subcategory">
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">
                                    Furniture
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">
                                    Appliances
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 border-b">Decor</li>
                            </ul>
                        </ul>
                    </div>

                    {/* Search Dropdown Menu  */}
                    <div
                        id="search-dropdown"
                        className="fixed top-[-50vh] left-0 w-full h-[30vh] bg-white shadow-lg border border-gray-300 opacity-0 scale-100 transition-all duration-300 ease-in-out pointer-events-none flex items-center justify-center overflow-x-auto"
                    >
                        <div className="relative w-[90%] max-w-[400px]">
                            {/* Close Button  */}
                            <div className="absolute top-[-60px] right-2">
                                <i
                                    id="search-close"
                                    className="fa-solid fa-xmark text-2xl cursor-pointer"
                                ></i>
                            </div>
                            {/* paragraph  */}
                            <p className="text-black font-[500] text-2xl mb-5">
                                What are you looking for?
                            </p>

                            {/* Search Input  */}
                            <div className="flex items-center w-full border border-gray-300 rounded-md overflow-hodden">
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
                </div>
            </div>
        </div>
    );
};

export default CartSection;
