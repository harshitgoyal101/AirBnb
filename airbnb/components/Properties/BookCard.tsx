"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { InputwithLabel } from "../ui/input-label";
import { Separator } from "@radix-ui/react-separator";
import { CalendarPop } from "./CalendarPop"
import { DropDown } from "./DropDown"
export const BookCard = () => {
    return (
        <Card className="p-6">
            <div className="text-2xl font-semibold flex space-x-3 items-end text-darkText">
                <div className="line-through text-lightText">₹7,000</div>
                <div>₹6,000</div>
                <div className="text-sm pb-0.5">night</div>
            </div>
            <div className="my-5 w-full rounded-md border border-lightText">
                <CalendarPop className = "justify-center w-full"/>
                <Separator className="h-[1px] bg-lightText"/>
                <DropDown/>
            </div>
            <Button className="w-full rounded-sm font-semibold bg-airbnb hover:bg-airbnbDark text-white hover:text-white">
                Reserve
            </Button>
            <div className="text-sm text-lightText text-center p-3">You won't be charged yet</div>
            <div className="flex justify-between p-2 text-mediumText ">
                <div className="underline md">₹6,000 x 1 night</div>
                <div>₹5,000 </div>
            </div>
            <div className="flex justify-between p-2 text-mediumText ">
                <div className="underline md">Special offer</div>
                <div className="text-green-500">-₹1,000</div>
            </div>
            <div className="flex justify-between p-2 text-mediumText ">
                <div className="underline md">Airbnb service fee</div>
                <div >₹5,00 </div>
            </div>
            <Separator className="h-[0.5px] bg-lightText my-2"/>
            <div className="flex justify-between p-2 text-darkText font-semibold mt-5">
                <div className="">Total before Taxes</div>
                <div>₹5,500 </div>
            </div>
        </Card>
    );
}