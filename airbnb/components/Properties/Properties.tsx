"use client"

import { apiService } from "@/app/services/apiService";
import { PropertyCard } from "./PropertyCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SkeletonCard } from "../ui/skeletonCard";

export type PropertyType = {
    id: string,
    title: string,
    price_per_night: number,
    image_url: string
}

export const Properties : React.FC = () => {

    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [loading, setLoading] = useState(true);  
    const getProperties = async () => {
        try {
            const response = await apiService.get('/api/properties/');
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <div className="w-full px-12 lg:px-24 py-3 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
            {loading ? (
                // Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
                <div>Loading..</div>
            ) : (
                properties.map((property) => (
                    <Link href={`/property/${property.id}`} key={property.id}>
                        <PropertyCard property={property} />
                    </Link>
                ))
            )} 
       </div>
    );
}