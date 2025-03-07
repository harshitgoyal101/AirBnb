import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const BecomeHost = () => {
  return (
    <div>
      <Carousel
        opts={{
            align: "start",
        }}
        className="xl: w-full"
        >
        <div className="flex justify-between my-6 mr-6">
            <div className="text-2xl font-semibold text-mediumText mt-3">Harshit's listings</div>
            <div className="flex justify-between">
                <div className="mr-6"><CarouselPrevious /></div>
                <div className="ml-6"><CarouselNext /></div>
            </div>
        </div>
        
        <CarouselContent className="w-full">
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basic-1/1 md:basis-1/2 lg:basis-1/3">
                <div>category</div>
                <div>amenities</div>
                <div>type of guests</div>
                <div>property images</div>
            </CarouselItem>
            ))}
        </CarouselContent>
        
    </Carousel>
    </div>
  )
}

export default BecomeHost;

