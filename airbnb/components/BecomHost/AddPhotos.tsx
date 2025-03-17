import { Button } from "../ui/button"
import Image from "next/image"
import PhotoCard from "./PhotoCard"

export const AddPhotos = () => {
  return (
    <div className="px-6 md:px-14 lg:px-32 xl:mx-56 mt-10">
      <div className="mx-6 lg:mx-40 flex-row justify-between md:text-center">
          <p className='font-semibold text-3xl'>Choose 4 photos</p>
          <p className="text-lightText text-lg">Drag to reorder</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 my-4 mx-6 lg:mx-14  ">
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
      </div>  

    </div>
  )
}

