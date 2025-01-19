"use client"

import { PropertyCard } from "./PropertyCard";
import { useEffect, useState } from "react";

export type PropertyType = {
    id: string,
    title: string,
    price_per_night: number,
    image_url: string
}

export const Properties = ({
    withTax
}: {
    withTax: boolean
}) => {

    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = 'http://localhost:8000/api/properties/';
        await fetch(url, {
            method: 'GET',
        }).then(response => response.json())
        .then((json) => {
            console.log('json', json);
            setProperties(json.data);
        })
        .catch((error) => {
            console.log('error', error);
        })
    }

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <div className="w-full px-24 py-3 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {properties.map((property) => {
                return <PropertyCard 
                    key={property.id}
                    property={property}
                />
            })}
       </div>
    );
}