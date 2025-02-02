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
import { IconWithLabel } from "./ui/IconWIthLabel";

export const Categories = ({
    withTax, setWithTax
}: {
    withTax: boolean, setWithTax: (value: boolean) => void
}) => {
    return (
        <div className="w-full mx-auto px-12 md:px-24 lg:px-24 py-3 flex-col lg:flex-row flex space-x-8 items-center justify-end">
            <Carousel className="w-full md:overflow-auto relative">
                <CarouselPrevious variant="outline" className="absolute left-1 top-1/2 transform -translate-y-1/2 "/>    
                <div className="mx-12">
                    <CarouselContent>
                        {Array.from({length: 54}).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/10 mt-2">
                                <IconWithLabel type="Amazing pools"/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
                <CarouselNext variant="outline" className="absolute right-1 top-1/2 transform -translate-y-1/2 "/>
            </Carousel>            
            <div className="md:space-x-4 mt-2 lg:mt-0 hidden sm:flex">
                <Button variant={"outline"} className="rounded-lg">
                    <RiSoundModuleLine className="rotate-90"/>
                    <div className="text-mediumText font-sm py-2">
                        Filter
                    </div>
                </Button>

                <Button asChild variant={"outline"} className="rounded-lg" onClick={() => {
                    setWithTax(!withTax)
                }}> 
                    <div className="text-mediumText font-sm py-2">              
                        Display total before taxes
                        <Switch checked={withTax}/>
                    </div>
                </Button>
            </div>
        </div>
    );
}