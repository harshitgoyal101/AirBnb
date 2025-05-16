"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { PropertyInfo, PropertyType } from "@/components/Properties/PropertyInfo";
import { RatingsSection } from "@/components/Properties/RatingsSection";
import { ReviewSection } from "@/components/Properties/ReviewSection";
import { HostDetails } from "@/components/Properties/HostDetails";
import { useRef, useState, useEffect, use } from "react";
import { PropertyNav } from "@/components/Properties/PropertyNav";
import { apiService } from "@/app/services/apiService";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const { id } = resolvedParams; 

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [property, setProperty] = useState<PropertyType | undefined>(undefined);
    const [landlord, setLandlord] = useState<any | undefined>(undefined);
    const propertyInfoRef = useRef<HTMLDivElement>(null);

    const getProperties = async () => {
        try {
            const res = await apiService.get(`/api/properties/${id}`);
            console.log("property", res?.data);
            setProperty(res?.data);
        } catch (error) {
            console.error("Error fetching property:", error);
        }
    };

    const getUserdetails = async () => {
        if (!property?.landlord) return;
        try {
            const response = await apiService.get(`/api/auth/${property.landlord}/`);
            console.log("Landlord Data:", response?.data);
            setLandlord(response?.data);
        } catch (error) {
            console.error("Error fetching landlord details:", error);
        }
    };

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

    useEffect(() => {
        if (id) {
            getProperties();
        }
    }, [id]);

    useEffect(() => {
        if (property?.landlord) {
            getUserdetails();
        }
    }, [property?.landlord]);

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
