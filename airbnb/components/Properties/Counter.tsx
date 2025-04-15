"use client"
import { Button } from "@/components/ui/button";

interface CounterProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

export const Counter = ({ value, onChange, min = 0, max = 16 }: CounterProps) => {
    const increment = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };
    
    const decrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };
    
    return (
        <div className='flex justify-center items-center'>
            <Button 
                variant={"outline"} 
                size={"icon"} 
                className='outline-1 hover:outline-slate-900' 
                onClick={decrement}
                disabled={value <= min}
            >
                -
            </Button>
            <div className='m-4 min-w-3 max-w-3'>{value}</div>
            <Button  
                variant={"outline"}
                size={"icon"} 
                className='outline-1 hover:outline-slate-900' 
                onClick={increment}
                disabled={value >= max}
            >
                +
            </Button>
        </div>
    )
}