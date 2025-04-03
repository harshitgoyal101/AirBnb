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
import { Skeleton } from "../ui/skeleton";

export type PropertyType = {
    id?: string;
    title?: string;
    description?: string;
    price_per_night?: number;
    bedrooms?: number;
    bathrooms?: number;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    guests?: number;
    country?: string;
    landlord?: string
};

type PropertyInfoProps = {
    property?: PropertyType;
    landlord?: any;
  };

export const PropertyInfo = ({ property, landlord }: PropertyInfoProps) => {

    const [all_aminities, setAll_aminities] = useState<Record<string, string>>({});
   
    const get_all_aminities = async() => {
        const temp_all_aminities = await apiService.get("/api/all_aminities/")
        setAll_aminities(temp_all_aminities.data);
    }

    useEffect(() => {
        get_all_aminities();
    }, []);
 
  return (
    <div>
        
        <div className="w-full mx-auto px-10 lg:px-20 xl:px-36 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText w-1/2 font-semibold text-2xl">
                    {property?.title || (<Skeleton className="h-10 w-full md:w-80 my-2"/>)}
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
            <PropertiesImages property={property}/>
        </div>
        
        <div className="flex px-10 lg:px-20 xl:px-36 py-3" id="AmenitiesRef">
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-hidden">
                <div className="text-darkText font-semibold text-lg mb-5">
                    {property?.description || (<Skeleton className="h-6 w-xl mt-2"/>)} {property?.country || (<Skeleton className="h-6 w-44 mt-1"/>)}
                    <div className="text-sm text-lightText items-center"> 
                        guests-{property?.guests || (<Skeleton className="h-4 w-4 inline-flex ml-1 mr-2 mt-1"/>)} 
                        bedrooms-{property?.bedrooms  || (<Skeleton className="h-4 w-4 inline-flex ml-1 mr-2 mt-1"/>)} 
                        bathrooms-{property?.bathrooms  || (<Skeleton className="h-4 w-4 inline-flex ml-1 mr-2 mt-1"/>)}</div>
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
                        Hosted by {landlord?.name || (<Skeleton className="h-6 w-1/2 inline-flex"/>)}
                        <p className="text-sm text-lightText">2 years hosting</p>
                    </div>
                </div>
                <Separator/>

                
                <Separator/>
                <CalenderMain/>
            </div>
            <div className="invisible w-0 md:visible md:w-1/2 lg:w-2/5 pr-0 py-5 pl-0 md:pl-12 lg:pl-20  md:sticky md:top-0 md:h-screen">
                <BookCard property ={property}/>
            </div>
        </div>
    </div>
  )
}

