import { apiService } from "@/app/services/apiService";
import Image from "next/image";
const aminities = await apiService.get('/api/aminities/');

export const IconWithLabel = (
  {type} : {type:string}
) => {
    return (
        aminities.hasOwnProperty(type) ? aminities[type] ? 
        <div className="px-4">
            <div className="flex items-center py-1 w-ful">
                <Image
                    width={24}
                    height={24}
                    src={`/categories/${type}.jpg`}
                    alt={type}
                />
                <div>
                    <p className="text-md text-black font-semibold mx-3 mt-1">{type}</p>
                    <p className="text-md text-black mx-3">{aminities[type]}</p>
                </div>

            </div>
        </div> : <div className="px-4">
            <div className="flex items-center py-3 w-ful">
                <Image
                    width={24}
                    height={24}
                    src={`/categories/${type}.jpg`}
                    alt={type}
                />
                <p className="text-md text-black mx-3">{type}</p>
            </div>
        </div> : <div className="px-4">
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
    )
}