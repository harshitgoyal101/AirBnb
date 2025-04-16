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
  type CarouselApi,
} from "@/components/ui/carousel"
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { apiService } from "../services/apiService";

interface PlaceInfoType {
    guests: number;
    bedrooms: number;
    bathrooms: number;
}

interface Photo {
    id: number;
    file: File | null;
    url: string | null;
}

interface FormData {
    propertyName: string;
    description: string;
    pricePerNight: string;
    city: string;
}

const BecomeHost = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [placeInfo, setPlaceInfo] = useState<PlaceInfoType>({
    guests: 1,
    bedrooms: 1,
    bathrooms: 1
  });
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, file: null, url: null },
    { id: 2, file: null, url: null },
    { id: 3, file: null, url: null },
    { id: 4, file: null, url: null },
    { id: 5, file: null, url: null }
  ]);
  const [formData, setFormData] = useState<FormData>({
    propertyName: "",
    description: "",
    pricePerNight: "",
    city: ""
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentStep(api.selectedScrollSnap());
    });
  }, [api]);

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

  const handlePhotoChange = (id: number, file: File | null) => {
    setPhotos(prevPhotos => 
      prevPhotos.map(photo => 
        photo.id === id 
          ? { ...photo, file, url: file ? URL.createObjectURL(file) : null } 
          : photo
      )
    );
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0:
        return selectedCategory !== null;
      case 1:
        return selectedPlace !== null;
      case 2:
        return placeInfo.guests > 0 && placeInfo.bedrooms > 0 && placeInfo.bathrooms > 0;
      case 3:
        return selectedAmenities.length > 0;
      case 4:
        return photos.every(photo => photo.file !== null);
      case 5:
        return formData.propertyName.trim() !== "" && 
               formData.description.trim() !== "" && 
               formData.pricePerNight.trim() !== "" && 
               formData.city.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      toast.error("Please fill in all required information");
      return;
    }
    
    if (currentStep === 5) {
      handleSubmit();
    } else {
      api?.scrollNext();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      api?.scrollPrev();
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      
      formDataToSend.append('title', formData.propertyName);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price_per_night', formData.pricePerNight);
      formDataToSend.append('country', formData.city);
      formDataToSend.append('country_code', 'IN');
      formDataToSend.append('guests', placeInfo.guests.toString());
      formDataToSend.append('bedrooms', placeInfo.bedrooms.toString());
      formDataToSend.append('bathrooms', placeInfo.bathrooms.toString());
      
      if (selectedCategory) {
        formDataToSend.append('category', selectedCategory);
      }
      
      if (selectedAmenities.length > 0) {
        formDataToSend.append('aminities', JSON.stringify(selectedAmenities));
      }
      
      photos.forEach((photo, index) => {
        if (photo.file) {
          if (index === 0) {
            formDataToSend.append('image', photo.file);
          } else {
            formDataToSend.append(`image${index + 1}`, photo.file);
          }
        }
      });

      const response = await apiService.post('/api/properties/create/', formDataToSend);

      if (response.success) {
        toast.success('Property created successfully!');  
        router.push('/');
      } else {
        throw new Error(response.error || 'Failed to create property');
      }
    } catch (error) {
      console.error('Error creating property:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create property. Please try again.');
    }
  };

  return (
    <div>
      <HostNav/>
      <form onSubmit={(e) => e.preventDefault()}>
        <Carousel
          setApi={setApi}
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
                <AddPhotos photos={photos} onPhotoChange={handlePhotoChange} />
              </CarouselItem>
                  
              <CarouselItem >                
                <AddDescription formData={formData} setFormData={setFormData} />
              </CarouselItem>

          </CarouselContent>   
          <div className="fixed bottom-0 w-full h-24 px-16 bg-white border-black border-t-4 flex justify-between items-center">
              <div className="flex items-center">
                <CarouselPrevious 
                  className="opacity-0 hover:opacity-0 disabled:opacity-0" 
                  size={"lg"}
                  onClick={handleBack}
                  disabled={currentStep === 0}
                /> 
                <span 
                  className="underline text-darkText text-md font-semibold mr-4 z-10 cursor-pointer"
                  onClick={handleBack}
                >
                  Back
                </span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className={`outline outline-1 py-3 px-6 text-white items-center rounded-md font-semibold ${
                  validateStep(currentStep) 
                    ? 'bg-black hover:bg-gray-800 cursor-pointer' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === 5 ? 'Submit' : 'Next'}
              </button>
          </div>          
      </Carousel>
      </form>
    </div>
  )
}

export default BecomeHost;

