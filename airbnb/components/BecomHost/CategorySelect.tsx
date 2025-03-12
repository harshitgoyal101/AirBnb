'use client'
import { useState, useEffect } from "react";
import { apiService } from "@/app/services/apiService";
import { IconWithLabel } from "../ui/IconWIthLabel";

export const CategorySelect = () => {
    const [categories, setCategories] = useState<String[]>([]);
    
        const getCategories = async () => {
            const tmpCategories = await apiService.get('/api/categories/');
            setCategories(tmpCategories.data);
        }
    
        useEffect(() => {
            getCategories();
        }, [])
  return (
    <div className='px-72 flex-row text-center items-center'> 
        <div className='font-semibold text-3xl'>Which of these best describes your place?</div>
        <div className='grid grid-cols-4 justify-evenly items-center px-16 h-fit'>
            {categories.map((category, index) => {
                return <div key={index} className="border-2 py-4 px-0  hover:border-black hover:bg-gray-100 max-w-40 rounded-md my-4">
                    <IconWithLabel className="border-none text-sm w-full" type={String(category)}/>
                </div>
            })}
        </div>
    </div>
  )
}

