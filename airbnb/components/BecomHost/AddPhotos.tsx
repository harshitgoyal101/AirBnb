import { Button } from "../ui/button"
import Image from "next/image"

export const AddPhotos = () => {
  return (
    <div className="mx-72 mt-10">
      <div className="mx-40 flex justify-between">
        <div>
          <p className='font-semibold text-3xl'>Choose at least 4 photos</p>
          <p className="text-lightText text-lg text-start">Drag to reorder</p>
        </div>
        <Button size = "icon" className="bg-gray-100 hover:bg-gray-200">
            <Image 
                width={18}
                height={18}
                src="/PlaceSelect/AddButton.svg"
                alt="Small Image 1"
            />
        </Button>
      </div>
      <div className="my-4 mx-40 ">
        <div className="my-2 flex flex-col justify-center items-center h-72 rounded-xl border-dashed border-black border-2">
          <div className="text-xl font-semibold flex flex-col justify-center items-center  text-lightText">
            <Image 
              width = {56} 
              height = {56} 
              src="/PlaceSelect/AddPhotos.svg" 
              alt="Small Image 1"
            />
            <div className="mt-2">Add Photos</div>
          </div>          
        </div> 
      </div>  

    </div>
  )
}

