import Image from "next/image";

export const IconWithLabel = (
  {type} : {type:string}
) => {
  return (
    <div className="px-4">
      <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
          <Image
              width={20}
              height={20}
              src={`/caterogies/${type}.jpg`}
              alt={type}
          />
          <p className="text-xs">{type}</p>
      </div>
    </div>
  )
}