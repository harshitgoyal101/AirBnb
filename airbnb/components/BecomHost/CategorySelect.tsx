'use client'
import { useState, useEffect } from "react";
import { apiService } from "@/app/services/apiService";
import { IconWithLabel } from "../ui/IconWIthLabel";
import { Skeleton } from "../ui/skeleton";

export const CategorySelect = () => {
    const [categories, setCategories] = useState<String[]>([]);
    const [loading, setLoading] = useState(true)
        const getCategories = async () => {
            const tmpCategories = await apiService.get('/api/categories/');
            setCategories(tmpCategories.data);
        }
    
        useEffect(() => {
            getCategories();
            setLoading(false)
        }, [])
  return (
    <div className='px-6 md:px-32 lg:px-40 xl:px-72 flex-row text-center items-center'> 
        <div className='font-semibold text-3xl'>Which of these best describes your place?</div>
        <div className='grid grid-cols-3 md:grid-cols-4 justify-evenly items-center md:px-4 lg:px-8 xl:px-16'>
            {loading?
                <>
                    {Array.from({length: 12}).map((_, index) => (
                        <div key={index} >
                            <Skeleton className="py-1 mx-1 w-auto max-w-40 md:py-2 xl:py-4 px-0 h-32 rounded-md my-4"/>     
                        </div>
                    ))}
                </>
            :            
                categories.map((category, index) => {
                    return <div key={index} className="border-2 py-1 mx-1 md:py-2 xl:py-4 px-0 h-32 items-center hover:border-black hover:bg-gray-100 max-w-40 rounded-md my-4">
                        <IconWithLabel className="border-none text-sm w-full" type={String(category)}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

