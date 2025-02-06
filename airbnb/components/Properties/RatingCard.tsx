import Image from "next/image"
import { cn } from "@/lib/utils"

export const RatingCard = ({className}:{className ?: string}) => {
  return (
    <>
    <div className={cn(
            "min-w-[350px] min-h-[225px]  mr-3 my-3 py-10 px-5 flex flex-col justify-between",
            className
          )}>
      
      <div className="flex">
        <Image
            width={50}
            height={50}
            className="mr-3 rounded-full object-cover logoSize"
            src="/temp.avif"
            alt="Small Image 1"
        />
        <div className="w-full ">
            <div className="items-center">
                <div className="font-semibold">Hashmeen</div>
                <div className="right text-lightText">One month on Airbnb</div>
            </div>            
        </div>                
      </div>
      <div className="flex text-sm">
        <div>★★★★★ . </div>
        <div className="text-darkText ml-2"> December 2024</div>
      </div>
      <div className="text-mediumText font-sm mb-2">
            Beautiful apartment, amazing views and very helpful and polite staff. Highly recommended, would love to return!
      </div>
    </div>
    </>
  );
}

