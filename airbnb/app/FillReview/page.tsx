import { HostNav } from "@/components/Navbar/HostNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Rating from '@mui/material/Rating';
const FillReview = () => {
  return (
    <div>
      <HostNav/>
      <div className="md:mx-12 lg:mx-32 xl:mx-56 mt-24 p-6">
        <div className="my-3">
            <div className="text-2xl font-semibold my-2">Cleanliness</div>
            <div className="text-lg my-1 text-lightText">Did the Host leave the space clean?</div>
            <Rating name="size-large" size="large" />
        </div>

        <div className="my-3">
            <div className="text-2xl font-semibold my-2">Communication</div>
            <div className="text-lg my-1 text-lightText">How clearly did the host communicate?</div>
            <Rating name="size-large" size="large" />
        </div>

        <div className="my-3">
            <div className="text-2xl font-semibold my-2">Overall</div>
            <div className="text-lg my-1 text-lightText">How was your overall experience in your stay ?</div>
            <Rating name="size-large" size="large" />
        </div>
        <div className="my-3 flex flex-col md:flex-row justify-between items-center md:items-end">
            <div className="w-full md:w-2/3">
                <p className="text-2xl font-semibold">Describe your stay breifly</p>
                <Input type="text" className="mt-3 w-full outline outline-2 outline-black h-32"></Input>
            </div>
            <Button className="text-white mr-4 mt-4 xl:mr-24 border-2 border-transparent hover:border-black bg-airbnb outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                Submit
            </Button>  
        </div>
      </div>
    </div>
  )
}

export default FillReview
