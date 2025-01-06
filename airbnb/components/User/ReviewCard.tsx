import Image from "next/image"

export const ReviewCard = () => {
  return (
    <div className="w-[350px] h-[225px]  border rounded-xl m-3  p-5 flex flex-col justify-between">
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
  );
}

