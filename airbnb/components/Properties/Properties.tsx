"use client"

import { apiService } from "@/app/(UsingGlobalLayout)/services/apiService";
import { PropertyCard } from "./PropertyCard";
import { useEffect, useState } from "react";
import Link from "next/link";

export type PropertyType = {
    id: string,
    title: string,
    price_per_night: number,
    image_url: string
}

export const Properties = () => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const tmpProperties = await apiService.get('/api/properties/');
        setProperties(tmpProperties.data);
    }

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <div className="w-full px-12 lg:px-24 py-3 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {properties.map((property) => {
                return  (
                    <Link href ={`/property/${property.id}`} key={property.id}>
                        <PropertyCard 
                            key={property.id}
                            property={property}
                        />
                    </Link>
                )
            })}
       </div>
    );
}