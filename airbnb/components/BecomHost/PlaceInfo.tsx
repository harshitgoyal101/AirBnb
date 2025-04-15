'use client'
import { Counter } from "../Properties/Counter"
import { Separator } from "../ui/separator"
import { useState } from "react"

interface PlaceInfoProps {
    onInfoChange: (info: {
        guests: number;
        bedrooms: number;
        bathrooms: number;
    }) => void;
}

export const PlaceInfo = ({ onInfoChange }: PlaceInfoProps) => {
    const [guests, setGuests] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);

    const handleChange = (type: 'guests' | 'bedrooms' | 'bathrooms', value: number) => {
        switch (type) {
            case 'guests':
                setGuests(value);
                break;
            case 'bedrooms':
                setBedrooms(value);
                break;
            case 'bathrooms':
                setBathrooms(value);
                break;
        }
        onInfoChange({ guests, bedrooms, bathrooms });
    };

    return (
        <div className='px-6 mt-10 md:px-32 lg:px-72 xl:px-96 flex-row'> 
            <div className="mb-12">
                <p className="text-3xl font-semibold text-darkText">Share some basics about your place</p>
                <p className="text-lightText text-lg text-start">You'll add more details later, such as bed types.</p>
            </div>
            <div className="flex justify-between my-4 items-center">
                <div className="text-xl mb-1">Guests</div>
                <Counter 
                    value={guests} 
                    onChange={(value) => handleChange('guests', value)}
                    min={1}
                    max={16}
                />
            </div>
            <Separator/>
                
            <div className="flex justify-between my-4 items-center">
                <div className="text-xl mb-1">Bedrooms</div>
                <Counter 
                    value={bedrooms} 
                    onChange={(value) => handleChange('bedrooms', value)}
                    min={1}
                    max={10}
                />
            </div>
            <Separator/>

            <div className="flex justify-between my-4 items-center">
                <div className="text-xl mb-1">Bathrooms</div>
                <Counter 
                    value={bathrooms} 
                    onChange={(value) => handleChange('bathrooms', value)}
                    min={1}
                    max={10}
                />
            </div>
        </div>
    )
}

