"use client"
import { apiService } from "@/app/services/apiService";
import { useState, useEffect } from "react";
import { IconWithLabel } from "../ui/IconWIthLabel";

interface Amenity {
    id: number;
    title: string;
  }
  
  interface AmenitiesSelectProps {
    onAmenitiesChange: (amenities: any[]) => void;
  }
  
  export const AmenitiesSelect = ({ onAmenitiesChange }: AmenitiesSelectProps) => {
    const [amenities, setAmenities] = useState<Amenity[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedAmenities, setSelectedAmenities] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchAmenities = async () => {
        try {
          const response = await apiService.get("/api/aminities/");
          setAmenities(response.data); // Expecting data in format: [{id: number, title: string}]
        } catch (error) {
          console.error("Error fetching amenities:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAmenities();
    }, []);
  
    const handleAmenityClick = (amenity: any) => {
      let newSelectedAmenities: any[];
      
      if (selectedAmenities.includes(amenity)) {
        newSelectedAmenities = selectedAmenities.filter(ami => ami !== amenity);
      } else {
        newSelectedAmenities = [...selectedAmenities, amenity];
      }
      
      setSelectedAmenities(newSelectedAmenities);
      onAmenitiesChange(newSelectedAmenities);
    };
  
    return (
      <div className='px-6 md:px-32 lg:px-40 xl:px-72 flex-row lg:text-center items-center'> 
        <div>
          <p className='lg:mx-20 font-semibold text-3xl'>Tell guests what your place has to offer</p>
          <p className="lg:mx-20 text-lightText text-lg">You can add more amenities after you publish your listing.</p>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 justify-evenly items-center md:px-4 lg:px-8 xl:px-16 my-4 h-fit'>
          {loading ? (
            <div>Loading amenities...</div>
          ) : (
            amenities.map((amenity) => {
              const isSelected = selectedAmenities.includes(amenity);
              return (
                <div 
                  key={amenity.id} 
                  className={`border-2 py-4 px-0 h-32 mx-1 text-wrap overflow-hidden hover:border-black hover:bg-gray-100 max-w-40 rounded-md my-4 cursor-pointer ${isSelected ? 'border-black bg-gray-100' : ''}`}
                  onClick={() => handleAmenityClick(amenity)}
                >
                  <IconWithLabel className="border-none text-sm w-full" type={amenity.title}/>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  };