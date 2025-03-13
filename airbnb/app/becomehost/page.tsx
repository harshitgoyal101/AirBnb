import { AddDescription } from "@/components/BecomHost/AddDescription";
import { AddPhotos } from "@/components/BecomHost/AddPhotos";
import { AmenitiesSelect } from "@/components/BecomHost/AmenitiesSelect";
import { CategorySelect } from "@/components/BecomHost/CategorySelect";
import { PlaceInfo } from "@/components/BecomHost/PlaceInfo";
import { PlaceSelect } from "@/components/BecomHost/PlaceSelect";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "@/components/ui/carousel"
import  Image  from "next/image";
import Link from "next/link";

const BecomeHost = () => {
  return (
    <div>
      <nav className ="fixed top-0 w-full h-24 z-10 py-0 px-16 bg-white border-b flex justify-between items-center">
        <Link href={"/"}>
          <Image 
            width={32}
            height={32}
            src="/AirBnbBlack.svg"
            alt="Small Image 1"
          />
        </Link>
          <div>
            <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold mr-4">Questions?</Button>
            <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold">Save & exit</Button>
          </div>
          
      </nav>
      <Carousel
        opts={{
            align: "start",
        }}
        className="xl:w-full mt-32"
        >
                
        <CarouselContent className="w-full mb-10">
            <CarouselItem className="mb-24 max-h-[475px] overflow-y-auto">
                <CategorySelect/>
            </CarouselItem>
            
            <CarouselItem >
                <PlaceSelect/>
            </CarouselItem>

            <CarouselItem >
                <PlaceInfo/>
            </CarouselItem>

            <CarouselItem >                
              <AmenitiesSelect/>
            </CarouselItem>
            
            <CarouselItem >                
              <AddPhotos/>
            </CarouselItem>
                
            <CarouselItem >                
              <AddDescription/>
            </CarouselItem>

        </CarouselContent>   
        <div className ="fixed bottom-0 w-full h-24 px-16 bg-white border-black border-t-4  flex justify-between items-center">
            <Button size = {"lg"} className="underline text-darkText font-semibold mr-4 z-10">Back <CarouselPrevious className="opacity-0 hover:opacity-0 disabled:opacity-0" size={"lg"}/> </Button>
            <Button size = {"lg"} className="outline outline-1 text-white bg-gray-800 hover:bg-black hover:text-white rounded-md font-semibold">Next <CarouselNext size={"lg"} className="opacity-0 hover:opacity-0 disabled:opacity-0"/></Button>
        </div>          
    </Carousel>
    </div>
  )
}

export default BecomeHost;

