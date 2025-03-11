import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import  Image  from "next/image";

const BecomeHost = () => {
  return (
    <div>
      <nav className ="fixed top-0 w-full h-24 z-10 py-0 px-16 bg-white mb-16 border-b flex justify-between items-center">
        
          <Image 
            width={32}
            height={32}
            src="/AirBnbBlack.svg"
            alt="Small Image 1"
          />
          <div>
            <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold mr-4">Questions?</Button>
            <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold">Save & exit</Button>
          </div>
          
      </nav>
      <Carousel
        opts={{
            align: "start",
        }}
        className="xl:w-full mt-48"
        >
        <div className="flex justify-between my-6 mr-6">
            <div className="text-2xl font-semibold text-mediumText mt-3">Harshit's listings</div>
            <div className="flex justify-between">
                <div className="mr-6"><CarouselPrevious /></div>
                <div className="ml-6"><CarouselNext /></div>
            </div>
        </div>
        
        <CarouselContent className="w-full mb-10">
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basic-1/1 md:basis-1/2 lg:basis-1/3">
                <div>category</div>
                <div>amenities</div>
                <div>type of guests</div>
                <div>property images</div>
                
            </CarouselItem>
            ))}
        </CarouselContent>   
        <div className ="fixed bottom-0 w-full h-24 px-16 bg-white border-black border-t-4  flex justify-between items-center">
            <Button size = {"lg"} className="underline text-darkText font-semibold mr-4">Back </Button>
            <Button size = {"lg"} className="outline outline-1 text-white bg-black rounded-md font-semibold">Next </Button>
        </div>          
    </Carousel>
    </div>
  )
}

export default BecomeHost;

