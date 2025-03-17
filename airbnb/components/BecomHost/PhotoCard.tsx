import { Button } from "../ui/button"
import Image from "next/image"

const PhotoCard = () => {
  return (
    <div className="m-2 flex flex-col justify-center items-center h-72 rounded-xl border-dotted border-black border-2">
        <div className="text-xl font-semibold flex flex-col justify-center items-center  text-lightText">
        <Image 
            width = {56} 
            height = {56} 
            src="/PlaceSelect/AddPhotos.svg" 
            alt="Small Image 1"
        />
        <div className="mt-2">Add Photos</div>
        <Button size = "icon" className="bg-gray-100 mt-2 hover:bg-gray-200">
            <Image 
                width={18}
                height={18}
                src="/PlaceSelect/AddButton.svg"
                alt="Small Image 1"
            />
        </Button>
        </div>          
    </div> 
)
}

export default PhotoCard
