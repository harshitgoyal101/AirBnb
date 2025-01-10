import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { RiSoundModuleLine } from "react-icons/ri";
import { Switch } from "@/components/ui/switch"
export const Categories = () => {
    return (
        <div className="w-full mx-auto px-24 py-3 flex space-x-8 items-center">
            
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
            >
            <div className="flex">
                <div className="mr-9 p-2"><CarouselPrevious variant = "outline"/></div>
                <div>
                    <CarouselContent className=" max-w-sm lg:max-w-lg xl:max-w-3xl" >
                        {Array.from({ length: 54 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/10">
                            <div className="px-4">
                            <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
                            <Image
                                width={20}
                                height={20}
                                src="/caterogies/A frames.jpg" 
                                alt="A frames.jpg"
                            />
                            <p className="text-xs">A frames</p>
                        </div>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                </div>
                <div className="p-2"><CarouselNext variant = "outline" /></div>
            </div>

            </Carousel>
            <Button variant={"Border"} className="hidden lg:flex">
                <RiSoundModuleLine className="rotate-90"/>
                <div className="text-mediumText font-sm py-2">Filter</div>
            </Button>

            <Button variant={"Border"}  className="hidden lg:flex"> 
                <div className="text-mediumText font-sm py-2"> Display total before taxes</div>
                <Switch/>
            </Button>
        </div>
    );
}