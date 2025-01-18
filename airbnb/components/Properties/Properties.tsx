"use client"
import { error } from "console";
import { PropertyCard } from "./PropertyCard";
import { useEffect, useState } from "react";

export const Properties = ({
    withTax
}: {
    withTax: boolean
}) => {

    const getProperties = async () => {
        const url = 'http://localhost:8000/api/properties/';
        await fetch(url, {
            method: 'GET',
        }).then(response => response.json())
        .then((json) => {
            console.log('json', json);
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
            <PropertyCard/>
       </div>
    );
}