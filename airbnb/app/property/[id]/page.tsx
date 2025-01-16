import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { PropertiesImages } from "@/components/Properties/PropertyImages";
import { BookCard } from "@/components/Properties/BookCard";
import Image from "next/image";
import { IconWithLabel } from "@/components/ui/IconWIthLabel";
import { CalendarCard } from "@/components/Properties/CalenderCard";

export default function PropertyDetailPage() {
  return (
    <>
    <div>
        <div className="w-full mx-auto px-10 lg:px-20 xl:px-36 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText font-semibold text-2xl">
                    StayVista at Desert Palms in Anjar-Kutch w/t Pool
                </div>
                <div>
                    <Button className="text-darkText rounded-md">
                        <RiShare2Fill /> Share
                    </Button>
                    <Button className="text-darkText rounded-md">
                        <FaRegHeart /> Save
                    </Button>
                </div>
            </div>
        </div>
        <div className="px-10 lg:px-20 xl:px-36">
            <PropertiesImages/>
        </div>
        

        <div className="flex px-10 lg:px-20 xl:px-36 py-3">
            
            
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-hidden">
                <div className="text-darkText font-semibold text-lg mb-5">
                    Entire villa in Anjar, India
                    <p className="text-sm text-lightText">15 guests5 bedrooms4 beds7 bathrooms</p>
                    <div className="text-sm">★ 4 Reviews</div>
                </div>
                <Separator/>
                <div className="py-2 flex flex-row items-center">
                    <Image
                        width={50}
                        height={50}
                        className="m-5 rounded-full object-cover logoSize"
                        src="/temp.avif"
                        alt="Small Image 1"
                    />
                    <div className="text-darkText font-semibold text-lg">
                        Hosted by Atul
                        <p className="text-sm text-lightText">2 years hosting</p>
                    </div>
                </div>

                <Separator/>

                <div className="py-4">
                    <IconWithLabel className="my-2" icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Shared bathroom</div> 
                    <div className="text-lightText ml-2 text-sm">You'll share the bathroom with others</div>
                    </IconWithLabel>
                    <IconWithLabel className="my-2"  icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Designed for staying cool</div> 
                    <div className="text-lightText ml-2 text-sm">Beat the heat with the A/C and ceiling fan.</div>
                    </IconWithLabel>
                    <IconWithLabel className="my-2" icon = "/caterogies/A frames.jpg">                        
                    <div className="font-semibold text-mediumText ml-2">Outdoor entertainment</div> 
                    <div className="text-lightText ml-2 text-sm">The pool and outdoor seating are great for summer trips.</div>
                    </IconWithLabel>    
                </div>
                
                <Separator/>

                <div className="py-8 text-mediumText text-md">
                    A bed in a petite mixed dorm with AC, a private locker, and a shared washroom outside.
                    Explore the susegad lifestyle of Goa at our vibrant and colourful Zostel Goa (Morjim).
                    Choose from snug dorms to private and luxurious suites for a rejuvenating stay at our 
                    hostel. Meanwhile, our sprightly and spacious common areas feature a range of games 
                    that would serve as a perfect icebreaker for social interactions with fellow travellers...
                    
                    <div className="my-2 font-semibold underline  text-darkText">Show more</div>
                </div>            

                <Separator/>

                <div className="grid grid-cols-1 lg:grid-cols-2 text-mediumText py-8">
                    <div className="text-2xl font-semibold text-darkText lg:col-span-2 mb-2">What this place offers?</div>

                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Wifi </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Free parking on premises </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Pool </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Paid washing machine </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Air conditioning </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Smoking allowed </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Exterior security cameras on property </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Carbon monoxide alarm </IconWithLabel>
                    <IconWithLabel icon = "/caterogies/A frames.jpg"> Smoke alarm </IconWithLabel>
                </div>
                
                <div className="py-2 mb-4 m-1 text-lg">
                    <Button className="text-darkText outline-gray-500  font-semibold" size={"lg"} variant={"Border"}>
                        Show all 17 ameneties
                    </Button>
                </div>

                <Separator/>

                <div className="my-6">
                    <div className="text-2xl font-semibold text-darkText mb-2">2 nights in Anjar</div>
                    <div className="text-sm text-lightText">16 Jan 2025 - 18 Jan 2025</div>

                    <div className="flex justify-between py-2 overflow-x-hidden">
                        <CalendarCard/>
                        <div className = "hidden xl:flex"><CalendarCard />  </div>
                    </div>

                </div>
                
            </div>
            <div className="invisible w-0 md:visible md:w-1/2 lg:w-2/5 pr-0 py-5 pl-0 md:pl-12 lg:pl-20  md:sticky md:top-0 md:h-screen">
                <BookCard />
            </div>
        </div>


        <div className="w-full invisible md:visible mx-auto px-10 lg:px-20 xl:px-36 p-3">
            <Separator/>
            <div className="flex h-44 font-semibold text-sm text-darkText p-10 pl-0">
                <div className="w-1/6 pl-0 pr-3">
                    Overall rating
                    <div className="p-2 text-xs font-normal justify-start text-lightText">
                        <div>5</div>
                        <div>4</div>
                        <div>3</div>
                        <div>2</div>
                        <div>1</div>
                    </div>
                    
                </div>
                <Separator orientation="vertical"/>
                <div className="w-1/6 justify-self-start px-3">
                    Cleanliness
                    <div className="text-xl mt-1">4.7</div>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-3">
                    Accuracy
                    <div className="text-xl mt-1">4.7</div>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-3">
                    Check-in
                    <div className="text-xl mt-1">4.7</div>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-3">
                    Communication
                    <div className="text-xl mt-1">4.7</div>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-3">
                    Location
                    <div className="text-xl mt-1">4.7</div>
                </div>
                <Separator orientation="vertical"/>

                <div className="w-1/6 justify-self-start px-3">
                    Value
                    <div className="text-xl mt-1">4.7</div>
                </div>

            </div>
            
        </div>


    </div>
    </>
  );
}
