import { UserCard } from "@/components/User/UserCard";
import { IoMdCheckmark } from "react-icons/io";
import { FaFlag } from "react-icons/fa6";
import { Separator } from "@radix-ui/react-separator";
import { ReviewCard } from "@/components/User/ReviewCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/Properties/PropertyCard";
import { Properties } from "@/components/Properties/Properties";

export default function UserDetailPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:items-start lg:flex-row px-20">
            <div className="flex flex-col mt-8 justify-center p-12 min-w-[480px] max-w-[500px] lg:sticky lg:top-0 lg:h-screen">
                <UserCard/> 
                <div className="w-full border border-gray-300 rounded-xl p-6 my-12 ">
                    <div className="text-2xl text-darkText mb-4">Tarpan's confirmed information</div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Identity
                    </div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Email address
                    </div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Phone number
                    </div>
                </div>
                <div className="flex items-center">
                    <FaFlag className="mx-3"/>
                    <Link href="/" className="underline font-semibold">Report this profile</Link>
                </div>
            </div>
            <div className="overflow-y-hidden">                
                <div className="min-w-[480px] max-w-[500px] lg:max-w-[1000px] w-full p-10 xl:grid grid-cols-2">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <div className="col-span-2 text-3xl mr-2 text-darkText font-bold p-2">About Harshit</div>
                        <Link href={'/edit_profile'}>
                            <Button variant={"active"} size={"lg"} className="w-[160px] mx-2 md:mx-0 text-md rounded-md font-semibold bg-airbnb hover:bg-airbnbDark
                            text-white hover:text-white">
                                Edit profile
                            </Button>
                        </Link>
                    </div>
                       
                    <div className="col-span-2 mt-5 p-2">Zostel is India's first and largest chain of budget hostels for the sociable explorer.
                        Our properties across India and Nepal are a melting pot of cultures and social connections. 
                        The budget stays that we offer are as much about exploration as they are about social 
                        interactions with fellow travellers.
                    </div>
                </div>
                <div className="px-12 min-w-[500px] max-w-[500px] xl:min-w-[800px] xl:max-w-[825px]">
                    <Separator className=" h-px bg-gray-300 "/>
                    <div>
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
                            <CarouselContent className="w-full min-w-[500px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index} className="xl:basis-1/2">
                                        <ReviewCard/>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="text-xl text-darkText underline my-4">Show more reviews</div>
                    <Separator className=" h-px bg-gray-300 my-2"/>

                    <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="xl: w-full"
                            >
                            <div className="flex justify-between my-6 mr-6">
                                <div className="text-2xl font-semibold text-mediumText mt-3">Harshit's listings</div>
                                <div className="flex justify-between">
                                    <div className="mr-6"><CarouselPrevious /></div>
                                    <div className="ml-6"><CarouselNext /></div>
                                </div>
                            </div>
                            
                            <CarouselContent className="w-full">
                                {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="basic-1/1 md:basis-1/2 lg:basis-1/3">
                                    <PropertyCard property={{
                                            id: "1",
                                            title: "Jannath Homes",
                                            price_per_night: 2500,
                                            image_url: "/temp.avif"
                                        }}/>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            
                        </Carousel>
                </div>
            </div>

        </div>
    );
}