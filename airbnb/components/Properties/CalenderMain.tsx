"use client"
import { Calendar } from '@/components/ui/calendar';
import { useAuthDate } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { PropertyInfoProps } from './PropertyInfo';

export const CalenderMain = ({propertyInfo}: {propertyInfo ?: PropertyInfoProps})  => {
    const { checkIn, checkOut, setCheckIn, setCheckOut } = useAuthDate();
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: undefined,
        to: undefined,
    });    
    const [monthsToShow, setMonthsToShow] = useState(2); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMonthsToShow(window.innerWidth < 768 ? 1 : 2);
        }
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-GB", { day: "2-digit", month: "numeric", year: "numeric" });
    };

    const RangeLength =  (range: {from: Date | undefined; to: Date | undefined  }): number => {
        if (!range.from || !range.to) return 0;
        const timeDiff = range.from.getTime() - range.to.getTime();
        return Math.abs(timeDiff / (1000 * 60 * 60 * 24));
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
            <div className="text-xl md:text-2xl font-semibold text-darkText mb-2">
                {range.from && range.to ?
                    <div>{RangeLength(range)} nights in {propertyInfo?.property?.country}</div>
                    : <div>Select check-in date</div>
                }
            </div>

            <div className="text-sm text-lightText">
                {range.from && range.to ? 
                    <p>{range.from.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} - {range.to.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</p>
                    : <p>Add your travel dates for exact pricing</p>
                } 
            </div>

            <div className="flex justify-between py-2 overflow-x-hidden w-full">
                <Calendar
                    selected={{ from: range.from, to: range.to }} 
                    onDayClick={handleDateChange} 
                    numberOfMonths={monthsToShow}
                    mode="range"
                    className='pl-0 ml-0'
                />
            </div>
        </div>
    )
}
