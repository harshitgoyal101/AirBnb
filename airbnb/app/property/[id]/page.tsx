"use client"
import { Separator } from "@/components/ui/separator"
import { PropertyInfo } from "@/components/Properties/PropertyInfo";
import { RatingsSection } from "@/components/Properties/RatingsSection";
import { ReviewSection } from "@/components/Properties/ReviewSection";
import { HostDetails } from "@/components/Properties/HostDetails";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function PropertyDetailPage() {
    const [IsNavVisible, SetIsNavVisible] = useState(false);
    const propertyInfoRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = ()=> {
            if(propertyInfoRef.current) {
                const triggerPosition = propertyInfoRef.current.offsetTop + propertyInfoRef.current.clientHeight;
                const scrollPosition = window.scrollY;
                (scrollPosition > triggerPosition) ? SetIsNavVisible(true) : SetIsNavVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);        
    })
    return (
        <div>
            <div ref = {propertyInfoRef}>
                <PropertyInfo/>
            </div>
            <nav className ={`fixed w-full h-20 py-0 px-10 lg:px-20 xl:px-36 p-3 bg-white z-20 border-t md:border-b flex justify-between items-center ${IsNavVisible?"translate-y-0" : "md:invisible"} md:top-0 bottom-0`}>
                <div className="h-full hidden md:flex justify-between items-center max-w-md md:w-1/2 lg:1/2 xl:w-1/3">
                    <Link href = "#PhotoRef" className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold ">Photos</Link>
                    <Link href = "#AmenitiesRef"className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold">Ameneties</Link>
                    <Link href ='#ReviewRef' className="h-full border-transparent border-b-4 flex items-center hover:border-black font-semibold">Reviews</Link>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 flex justify-between">
                    <div className="min-w-[117px] items-center mr-2">
                        <div className="flex items-center">
                            <div className="text-md font-semibold text-darkText mr-1">₹6,000</div>
                            <div className="text-sm text-mediumText">night</div>
                        </div>
                        <div className="flex text-xs ">
                            <div className="font-semibold mr-1">★ 4.86 .</div>
                            <div className="text-lightText text-xs">17 reviews</div>
                        </div>
                    </div>
                    <Button className="w-[160px] rounded-sm font-semibold bg-airbnb hover:bg-airbnbDark text-white hover:text-white">
                        Reserve
                    </Button>
                </div>
            </nav>
            <div className="w-full mx-auto min-w-[xl] px-10 lg:px-20 xl:px-36 p-3">
                <RatingsSection/>
                <Separator/>
                <div id="ReviewRef" >
                    <ReviewSection />
                </div>
                <Separator/>
                <HostDetails/>
            </div>
        </div>
    );
}
