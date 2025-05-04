'use client'

import { apiService } from "@/app/services/apiService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { RiSoundModuleLine } from "react-icons/ri";
import { Switch } from "@/components/ui/switch"
import { IconWithLabel } from "./ui/IconWIthLabel";
import { useState, useEffect } from 'react';
import { Skeleton } from "./ui/skeleton";

interface CategoriesProps {
    onCategorySelect: (category: string | undefined) => void;
}

export const Categories = ({ onCategorySelect }: CategoriesProps) => {

	const [withTax, setWithTax] = useState(true);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

    const getCategories = async () => {
        const tmpCategories = await apiService.get('/api/categories/');
        setCategories(tmpCategories.data);
        setLoading(false)
    }

    useEffect(() => {
        getCategories();
    }, [])

    const handleCategoryClick = (category: any) => {
        if (selectedCategory === category.title) {
            setSelectedCategory(undefined);
            onCategorySelect(undefined);
        } else {
            setSelectedCategory(category.title);
            onCategorySelect(category.title);
        }
    }
    
    return (
        <div className="w-full mx-auto px-2 md:px-24 lg:px-24 py-3 flex-col lg:flex-row flex space-x-8 items-center ">
            
            {loading ?
                <>
                    <div className="flex  justify-center items-center">
                        <div className="flex items-center w-full">
                            <Skeleton className="h-10 w-10 rounded-full"/>
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="cursor-pointer m-3 flex flex-col justify-center items-center rounded-xl" >
                                    <Skeleton className="w-6 h-6 rounded-sm mb-1"/>                            
                                    <Skeleton className="w-16 h-4"/>
                                </div>
                            ))}
                            <Skeleton className="h-10 w-10 rounded-full"/>
                        </div>

                        <Skeleton className="hidden lg:flex h-12 w-32 mr-4"/> 
                        <Skeleton className="hidden lg:flex h-12 w-72 "/> 
                        
                    </div>
                </> 
                :
                <>
                    <Carousel className="w-full md:overflow-auto relative">
                        <CarouselPrevious variant="outline" className="absolute left-1 top-1/2 transform -translate-y-1/2 "/>    
                        <div className="mx-12">
                            <CarouselContent>
                                {categories.map((category, index) => {
                                    return <CarouselItem key={index} className="basis-1/10 mt-2">
                                        <div 
                                            onClick={() => handleCategoryClick(category)}
                                            className={`cursor-pointer ${selectedCategory === category ? 'border-b-2 border-black' : ''}`}
                                        >
                                            <IconWithLabel type={String(category.title)}/>
                                        </div>
                                    </CarouselItem>
                                })}
                            </CarouselContent>
                        </div>
                        <CarouselNext variant="outline" className="absolute right-1 top-1/2 transform -translate-y-1/2 "/>
                    </Carousel>            
                    <div className="md:space-x-4 mt-2 lg:mt-0 hidden sm:flex">
                        <Button variant={"outline"} className="rounded-lg">
                            <RiSoundModuleLine className="rotate-90"/>
                            <div className="text-mediumText font-sm py-2">
                                Filter
                            </div>
                        </Button>

                        <Button asChild variant={"outline"} className="rounded-lg" onClick={() => {
                            setWithTax(!withTax)
                        }}> 
                            <div className="text-mediumText font-sm py-2">              
                                Display total before taxes
                                <Switch checked={withTax}/>
                            </div>
                        </Button>
                    </div>
                </>

            }
            
        </div>
    );
}