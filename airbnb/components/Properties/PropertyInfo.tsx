'use client'
import { FaRegHeart } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { PropertiesImages } from "@/components/Properties/PropertyImages";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Amenities } from "./Amenities";
import { BookCard } from "./BookCard";
import { Calendar } from '@/components/ui/calendar';
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { apiService } from "@/app/services/apiService";

export const PropertyInfo = () => {


    const [all_aminities, setAll_aminities] = useState<Record<string, string>>({});

    const get_all_aminities = async() => {
        const temp_all_aminities = await apiService.get("/api/all_aminities/")
        setAll_aminities(temp_all_aminities.data);
    }

    useEffect(() => {
        get_all_aminities();
    }, []);

    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: undefined,
        to: undefined,
    });

    const handleDateChange = (date: Date) => {
        if (!range.from || (range.from && range.to)) {
            setRange({ from: date, to: undefined });
        } else {
            setRange({ ...range, to: date });
        }
    };

  return (
    <div>
        <div className="w-full mx-auto px-10 lg:px-20 xl:px-36 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText font-semibold text-2xl">
                    StayVista at Desert Palms in Anjar-Kutch w/t Pool
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


        <div className="px-10 lg:px-20 xl:px-36">
            <PropertiesImages/>
        </div>
        
        <div className="flex px-10 lg:px-20 xl:px-36 py-3">
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

                <Amenities all_aminities={all_aminities}/>

                <Separator/>
                <div className="my-6">
                    <div className="text-2xl font-semibold text-darkText mb-2">2 nights in Anjar</div>
                    <div className="text-sm text-lightText">
                    {range.from && range.to ? 
                        <p>{range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}</p>
                        : <p>Add your travel dates for exact pricing</p>
                    } </div>

                    <div className="flex justify-between py-2 overflow-x-hidden w-full">
                        <Calendar
                            selected={{ from: range.from, to: range.to }} 
                            onDayClick={handleDateChange} 
                            numberOfMonths={2} 
                            mode="range"
                        />
                    </div>
                </div>
            </div>
            <div className="invisible w-0 md:visible md:w-1/2 lg:w-2/5 pr-0 py-5 pl-0 md:pl-12 lg:pl-20  md:sticky md:top-0 md:h-screen">
                <BookCard />
            </div>
        </div>
    </div>
  )
}

