import { Separator } from "@radix-ui/react-separator";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../ui/Card";
import { CalenderMain } from "./CalenderMain";
import { useAuthDate } from "@/context/AuthContext";
import { PropertyInfoProps } from './PropertyInfo';

export const CalenderPop = ({propertyInfo}: {propertyInfo ?: PropertyInfoProps}) => {

    const [isOpen, setIsOpen] = useState(false);
    const { checkIn, checkOut, setCheckIn, setCheckOut } = useAuthDate();
    
    useEffect(() => {
        setIsOpen(false);
    }, []); 

        
    return (
        <div className="w-full flex z-30">
            <div className={`flex justify-evenly w-full border  outline-gray-500 hover:outline-2 hover:outline-gray-400  z-30 p-0  ${isOpen? "rounded-md" : "rounded-t-md"}`}>
                <Button variant="active" className="w-1/2 items-center text-darkText m-0 hover:outline hover:outline-2 rounded-md hover:outline-black " onClick={() => {setIsOpen(true)}}>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="font-semibold text-xs text-darkText">CHECK-IN</div>
                        <div className="font-semibold text-xs text-lightText">{checkIn?checkIn:"Add dates"}</div>
                    </div>
                </Button>            
                <Separator orientation="vertical" className="w-[1px] bg-lightText z-0"/>
                <Button variant="active" className="w-1/2 m-0 py-1 items-center text-darkText hover:outline hover:outline-2 rounded-md hover:outline-black " onClick={() => {setIsOpen(true)}}>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="font-semibold text-xs text-darkText">CHECKOUT</div>
                        <div className="font-semibold text-xs text-lightText">{checkOut?checkOut:"Add dates"}</div>
                    </div>
                </Button>    
            </div>
            

            {isOpen && (
                <Card className='w-[765px] absolute top-[40px] left-90 right-0 rounded-xl  px-8  py-6 z-20  bg-white'>
                    <CalenderMain propertyInfo={propertyInfo}/>
                    <Button variant = {"active"} onClick={() => {setIsOpen(false)}} className="w-full text-md items-end text-darkText font-semibold underline">Close</Button>
                </Card>
            )}    
        </div>
    )
}

