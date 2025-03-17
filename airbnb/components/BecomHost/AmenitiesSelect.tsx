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
    <div className='px-6 md:px-32 lg:px-40 xl:px-72 flex-row lg:text-center items-center'> 
        <div>
          <p className='lg:mx-20 font-semibold text-3xl'>Tell guests what your place has to offer</p>
          <p className="lg:mx-20 text-lightText text-lg ">You can add more amenities after you publish your listing.</p>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 justify-evenly items-center md:px-4 lg:px-8 xl:px-16 my-4 h-fit'>
            {amenities.map((amenity, index) => {
                return <div key={index} className="border-2 py-4 px-0 h-32 mx-1 text-wrap overflow-hidden hover:border-black hover:bg-gray-100 max-w-40 rounded-md my-4">
                    <IconWithLabel className="border-none text-sm w-full" type={String(amenity)}/>
                </div>
            })}
        </div>
    </div>
  )
}

