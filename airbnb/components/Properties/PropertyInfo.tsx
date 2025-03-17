'use client'
import { FaRegHeart } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { PropertiesImages } from "@/components/Properties/PropertyImages";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Amenities } from "./Amenities";
import { BookCard } from "./BookCard";
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { apiService } from "@/app/services/apiService";
import { CalenderMain } from "./CalenderMain";

export type PropertyType = {
    id?: string;
    title?: string;
    description?: string;
    price_per_night?: number;
    bedrooms?: number;
    bathrooms?: number;
};

export const PropertyInfo = ({ property_id }: { property_id?: string }) => {


    const [all_aminities, setAll_aminities] = useState<Record<string, string>>({});

    const get_all_aminities = async() => {
        const temp_all_aminities = await apiService.get("/api/all_aminities/")
        setAll_aminities(temp_all_aminities.data);
    }

    const [property, setProperty] = useState<PropertyType | null>(null);

    const getProperties = async () => {
        const tmpProperties = await apiService.get('/api/properties/'+property_id);
        setProperty(tmpProperties.data[0]);
    }

    useEffect(() => {
        getProperties();
        get_all_aminities();
    }, []);
    
  return (
    <div>
        <div className="w-full mx-auto px-10 lg:px-20 xl:px-36 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText font-semibold text-2xl">
                    {property?.title || "Loading property..."}
                </div>
                <div>
                    <Button className="text-darkText rounded-md">
                        <RiShare2Fill /> Share
                    </Button>
                    <Button className="text-darkText rounded-md">
                        <FaRegHeart /> Save
                    </Button>
                </div>
            </div>
        </div>


        <div className="px-10 lg:px-20 xl:px-36" id = "PhotoRef">
            <PropertiesImages/>
        </div>
        
        <div className="flex px-10 lg:px-20 xl:px-36 py-3" id="AmenitiesRef">
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-hidden">
                <div className="text-darkText font-semibold text-lg mb-5">
                    Entire villa in Anjar, India
                    <p className="text-sm text-lightText">15 guests-5 bedrooms-4 beds-7 bathrooms-6</p>
                    <div className="text-sm">★ 4 Reviews</div>
                </div>
                <Separator/>
                <div className="py-2 flex flex-row items-center">
                    <Image
                        width={50}
                        height={50}
                        className="m-5 rounded-full object-cover logoSize"
                        src="/temp.avif"
                        alt="Small Image 1"
                    />
                    <div className="text-darkText font-semibold text-lg">
                        Hosted by Atul
                        <p className="text-sm text-lightText">2 years hosting</p>
                    </div>
                </div>
                <Separator/>

                
                <Separator/>
                <CalenderMain/>
            </div>
            <div className="invisible w-0 md:visible md:w-1/2 lg:w-2/5 pr-0 py-5 pl-0 md:pl-12 lg:pl-20  md:sticky md:top-0 md:h-screen">
                <BookCard/>
            </div>
        </div>
    </div>
  )
}

