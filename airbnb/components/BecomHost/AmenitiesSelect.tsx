"use client"
import { apiService } from "@/app/services/apiService";
import { useState, useEffect } from "react";
import { IconWithLabel } from "../ui/IconWIthLabel";

export const AmenitiesSelect = () => {
  const [amenities, setAmenities] = useState<string[]>([]);
      const [loading, setLoading] = useState(true);
  
      useEffect(() => {
          const fetchAmenities = async () => {
              try {
                  const response = await apiService.get("/api/aminities/");
                  setAmenities(response?.data);
              } catch (error) {
                  console.error("Error fetching amenities:", error);
              } finally {
                  setLoading(false);
              }
          };
  
          fetchAmenities();
      }, []);
  return (
    <div className='px-80 flex-row items-center'> 
        <div>
          <p className='mx-20 font-semibold text-3xl'>Tell guests what your place has to offer</p>
          <p className="mx-20 text-lightText text-lg text-start">You can add more amenities after you publish your listing.</p>
        </div>
        <div className='grid grid-cols-4 justify-evenly items-center px-16 my-4 h-fit'>
            {amenities.map((amenity, index) => {
                return <div key={index} className="border-2 py-4 px-0  hover:border-black hover:bg-gray-100 max-w-40 rounded-md my-4">
                    <IconWithLabel className="border-none text-sm w-full" type={String(amenity)}/>
                </div>
            })}
        </div>
    </div>
  )
}

