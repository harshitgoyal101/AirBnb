import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Categories = () => {
    return (
        <div className="w-full mx-auto px-24 py-3 flex space-x-8">
            
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-[70%] max-w-sm"
            >
            <div className="flex">
                <div className=""><CarouselPrevious/></div>
                <div>
                    <CarouselContent>
                        {Array.from({ length: 15 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/10">
                            <div className="p-1">
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
                <div><CarouselNext /></div>
            </div>

            </Carousel>


        </div>
    );
}