import Image from "next/image"

export const ReviewCard = () => {
  return (
    <div className="w-[400px]  border rounded-xl m-3 p-4">
      <div className="text-mediumText font-sm">
        "…Our caretaker Kaushal bhai and Abhay made us feel at home. 
        Abhay even took us on a hike to Sangla Kanda lake. 
        The food was perfect.…"
      </div>
      <div className="flex  items-end">
      <Image
          width={50}
          height={50}
          className="m-5 rounded-full object-cover max-w-[50px] max-h-[50px]"
          src="/temp.avif"
          alt="Small Image 1"
      />
      <div className="flex flex-col" >
        <div>Hasmeen</div>
        <div>December 2024</div>
      </div>
      </div>
    </div>
  )
}

