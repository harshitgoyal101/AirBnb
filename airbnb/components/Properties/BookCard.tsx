"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { InputwithLabel } from "../ui/input-label";
import { Separator } from "@radix-ui/react-separator";

export const BookCard = () => {
    return (
        <Card className="p-6">
            <div className="text-2xl font-semibold flex space-x-3 items-end text-darkText">
                <div className="line-through text-lightText">$9,972</div>
                <div>$7,972</div>
                <div className="text-sm pb-0.5">night</div>
            </div>
            <div className="my-5 w-full rounded-md border border-lightText">
                <div className="w-full flex">
                    <InputwithLabel 
                        label="Check in" 
                        placeholder="Add dates"
                        className="rounded-sm"
                        width="50%"
                    />
                    <Separator orientation="vertical" className="w-[1px] bg-lightText"/>
                    <InputwithLabel 
                        label="Check out" 
                        placeholder="Add dates"
                        className="rounded-md"
                        width="50%"
                    />
                </div>
                <Separator className="h-[1px] bg-lightText"/>
                <InputwithLabel 
                    label="Guests" 
                    placeholder="1 guest"
                    className="rounded-md"
                    width="100%"
                />
            </div>
            <Button className="w-full rounded-sm font-semibold bg-airbnb hover:bg-airbnbDark text-white hover:text-white">
                Reserve
            </Button>
        </Card>
    );
}