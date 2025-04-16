'use client'
import { AddDescription } from "@/components/BecomHost/AddDescription";
import { AddPhotos } from "@/components/BecomHost/AddPhotos";
import { AmenitiesSelect } from "@/components/BecomHost/AmenitiesSelect";
import { CategorySelect } from "@/components/BecomHost/CategorySelect";
import { PlaceInfo } from "@/components/BecomHost/PlaceInfo";
import { PlaceSelect } from "@/components/BecomHost/PlaceSelect";
import { HostNav } from "@/components/Navbar/HostNav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";

interface PlaceInfoType {
    guests: number;
    bedrooms: number;
    bathrooms: number;
}

const BecomeHost = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("Desert");
  const [selectedPlace, setSelectedPlace] = useState<string | null>("room");
  const [placeInfo, setPlaceInfo] = useState<PlaceInfoType>({
    guests: 1,
    bedrooms: 1,
    bathrooms: 1
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePlaceSelect = (placeType: string | null) => {
    setSelectedPlace(placeType);
  };

  const handlePlaceInfoChange = (info: PlaceInfoType) => {
    setPlaceInfo(info);
  };

  const handleAmenitiesChange = (amenities: string[]) => {
    setSelectedAmenities(amenities);
  };

  return (
    <div>
      <HostNav/>
      <Carousel
        opts={{
            align: "start",
        }}
        className="xl:w-full mt-32"
        >
                
        <CarouselContent className="w-full mb-10">
            <CarouselItem className="mb-24 max-h-[500px] overflow-y-auto">
                <CategorySelect onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
            </CarouselItem>
            
            <CarouselItem >
                <PlaceSelect onPlaceSelect={handlePlaceSelect} selectedPlace={selectedPlace}/>
            </CarouselItem>

            <CarouselItem >
                <PlaceInfo onInfoChange={handlePlaceInfoChange} />
            </CarouselItem>

            <CarouselItem className="mb-24 max-h-[500px] overflow-y-scroll">                
              <AmenitiesSelect onAmenitiesChange={handleAmenitiesChange} />
            </CarouselItem>
            
            <CarouselItem className="mb-24 max-h-[500px] overflow-y-scroll" >                
              <AddPhotos/>
            </CarouselItem>
                
            <CarouselItem >                
              <AddDescription/>
            </CarouselItem>

        </CarouselContent>   
        <div className ="fixed bottom-0 w-full h-24 px-16 bg-white border-black border-t-4  flex justify-between items-center">
            <div className="underline text-darkText text-md font-semibold mr-4 z-10">
              <CarouselPrevious className="opacity-0 hover:opacity-0 disabled:opacity-0" size={"lg"}/> 
              Back
            </div>
            <div className={`outline outline-1 py-3 px-6 text-white items-center rounded-md font-semibold 'bg-gray-800 bg-black hover:text-white cursor-pointer'`}>
              <CarouselNext size={"lg"} className="opacity-0 hover:opacity-0 w-24 h-10 disabled:opacity-0 right-16"/> Next
            </div>
        </div>          
    </Carousel>
    </div>
  )
}

export default BecomeHost;

