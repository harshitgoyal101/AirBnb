"use client";

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { PropertiesImages } from "@/components/Properties/PropertyImages";
import { BookCard } from "@/components/Properties/BookCard";
import Image from "next/image";
import { IconWithLabel } from "@/components/ui/IconWIthLabel";
import { Calendar } from '@/components/ui/calendar';
import { ReviewCard } from "@/components/User/ReviewCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import { PiSprayBottleLight } from "react-icons/pi";
import { PiCheckCircle } from "react-icons/pi";
import { HiOutlineKey } from "react-icons/hi2";
import { BsChatSquare } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { UserCard } from "@/components/User/UserCard";
import Link from "next/link";
import { useState } from "react";

export default function PropertyDetailPage() {
    const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: undefined,
        to: undefined,
      });
    
      // Handle date selection
      const handleDateChange = (date: Date) => {
        if (!range.from || (range.from && range.to)) {
          setRange({ from: date, to: undefined });
        } else {
          setRange({ ...range, to: date });
        }
      };
      
  return (
    <>
    <div>
        {/* ----------------------------------property images---------------------------------------------------- */}
        <div className="w-full mx-auto px-10 lg:px-20 xl:px-36 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText font-semibold text-2xl">
                    StayVista at Desert Palms in Anjar-Kutch w/t Pool
                </div>
                <div>
                    <Button className="text-darkText rounded-md">
                        <RiShare2Fill /> Share
                    </Button>
                    <Button className="text-darkText rounded-md">
                        <FaRegHeart /> Save
                    </Button>
                </div>
            </div>
        </div>
        <div className="px-10 lg:px-20 xl:px-36">
            <PropertiesImages/>
        </div>
        
        {/* --------------------------------------Place info--------------------------------------------- */}

        <div className="flex px-10 lg:px-20 xl:px-36 py-3">
            
            {/* ----------------------------------------host info (short) ------------------------------------- */}
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-hidden">
                <div className="text-darkText font-semibold text-lg mb-5">
                    Entire villa in Anjar, India
                    <p className="text-sm text-lightText">15 guests-5 bedrooms-4 beds-7 bathrooms-6</p>
                    <div className="text-sm">★ 4 Reviews</div>
                </div>
                <Separator/>
                <div className="py-2 flex flex-row items-center">
                    <Image
                        width={50}
                        height={50}
                        className="m-5 rounded-full object-cover logoSize"
                        src="/temp.avif"
                        alt="Small Image 1"
                    />
                    <div className="text-darkText font-semibold text-lg">
                        Hosted by Atul
                        <p className="text-sm text-lightText">2 years hosting</p>
                    </div>
                </div>

                <Separator/>
{/* ------------------------------------------------------place info and ameneties--------------------------------------------------------- */}
                <div className="py-4">
                    <IconWithLabel className="my-2" icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Shared bathroom</div> 
                    <div className="text-lightText ml-2 text-sm">You'll share the bathroom with others</div>
                    </IconWithLabel>
                    <IconWithLabel className="my-2"  icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Designed for staying cool</div> 
                    <div className="text-lightText ml-2 text-sm">Beat the heat with the A/C and ceiling fan.</div>
                    </IconWithLabel>
                    <IconWithLabel className="my-2" icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Outdoor entertainment</div> 
                    <div className="text-lightText ml-2 text-sm">The pool and outdoor seating are great for summer trips.</div>
                    </IconWithLabel>    
                </div>
                
                <Separator/>

                <div className="py-8 text-mediumText text-md">
                    A bed in a petite mixed dorm with AC, a private locker, and a shared washroom outside.
                    Explore the susegad lifestyle of Goa at our vibrant and colourful Zostel Goa (Morjim).
                    Choose from snug dorms to private and luxurious suites for a rejuvenating stay at our 
                    hostel. Meanwhile, our sprightly and spacious common areas feature a range of games 
                    that would serve as a perfect icebreaker for social interactions with fellow travellers...
                    
                    <div className="my-2 font-semibold underline  text-darkText">Show more</div>
                </div>            

                <Separator/>

                <div className="grid grid-cols-1 lg:grid-cols-2 text-mediumText py-8">
                    <div className="text-2xl font-semibold text-darkText lg:col-span-2 mb-2">What this place offers?</div>

                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Wifi </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Free parking on premises </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Pool </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Paid washing machine </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Air conditioning </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Smoking allowed </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Exterior security cameras on property </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Carbon monoxide alarm </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Smoke alarm </IconWithLabel>
                </div>
                
                <div className="py-2 mb-4 m-1 text-lg">
                    <Button className="text-darkText  outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                        Show all 17 ameneties
                    </Button>
                </div>

                <Separator/>
                {/* ----------------------------------------calander------------------------------------------------ */}

                <div className="my-6">
                    <div className="text-2xl font-semibold text-darkText mb-2">2 nights in Anjar</div>
                    <div className="text-sm text-lightText">{
                        range.from && range.to ? 
                        <p>{range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}</p>
                        : <p>Add your travel dates for exact pricing</p>
                    }</div>

                    <div className="flex justify-between py-2 overflow-x-hidden w-full">
                        <Calendar
                            selected={{ from: range.from, to: range.to }} // Pass selected range
                            onDayClick={handleDateChange} // Handle day selection
                            numberOfMonths={2} // Display two months
                            mode="range" // Enable range mode
                        />
                    </div>

                </div>
                
            </div>
            {/* ---------------------------------------------------booking card (price break-up) --------------------------------------------------- */}
            <div className="invisible w-0 md:visible md:w-1/2 lg:w-2/5 pr-0 py-5 pl-0 md:pl-12 lg:pl-20  md:sticky md:top-0 md:h-screen">
                <BookCard />
            </div>
        </div>
{/* ---------------------------------------------------Ratings section------------------------------------------------------ */}

        <div className="w-full mx-auto min-w-[xl] px-10 lg:px-20 xl:px-36 p-3">
            <Separator className="invisible md:visible "/>
            <div className="flex invisible md:visible h-0 md:h-48 font-semibold text-sm text-darkText md:my-4 md:p-10 md:pl-0">
                <div className="w-1/6 pl-0 pr-3">
                    Overall rating
                    <div className="py-2 text-xs font-normal justify-start text-lightText">
                        <div className="flex items-center">5 <Separator className="h-1 w-9/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-1/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">4 <Separator className="h-1 w-1/12 ml-2 rounded-s-sm bg-gray-800"/> <Separator className="h-1 w-9/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">3 <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">2 <Separator className="h-1 ml-2 w-10/12 mr-4 rounded-sm"/></div>
                        <div className="flex items-center">1 <Separator className="h-1 ml-3 w-10/12 mr-4 rounded-sm"/></div>
                    </div>
                    
                </div>
                <Separator orientation="vertical"/>
                <div className="w-1/6 justify-self-start px-5">
                    Cleanliness
                    <div className="text-xl mt-1 mb-6">4.7</div>
                    <PiSprayBottleLight size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Accuracy
                    <div className="text-xl mt-1 mb-6">4.7</div>
                    <PiCheckCircle size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Check-in
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <HiOutlineKey size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Communication
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <BsChatSquare size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Location
                    <div className="text-xl mt-1 mb-6">4.8</div>
                    <CiMap size={36}/>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-5">
                    Value
                    <div className="text-xl mt-1 mb-6">5.0</div>
                    <GoTag size={36}/>
                </div>

            </div>

            <Separator/>

            {/* ---------------------------------------------------------Reviews------------------------------------------------------- */}

            <div className="invisible h-0 md:h-fit md:visible md:grid grid-cols-2 justify-self-stretch md:py-10">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>

            <div className="md:hidden">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="xl: w-full"
                    >
                    <div className="flex justify-between my-6 mr-6">
                        <div className="text-2xl font-semibold text-mediumText mt-3">What guests are saying about Harshit</div>
                        <div className="flex justify-between">
                            <div className="mr-6"><CarouselPrevious /></div>
                            <div className="ml-6"><CarouselNext /></div>
                        </div>
                    </div>
                    <CarouselContent className=" w-full min-w-[500px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <ScrollArea className="flex">
                        <div className="flex ">
                            <CarouselItem key={index} className="xl:basis-1/2">
                                <ReviewCard/>
                            </CarouselItem>
                        </div>
                        <ScrollBar orientation="horizontal"/>
                        </ScrollArea> 
                        ))}
                    </CarouselContent>
                </Carousel>

                
            </div>

            <div className="py- mb-4 m-1 text-lg">
                <Button className="text-darkText outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                    Show all 9 review
                </Button>
            </div>
            <Separator/>
{/* -----------------------------------------------------------user info --------------------------------------------------------------- */}
            
            <div className="flex-row py-12 lg:flex">
                
                <div className="flex flex-col justify-center min-w-[325px] max-w-[400px] ">
                    <div className="text-2xl font-semibold text-darkText">Meet your host</div>
                    <UserCard className="my-4  w-[400px] h-[280px]"/>
                    <div className="my-4">
                        <IconWithLabel icon = "/caterogies/A frames.jpg" className="pl-0">Where I went to school: Jodhpur Public School</IconWithLabel>
                        <IconWithLabel icon = "/caterogies/A frames.jpg" className="pl-0">My work: CEO Zostel, Zo World</IconWithLabel>
                    </div>
                    <div className="py-2">​Zostel is India's first and largest chain of budget hostels for the sociable explorer. ​​Our properties....</div>
                    <Link href = "/user/1" className="text-darkText font-semibold underline">Show more</Link>
                </div>

                <div className = "flex flex-col py-10 lg:px-24 lg:py-20 ">
                    <Separator className="lg:invisible"/>
                    <div className="text-xl font-semibold mt-8 lg:mt-0">
                        Host details
                    </div>
                    <div className="text-lg mt-4 ">
                        Response rate: 98%
                    </div>
                    <div className="text-lg mb-6">
                        Responds within an hour
                    </div>
                    
                    <Button variant={"outline"} size={"lg"} className= "bg-gray-800 h-12 outline-0 font-semibold text-md w-1/3 mb-6 hover:bg-gray-900 text-white rounded-lg">
                        Message Host
                    </Button>
                    <div className="text-lg mb-4">
                        Registration number: HOTN005387md 
                    </div>

                    <Separator/>

                    <IconWithLabel icon = "/caterogies/A frames.jpg" className="text-xs pl-0 mt-4 text-lightText"> 
                        To help protect your payment, always use Airbnb to send money and communicate with hosts.
                    </IconWithLabel>
                </div>

            </div>
          
        </div>


    </div>
    </>
  );
}
