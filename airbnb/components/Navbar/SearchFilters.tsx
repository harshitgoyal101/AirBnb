import { InputwithLabel } from "../ui/input-label";
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/context/AuthContext";
import React from 'react';

export const SearchFilters = (params: {tab: string}) => {

    const tab = params.tab;
    const {checkin,checkout,setCheckin,setCheckout} = useAuth();
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
                        placeholder="Add dates"
                        value = {checkin}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": true,
                                "checkOut": false,
                                "addGuest": false,
                            })}
                        }
                        onChange={(e)=>setCheckin(e.target.value)}
                    />
                    <Separator orientation="vertical" className="h-8" 
                        style={{visibility:(hoverState.checkOut||hoverState.checkIn)?"hidden":"visible"}}/>
                    <InputwithLabel 
                        label="Check out" 
                        placeholder="Add dates"
                        value={checkout}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={
                            () => { setHoverState({
                                "search": false,
                                "checkIn": false,
                                "checkOut": true,
                                "addGuest": false,
                            })}
                        }
                        onChange={(e)=>setCheckout(e.target.value)}
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
            </div>
        </div>
    );
}



// return isButton ? (
//     <Button
//         className={cn("flex justify-between m-0 p-3 h-14", className)}
//         style={{ width: width }}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onMouseLeave}
//     >
//         <div className="text-left">
//             <p className="text-darkText text-xs px-4">{label}</p>
//             <p className="text-lightText text-xs px-4">{placeholder}</p>
//         </div>
//         <div className="search_btn">
//             <FaSearch />
//         </div>
//     </Button>
// ) : (
//     <div className={cn("flex flex-col px-4 py-2", className)} style={{ width: width }}>
//         <label className="text-darkText text-xs">{label}</label>
//         <input
//             type="text"
//             className="border-none text-lightText text-sm outline-none w-full"
//             placeholder={placeholder}
//             value={value ?? ""}
//             onChange={onChange}
//             onMouseEnter={onMouseEnter} // Move hover events to input
//             onMouseLeave={onMouseLeave}
//         />
//     </div>
// );