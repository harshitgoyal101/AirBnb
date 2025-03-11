"use client"
import { Separator } from "@/components/ui/separator"
import { PropertyInfo } from "@/components/Properties/PropertyInfo";
import { RatingsSection } from "@/components/Properties/RatingsSection";
import { ReviewSection } from "@/components/Properties/ReviewSection";
import { HostDetails } from "@/components/Properties/HostDetails";
import { useRef, useState, useEffect } from "react";
import { PropertyNav } from "@/components/Properties/PropertyNav";


export default function PropertyDetailPage() {
    const [IsNavVisible, SetIsNavVisible] = useState(false);
    const PropertInfoRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = ()=> {
            if(PropertInfoRef.current) {
                const triggerPosition = PropertInfoRef.current.offsetTop + PropertInfoRef.current.clientHeight - 500;
                const scrollPosition = window.scrollY;
                (scrollPosition > triggerPosition) ? SetIsNavVisible(true) : SetIsNavVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);        
    })

    return (
        <div>   
            <div ref = {PropertInfoRef}>
                <PropertyInfo/>                  
            </div>         
            <PropertyNav IsNavVisible = {IsNavVisible} />
            <div className="w-full mx-auto min-w-[xl] px-10 lg:px-20 xl:px-36 p-3">
                <Separator className="invisible md:visible "/>
                <RatingsSection type = "default"/>
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
