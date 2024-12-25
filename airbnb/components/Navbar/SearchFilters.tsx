import { InputwithLabel } from "../ui/input-label";
import { Separator } from "@/components/ui/separator"
import React from 'react';

export const SearchFilters = (params: {tab: string}) => {

    const tab = params.tab;

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
                            })
                            console.log(hoverState);
                            }
                        }
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.search||hoverState.checkIn)?"hidden":"visible"}}/>
                    {tab == "stays" ? <>
                    <InputwithLabel 
                        label="Check in" 
                        placeholder="Add dates"
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": true,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.checkOut||hoverState.checkIn)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        label="Check out" 
                        placeholder="Add dates"
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": false,
                                "checkOut": true,
                                "addGuest": false,
                            })}
                        }
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
                            })
                            console.log(hoverState);
                            }
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
                            })
                            console.log(hoverState);
                            }
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
            </div>
        </div>
    );
}