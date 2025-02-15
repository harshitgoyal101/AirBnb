import { ReviewCard } from "@/components/User/ReviewCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { RatingCard } from "./RatingCard";
import { useEffect, useState, useCallback } from "react";
import useSignUpModel from '@/app/hooks/useSignUpModel';
import { Model } from '@/components/ui/Model'
import { RatingsSection } from "./RatingsSection";
import { Input } from '../ui/input';
import { Separator } from "../ui/separator";

export const ReviewSection = () => {
  const [isOpen, setIsOpen] = useState(false);    
  useEffect(() => {
    setIsOpen(false);
  }, []); 
 const signUpModel = useSignUpModel();
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
            <Model
                isOpen = {isOpen}
                close   ={()=>{setIsOpen(!isOpen)}}
                size="Full"
            >   
                <div className="w-[1000px] flex pl-5 pt-10 pr-10">
                    <div className="w-2/5 sticky ">
                        <div className="text-2xl font-semibold ml-4">★ 4.86</div>
                        <RatingsSection type = "pop"/>
                    </div>
                    <div className="w-3/5 ">
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




