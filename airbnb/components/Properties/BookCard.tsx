"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { GuestDropdown } from "./GuestDropdown";
import { CalenderPop } from "./CalenderPop";
import { PropertyType } from "./Properties";
import { Skeleton } from "../ui/skeleton";
import { PropertyInfoProps } from './PropertyInfo';

export const BookCard = ({ property, propertyInfo }: { property?: PropertyType, propertyInfo ?: PropertyInfoProps}) => {
    const Price = (property?.price_per_night??0)*85;
    const SpecialOffer = 1000;
    const ServiceFee = 500;
    return (
        <Card className="p-6">
            <div className="text-2xl font-semibold flex space-x-3 items-end text-darkText">
                <div className="line-through text-lightText items-center">{property && (<>₹{1.5*(Price ?? 0)}</>)}</div>
                <div className="items-center">{property? (<>₹{Price}</>) : 
                    (<Skeleton className="h-8 w-32 inline-flex"/>)}
                </div>
                <div className="text-sm pb-0.5">{property? (<>night</>) : 
                    (<Skeleton className="h-4 w-10 ml-1 inline-flex"/>)}
                </div>
            </div>
            <div className="my-5 w-full rounded-md border border-lightText">
                <CalenderPop propertyInfo={propertyInfo}/>
                <Separator className="h-[1px] bg-lightText"/>
                <GuestDropdown/>
            </div>
            <Button className="w-full rounded-sm font-semibold bg-airbnb hover:bg-airbnbDark text-white hover:text-white">
                Reserve
            </Button>
            <div className="text-sm text-lightText text-center p-3">You won't be charged yet</div>
            {property?
                (<div className="flex justify-between p-2 text-mediumText ">
                    <div className="underline md">₹{Price}x 1 night</div>
                    <div>₹{Price} </div>
                </div>)
            :
                (<div className="flex justify-between p-2 text-mediumText ">
                    <Skeleton className="h-6 w-20 "/>
                    <Skeleton className="h-6 w-14"/>
                </div>)
            }
            <div className="flex justify-between p-2 text-mediumText ">
                <div className="underline md">Special offer</div>
                <div className="text-green-500">-₹{SpecialOffer}</div>
            </div>
            <div className="flex justify-between p-2 text-mediumText ">
                <div className="underline md">Airbnb service fee</div>
                <div >₹{ServiceFee} </div>
            </div>
            <Separator className="h-[0.5px] bg-lightText my-2"/>
            <div className="flex justify-between p-2 text-darkText font-semibold mt-5">
                <div className="">Total before Taxes</div>
                <div>₹{(Price ?? 0) - SpecialOffer + ServiceFee}</div>
            </div>
        </Card>
    );
}