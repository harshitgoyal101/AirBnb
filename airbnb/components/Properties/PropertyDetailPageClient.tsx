"use client";
import React, { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { PropertyInfo, PropertyType } from "@/components/Properties/PropertyInfo";
import { RatingsSection } from "@/components/Properties/RatingsSection";
import { ReviewSection } from "@/components/Properties/ReviewSection";
import { HostDetails } from "@/components/Properties/HostDetails";
import { PropertyNav } from "@/components/Properties/PropertyNav";

export default function PropertyDetailPageClient({
    property,
    landlord,
}: {
    property?: PropertyType;
    landlord?: any;
}) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const propertyInfoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (propertyInfoRef.current) {
                const triggerPosition = propertyInfoRef.current.offsetTop + propertyInfoRef.current.clientHeight - 500;
                const scrollPosition = window.scrollY;
                setIsNavVisible(scrollPosition > triggerPosition);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={propertyInfoRef}>
                <PropertyInfo property={property} landlord={landlord} />
            </div>
            <PropertyNav property={property} IsNavVisible={isNavVisible} />
            <div className="w-full mx-auto min-w-[xl] px-3 md:px-10 lg:px-20 xl:px-36">
                <Separator className="invisible md:visible" />
                <RatingsSection type="default" />
                <Separator />
                <div id="ReviewRef">
                    <ReviewSection />
                </div>
                <Separator />
                <HostDetails landlord={landlord} />
            </div>
        </div>
    );
}