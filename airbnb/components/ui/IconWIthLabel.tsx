import { apiService } from "@/app/services/apiService";
import Image from "next/image";
import { useEffect, useState } from "react";
const aminities = await apiService.get('/api/all_aminities/');
console.log("aminities",aminities.data)

export const IconWithLabel = (
  {type} : {type:string}
) => {
    const [amenities, setAmenities] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(true);


    const fetchAmenities = async () => {
        try {
            const response = await apiService.get("/api/all_aminities/");
            console.log("Fetched amenities:", response); // Debug log
            setAmenities(response?.data?.data || {}); // Ensure response is valid
        } catch (error) {
            console.error("Error fetching amenities:", error);
        } finally {
            setLoading(false);
        }
    };
    console.log("amm",aminities.data)
    useEffect(() => {
        fetchAmenities();
    }, []);
    return  loading ? (
        <div className="flex justify-center items-center h-16">
            <p className="text-md text-gray-500">Loading...</p>
        </div>
    ) : amenities.hasOwnProperty(type) ? (
        amenities[type] ? (
            <div className="px-4">
                <div className="flex items-center py-1 w-full">
                    <Image
                        width={24}
                        height={24}
                        src={`/categories/${type}.jpg`}
                        alt={type}
                    />
                    <div>
                        <p className="text-md text-black font-semibold mx-3 mt-1">{type}</p>
                        <p className="text-md text-black mx-3">{amenities[type]}</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="px-4">
                <div className="flex items-center py-3 w-full">
                    <Image
                        width={24}
                        height={24}
                        src={`/categories/${type}.jpg`}
                        alt={type}
                    />
                    <p className="text-md text-black mx-3">{type}</p>
                </div>
            </div>
        )
    ) : (
        <div className="px-4">
            <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
                <Image
                    width={20}
                    height={20}
                    src={`/categories/${type}.jpg`}
                    alt={type}
                />
                <p className="text-xs">{type}</p>
            </div>
        </div>
    );
}