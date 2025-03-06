import { CiLocationOn } from "react-icons/ci";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select/select";

const TopbarHeader = () => {
    return (
        <section className="signup-section w-[100%] bg-[#EDF2EE]  h-[42px] flex justify-center">
            <div className="w-[100%] lg:w-[80%] flex flex-wrap flex-row justify-between items-center ">
                {/* Store Location Section  */}
                <section className="flex items-center gap-[8px] flex-wrap ">
                    <CiLocationOn className="text-secondary h-[18px] w-[18px] " />
                    <p className="hidden md:block mb-0 text-[12px] font-weight-400 text-secondary">
                        Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </p>
                </section>

                {/*  Right Section (Language, Currency, Sign-in) */}
                <section className="flex items-center gap-[20px] flex-wrap">
                    <div className="flex items-center">
                        <Select>
                            <SelectTrigger className=" border-0 bg-transparent focus:ring-0 text-secondary text-[12px] font-[400] ">
                                <SelectValue
                                    placeholder="Eng"
                                    className="text-[12px] font-[400] "
                                />
                            </SelectTrigger>
                            <SelectContent className="text-secondary text-[12px] font-[400]">
                                <SelectItem value="en" className="text-[12px] font-[400]">
                                    Eng
                                </SelectItem>
                                <SelectItem value="es" className="text-[12px] font-[400]">
                                    हि
                                </SelectItem>
                                <SelectItem value="fr" className="text-[12px] font-[400]">
                                    Fr
                                </SelectItem>
                                <SelectItem value="de" className="text-[12px] font-[400]">
                                    عرب
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center   ">
                        {/* <Select value={language} onValueChange={setLanguage}> */}
                        <Select>
                            <SelectTrigger className=" border-0 bg-transparent focus:ring-0 text-secondary text-[12px] font-[400]">
                                <SelectValue placeholder="USD" />
                            </SelectTrigger>
                            <SelectContent className="text-secondary text-[12px] font-[400]">
                                <SelectItem value="en" className="text-[12px] font-[400]">
                                    USD
                                </SelectItem>
                                <SelectItem value="es" className="text-[12px] font-[400]">
                                    INR
                                </SelectItem>
                                <SelectItem value="fr" className="text-[12px] font-[400]">
                                    EUR
                                </SelectItem>
                                <SelectItem value="de" className="text-[12px] font-[400]">
                                    AED
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default TopbarHeader;
