import { Separator } from "../ui/separator"
import { PiSprayBottleLight } from "react-icons/pi";
import { PiCheckCircle } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { BsChatSquare } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { GoTag } from "react-icons/go";

export const RatingsSection = () => {
  return (
    <div>
       <Separator className="invisible md:visible "/>
            <div className="flex invisible md:visible h-0 md:h-48 font-semibold text-sm text-darkText md:my-4 md:p-10 md:pl-0">
                <div className="w-1/6 pl-0 pr-3">
                    Overall rating
                    <div className="py-2 text-xs font-normal justify-start text-lightText">
                        <div className="flex items-center">5 <Separator className="h-1 w-9/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-1/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">4 <Separator className="h-1 w-1/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-9/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">3 <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">2 <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">1 <Separator className="h-1 ml-3 w-10/12 mr-4 rounded-sm"/></div>
                    </div>
                    
                </div>
                <Separator orientation="vertical"/>
                <div className="w-1/6 justify-self-start px-5">
                    Cleanliness
                    <div className="text-xl mt-1 mb-6">4.7</div>
                    <PiSprayBottleLight size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Accuracy
                    <div className="text-xl mt-1 mb-6">4.7</div>
                    <PiCheckCircle size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Check-in
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <HiOutlineKey size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Communication
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <BsChatSquare size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Location
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <CiMap size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Value
                    <div className="text-xl mt-1 mb-6">5.0</div>
                    <GoTag size={36}/>
                </div>

            </div>
    </div>
  )
}

