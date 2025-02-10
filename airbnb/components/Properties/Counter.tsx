"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button";

export const Counter = () => {

    const [count, SetCount] = useState(0);
    const increment = () => SetCount(count+1);
    const decrement = () => SetCount(count-1);
    
    return (
        <div className='flex justify-center items-center'>
            <Button variant ={"outline"} size = {"icon"} className='outline-1 hover:outline-slate-900' onClick={decrement}>-</Button>
            <div className='m-4 min-w-3 max-w-3'>{count}</div>
            <Button  variant ={"outline"}size = {"icon"} className='outline-1 hover:outline-slate-900' onClick={increment}>+</Button>
        </div>
    )
}