"use client"
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export const CalenderMain = ()  => {
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
            from: undefined,
            to: undefined,
    });
    const RangeLength =  (range: {from: Date | undefined; to: Date | undefined  }): number => {
        if (!range.from || !range.to) return 0;
        const timeDiff = range.from.getTime() - range.to.getTime();
        const DayDiff = timeDiff/(1000*60*60*24);
        return Math.abs(DayDiff);
    }
    const handleDateChange = (date: Date) => {
        if (!range.from || (range.from && range.to)) {
            setRange({ from: date, to: undefined });
        } else {
            setRange({ ...range, to: date });
        }
    };

    return (
        <div className="my-6">
            <div className="text-2xl font-semibold text-darkText mb-2">
                {range.from && range.to ?
                    <div>{RangeLength(range)} nights in Anjar</div>
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
                    numberOfMonths={2} 
                    mode="range"
                />
            </div>
        </div>
    )
}

