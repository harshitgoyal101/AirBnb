import { InputwithLabel } from "../ui/input-label";
import { Separator } from "@/components/ui/separator"
import { useAuthDate } from "@/context/AuthContext";
import React, { useEffect, useState } from 'react';
import { CalenderMain } from "../Properties/CalenderMain";
import { Card } from "../ui/Card";
import { Button } from "../ui/button";

export const SearchFilters = (params: {tab: string}) => {

    const tab = params.tab;
    const [isOpen, setIsOpen] = useState(false);
    const { checkIn, checkOut, setCheckIn, setCheckOut } = useAuthDate();
    
    useEffect(() => {
        setIsOpen(false);
    }, []); 

    const [hoverState, setHoverState] = React.useState({
        "search": false,
        "checkIn": false,
        "checkOut": false,
        "addGuest": false,
    });

    const onMouseLeave = () => {
        setHoverState({
            "search": false,
            "checkIn": false,
            "checkOut": false,
            "addGuest": false,
        })
    }

    return (
        <div className="flex flow-row items-center justify-between border rounded-full shadow-lg p-0">
            <div>
                {tab != "short" ?
                <div className="flex flex-rows items-center justify-between">
                    <InputwithLabel 
                        label="Where" 
                        placeholder="Search destination" 
                        width="250px"
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": true,
                                "checkIn": false,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.search||hoverState.checkIn)?"hidden":"visible"}}/>
                    {tab == "stays" ? <>
                    <InputwithLabel 
                        label="Check in"
                        placeholder={checkIn?checkIn:"Add dates"}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": true,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                        onClick={() => {setIsOpen(true);}}
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.checkOut||hoverState.checkIn)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        label="Check Out"
                        placeholder={checkOut?checkOut:"Add dates"}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": false,
                                "checkOut": true,
                                "addGuest": false,
                            })}
                        }
                        onClick={() => {setIsOpen(true);}}
                    />
                    </> : <> <InputwithLabel 
                        label="Dates" 
                        placeholder="Add dates"
                        onMouseLeave={onMouseLeave}
                        width="250px"
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": true,
                                "checkOut": true,
                                "addGuest": false,
                            })}
                        }
                    />
                    <Separator orientation="vertical" className="h-8" style={{visibility:"hidden"}} /> 
                    </>}   
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.checkOut||hoverState.addGuest)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        label="Who" 
                        placeholder="Add guests"
                        onMouseLeave={onMouseLeave}
                        width="250px"
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": false,
                                "checkOut": false,
                                "addGuest": true,
                            })}
                        }
                        isButton
                    />
                </div>
                : <div className="flex flex-rows items-center justify-between">
                    <InputwithLabel 
                        label="Anywhere"
                        width="110px"
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": true,
                                "checkIn": false,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.search||hoverState.checkIn)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        label="Any week"
                        width="110px"
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": true,
                                "checkIn": false,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.search||hoverState.checkIn)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        placeholder="Add guests" 
                        onMouseLeave={onMouseLeave}
                        width="170px"
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": false,
                                "checkOut": false,
                                "addGuest": true,
                            })}
                        }
                        isButton
                    />
                </div>}
                {isOpen && (
                    <Card className='w-[765px] absolute top-[40px] rounded-xl  px-8  py-6 z-20  bg-white'>
                        <CalenderMain/>
                        <Button variant = {"active"} onClick={() => {setIsOpen(false)}} className="w-full text-md items-end text-darkText font-semibold underline">Close</Button>
                    </Card>
                )}    
            </div>
        </div>
    );
}