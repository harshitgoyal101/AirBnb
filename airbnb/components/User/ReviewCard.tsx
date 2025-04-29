import Image from "next/image"
import { cn } from "@/lib/utils"

export const ReviewCard = ({className}:{className ?: string}) => {
  return (
    <>
    <div className={cn(
            "min-w-[300px] min-h-[225px]  border rounded-xl mr-3 my-3  p-5 flex flex-col justify-between",
            className
          )}>
      <div className="text-mediumText font-sm mb-2">
        "…Our caretaker Kaushal bhai and Abhay made us feel at home. 
        Abhay even took us on a hike to Sangla Kanda lake. 
        The food was perfect.…"
      </div>
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
                <div className="right text-lightText">December 2024</div>
            </div>            
        </div>
      </div>
    </div>
    </>
  );
}

