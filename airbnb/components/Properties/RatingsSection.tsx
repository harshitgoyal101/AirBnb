import { Separator } from "../ui/separator"
import { PiSprayBottleLight } from "react-icons/pi";
import { PiCheckCircle } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { BsChatSquare } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { GoTag } from "react-icons/go";

export const RatingsSection = ({type} : {type : "default" | "pop" }) => {
  return (
    <div>
        <div className={`flex justify-center  font-semibold text-sm text-darkText md:my-4 md:p-10 md:pl-0 ${type === "default" ? "invisible h-0 md:h-48 md:visible":"h-auto"}`}>
                
                { type === "default" &&
                        <div className="flex w-full  ">
                            <div className=" w-1/6 pl-0 pr-3 ">
                                Overall rating
                                <div className="py-2 text-xs font-normal justify-start text-lightText">
                                    <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">5</div> <Separator className="h-1 w-9/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-1/12 mr-4 rounded-sm"/></div>
                                    <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">4</div> <Separator className="h-1 w-1/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-9/12 mr-4 rounded-sm"/></div>
                                    <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">3</div> <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                                    <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">2</div> <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                                    <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">1</div><Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
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
                    }

                { type === "pop" &&
                  <div className="flex flex-col ml-4 w-full h-auto">
                    <div className="w-full mb-5">
                        Overall rating
                        <div className="py-2 text-xs font-normal w-full justify-start text-lightText">
                            <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">5</div> <Separator className="h-1 w-9/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-1/12 rounded-sm"/></div>
                            <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">4</div> <Separator className="h-1 w-1/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-9/12 rounded-sm"/></div>
                            <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">3</div> <Separator className="h-1 ml-2 w-10/12 rounded-sm"/></div>
                            <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">2</div> <Separator className="h-1 ml-2 w-10/12 rounded-sm"/></div>
                            <div className="flex items-center"><div className="max-w-2 min-w-2 items-center">1</div><Separator className="h-1 ml-2 w-10/12 rounded-sm"/></div>
                        </div>
                        
                    </div>
                    <div className="pr-10">
                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex items-center">
                                <PiSprayBottleLight size = {24}/>
                                <div className="ml-4">Cleanliness</div>
                            </div>
                            <div className="text-sm  mr-2 my-2 ">4.7</div>
                        </div>

                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex">
                                <PiCheckCircle size = {24}/>
                                <div className="ml-4" >Accuracy</div>
                            </div>
                            <div className="text-sm  my-2  mr-2">4.8</div>
                        </div>
                        
                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex">
                                <HiOutlineKey size = {24}/>
                                <div className="ml-4">Check-in</div>
                            </div>
                            <div className="text-sm  my-2  mr-2">4.8</div>
                        </div>
                        
                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex">
                                <BsChatSquare size = {24}/>
                                <div className="ml-4">Communication</div>
                            </div>
                            <div className="text-sm  my-2  mr-2">4.7</div>
                        </div>
                        
                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex">
                                <CiMap size = {24}/>
                                <div className="ml-4">Location</div>
                            </div>
                            <div className="text-sm  my-2  mr-2">4.7</div>
                        </div>
                        
                        <Separator orientation="horizontal" className="w-full"/>
                        <div className="flex justify-between my-1 items-center">
                            <div className="flex">
                                <GoTag size = {24}/>
                                <div className="ml-4">Value</div>
                            </div>
                            <div className="text-sm  my-2  mr-2">4.7</div>
                        </div>
                    </div>  
                  </div>
                }
                

            </div>
    </div>
  )
}

