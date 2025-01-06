import { UserCard } from "@/components/User/UserCard";
import { IoMdCheckmark } from "react-icons/io";
import { FaFlag } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { BsBalloon } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiBookOpenText } from "react-icons/pi";
import { BsChatSquareHeart } from "react-icons/bs";
import { PiGlobeStand } from "react-icons/pi";
import { LuCoffee } from "react-icons/lu";
import { PiPawPrint } from "react-icons/pi";
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
import Image from "next/image";

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
                    <div className="col-span-2 text-3xl text-darkText font-bold p-2">About Harshit</div>
                    <div className="flex p-2">
                        <GoBriefcase size={24} className="mr-3"/> 
                        My work: CEO Zostel, Zo World
                    </div>
                    <div className="flex p-2">
                        <HiOutlineMusicalNote size={24} className="mr-3"/> 
                        Favourite song: Country Roads
                    </div>
                    <div className="flex p-2">
                        <BsBalloon size={24} className="mr-3"/> 
                        Born in the 90s
                    </div>
                    <div className="flex p-2">
                        <SlGraduation size={24} className="mr-3"/> 
                        Where I went to school: Jodhpur public school
                    </div>
                    <div className="flex p-2">
                        <GoClock size={24} className="mr-3"/> 
                        I spend too much time: Reading, Travelling
                    </div>
                    <div className="flex p-2">
                        <IoMdHeartEmpty size={24} className="mr-3"/> 
                        I'm obsessed with: Gaming and Poker
                    </div>
                    <div className="flex p-2">
                        <PiBookOpenText size={24} className="mr-3"/> 
                        My biography title: Meandering with DV!
                    </div>
                    <div className="flex p-2">
                        <BsChatSquareHeart size={24} className="mr-3"/> 
                        Speaks English and Hindi
                    </div>
                    <div className="flex p-2">
                        <PiGlobeStand size={24} className="mr-3"/> 
                        Lives in Gurugram, India
                    </div>
                    <div className="flex p-2">
                        <LuCoffee size={24} className="mr-3"/> 
                        What's for breakfast: Eggs and Black Coffee
                    </div>
                    <div className="flex p-2">
                        <PiPawPrint size={24} className="mr-3"/> 
                        Pets: Don't have any, but love them all!
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
                            
                            <CarouselContent className="w-full min-w-[500px]">
                                {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="xl:basis-1/2">
                                    <div className="cursor-pointer m-3 rounded-xl">
                                        <div>
                                            <div className="relative">
                                                <div className="relative overflow-hidden aspect-square rounded-xl">
                                                    <Image
                                                        fill
                                                        sizes="(max-width: 256px) 256px, (max-width: 256px): 256px, 256px"
                                                        className="hover:scale-R110 object-cover transition h-[256px] w-[256px]"
                                                        src="/temp.avif" 
                                                        alt="/temp.avif"
                                                    />
                                                </div>
                                               
                                            </div>
                                            <div className="mt-4 flex flex-col space-x-0 text-lightText">
                                                <div className="text-md flex justify-between font-semibold m-0 p-0 text-darkText">
                                                    <div>Harshit Goyal</div>
                                                    <div>★ 4.3</div>
                                                </div>
                                                <div className="text-sm m-0 p-0">
                                                    2,123 away
                                                </div>
                                                <div className="text-sm m-0 p-0">
                                                    123.213
                                                </div>
                                                <div className="text-sm mt-2 p-0 text-darkText">
                                                <strong>$ 500</strong> per night
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            
                        </Carousel>
                </div>
            </div>

        </div>
    );
}