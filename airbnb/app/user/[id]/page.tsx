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
import Link from "next/link";
import { ReviewCard } from "@/components/User/ReviewCard";

export default function UserDetailPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:items-start lg:flex-row px-20">
            <div className="flex flex-col justify-center p-12 min-w-[480px] max-w-[500px] lg:sticky lg:top-0 lg:h-screen">
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
            <div className="overflow-y-scroll">
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
                <div className="px-12">
                    <Separator className=" h-px bg-gray-300 "/>
                    <div>
                        <ReviewCard/>
                    </div>
                </div>
            </div>

        </div>
    );
}