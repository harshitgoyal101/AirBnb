import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropertyType } from "./Properties";

export const PropertyNav = ({IsNavVisible, property} : {IsNavVisible : boolean, property ?: PropertyType}) => {
  return (
    <nav className ={`fixed w-full h-20 py-0 px-4 md:px-10 lg:px-20 xl:px-36 p-3 bg-white z-20 border-t md:border-b flex justify-between items-center ${IsNavVisible?"opacity-100" : "md:opacity-0 md:invisible"} md:top-0 bottom-0`}>
        <div className="h-full hidden md:flex justify-between items-center max-w-md md:w-1/2 lg:1/2 xl:w-1/3">
            <Link href = "#PhotoRef" className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold ">Photos</Link>
            <Link href = "#AmenitiesRef"className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold">Ameneties</Link>
            <Link href ='#ReviewRef' className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold">Reviews</Link>
        </div>
        <div className="w-[350px] sm:w-full md:w-1/3 lg:w-1/4 flex justify-between">
            <div className="min-w-[117px] items-center mr-2">
                <div className="flex items-center">
                    <div className="text-md font-semibold text-darkText mr-1">₹{(property?.price_per_night??100)*85}</div>
                    <div className="text-sm text-mediumText">night</div>
                </div>
                <div className="flex text-xs ">
                    <div className="font-semibold mr-1">★ 4.86 .</div>
                    <div className="text-lightText text-xs">17 reviews</div>
                </div>
            </div>
            <Button className="w-[160px] mr-4 rounded-sm font-semibold bg-airbnb hover:bg-airbnbDark text-white hover:text-white">
                Reserve
            </Button>
        </div>
    </nav>
  )
}

