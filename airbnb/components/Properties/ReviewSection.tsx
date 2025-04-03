import { ReviewCard } from "@/components/User/ReviewCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { RatingCard } from "./RatingCard";
import { useEffect, useState } from "react";
import { Model } from '@/components/ui/Model'
import { RatingsSection } from "./RatingsSection";
import { Input } from '../ui/input';
import { Separator } from "../ui/separator";
import Rating from '@mui/material/Rating';

export const ReviewSection = () => {
    const [isOpen, setIsOpen] = useState(false);    
    
    useEffect(() => {
        setIsOpen(false);
    }, []); 
    
    return (
    <div>
      <div className="invisible h-0 md:h-fit md:visible md:grid grid-cols-2 justify-self-stretch md:py-10">
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
        </div>

        <div className="md:hidden">
            <Carousel className="w-full md:overflow-auto relative">
                <div className="flex justify-between my-6 mr-6">
                    <div className="text-2xl font-semibold text-mediumText mt-3">
                        What guests are saying about Harshit
                    </div>
                    <div className="flex justify-between">
                        <div className="mr-6"><CarouselPrevious /></div>
                        <div className="ml-6"><CarouselNext /></div>
                    </div>
                </div>
                <CarouselContent className=" w-full min-w-[500px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="xl:basis-1/2">
                            <ReviewCard/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

        <div className="py- mb-4 m-1 text-lg">
            <Button onClick={()=>{setIsOpen(!isOpen)}} className="text-darkText outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                Show all 9 review
            </Button> 
            <div className="my-10">
                
                <div className="my-3">
                    <div className="text-2xl font-semibold my-2">Add Overall Rating</div>
                    <div className="text-lg my-1 text-lightText">How was your overall experience in your stay ?</div>
                    <Rating name="size-large" size="large" />
                </div>
                <div className="my-3 flex flex-col md:flex-row justify-between items-center md:items-end">
                    <div className="w-full md:w-2/3">
                        <p className="text-2xl font-semibold">Describe your stay breifly</p>
                        <Input type="text" className="mt-3 w-full outline outline-2 outline-black h-32"></Input>
                    </div>
                    <Button className="text-white mr-4 mt-4 xl:mr-24 border-2 border-transparent hover:border-black bg-airbnb outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                        Submit
                    </Button>  
                </div>
            </div>
            <Model
                isOpen = {isOpen}
                close   ={()=>{setIsOpen(!isOpen)}}
                size="Full"
            >   
                <div className="w-72 md:w-[700px] lg:w-[1000px] max-w-[1000px] flex flex-col lg:flex-row md:pl-5 pt-10 md:pr-10">
                    <div className="w-full lg:w-2/5 sticky ">
                        <div className="text-2xl font-semibold ml-4">★ 4.86</div>
                        <RatingsSection type = "pop"/>
                    </div>
                    <div className="w-full mt-8 lg:mt-0 lg:w-3/5 ">
                        <div className="sticky ">
                            <div className="flex justify-between">
                                <div>
                                    <div className="text-2xl text-darkText font-semibold">158 reviews</div>
                                    <div className="underline text-lightText text-xs">Learn how reviews work</div>
                                </div>
                                <Button variant={"active"} size={"sm"} className="border py-0 text-xs">Most recent</Button>
                            </div>
                        </div>
                        <Input className="w-full rounded-full mt-12 mb-8" placeholder="Search reviews"/>
                        <Separator/>
                        <div className="overflow-y-scroll scrollbar-none max-h-96 text-sm">
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                            <RatingCard/>
                        </div>

                    </div>
                </div>
            </Model>    
            
        </div>
    </div>
    )
}




