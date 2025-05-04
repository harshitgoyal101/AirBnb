"use client"

import { apiService } from "@/app/services/apiService";
import { PropertyCard } from "./PropertyCard";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link";

export type PropertyType = {
    id?: string,
    title?: string,
    price_per_night?: number,
    image_url?: string
}

interface PropertiesProps {
    category?: string;
}

export const Properties = ({ category }: PropertiesProps) => {

    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [loading, setLoading] = useState(true)

    const getProperties = async () => {
        console.log(category);
        const url = category
            ? `/api/properties/?category=${category}`
            : '/api/properties/';
        const tmpProperties = await apiService.get(url);
        setProperties(tmpProperties.data);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getProperties();
    }, [category])

    return (               
        <div className="w-full px-6 lg:px-24 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                loading ?
                <>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="cursor-pointer w-auto m-3 rounded-xl" >
                        <Skeleton className=" h-72 rounded-xl"/>                            
                        
                        <div className=" mt-4 flex flex-col space-x-0 text-lightText">
                            <div className="flex justify-between">
                                <Skeleton className="w-24 h-6"/>
                                <Skeleton className="w-10 h-6 mr-2"/>
                            </div>
                            <Skeleton className="w-20 my-1 h-4"/>
                            <Skeleton className="w-16 h-4"/>
                        </div>
                    </div>
                ))}
                </> : 
                properties.length > 0 ? properties.map((property) => {
                    return  (
                        <Link href ={`/property/${property.id}`} key={property.id}>
                            <PropertyCard 
                                key={property.id}
                                property={property}
                            />
                        </Link>
                    )
                }) : <>
                    <div className="text-lg m-5"> No Properties Found </div>
                </>
            }
            
       </div>
    );
}