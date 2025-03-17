"use client"
import { apiService } from '@/app/services/apiService';
import { Calendar } from '@/components/ui/calendar';
import { useAuthDate } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

export const CalenderMain = ()  => {
    const { checkIn, checkOut, setCheckIn, setCheckOut } = useAuthDate();
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: undefined,
        to: undefined,
    });   
    const {accessToken} = useAuthDate();

    useEffect(()=>{
        createProperties();
    },[])
    const createProperties = async () => {

        const formData = new FormData();
        formData.append("title","Abcd"),
        formData.append("description","hsdjfdkf"),  
        formData.append("price_per_night","1200"),
        formData.append("bedrooms","4");
        formData.append("bathrooms","3"),
        formData.append("guests","10"),
        formData.append("country","India"),
        formData.append("country_code","+91"),
        formData.append("category","Flat"),
        formData.append("image","public/gettyimages-514");
  
        const createdProperty = await apiService.post('/api/properties/create/', formData, accessToken ?? undefined);
        console.log("propertcreated", createdProperty?.data);
    };

    const formatDate = (date: Date,) => {
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month:"short",
            year: "numeric",
        });
    };
    
    const RangeLength =   (checkIn: string| Date | null, checkOut: string | Date | null): number => {
        if (!checkIn || !checkOut) return 0;

        const checkInDate = checkIn instanceof Date ? checkIn : new Date(checkIn);
        const checkOutDate = checkOut instanceof Date ? checkOut : new Date(checkOut);
    
        const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
        return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    };
    
    const handleDateChange = (date: Date) => {
        if (!range.from || (range.from && range.to)) {
            setRange({ from: date, to: undefined });
            setCheckIn(formatDate(date));
        } else {
            setRange({ ...range, to: date });
            setCheckOut(formatDate(date));
        }
    };

    return (
        <div className="my-6">
            <div className="text-2xl font-semibold text-darkText mb-2">
                {checkIn && checkOut ?
                    <div>{RangeLength(checkIn, checkOut)} nights in Anjar</div>
                    : <div>Select check-in date</div>
                }
            </div>

            <div className="text-sm text-lightText">
            {checkIn && checkOut ? (
                    <p>{checkIn} -{checkOut}</p>
                ) : (
                        <p>Add your travel dates for exact pricing</p>
                    )} 
            </div>
            <div className="flex justify-between py-2 overflow-x-hidden w-full">
                <Calendar
                     selected={{
                        from: checkIn ? new Date(checkIn) : undefined,
                        to: checkOut ? new Date(checkOut) : undefined,
                    }}
                    onDayClick={handleDateChange} 
                    numberOfMonths={2} 
                    mode="range"
                />
            </div>
        </div>
    )
}

