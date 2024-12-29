import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { PropertiesImages } from "@/components/Properties/PropertyImages";
import { BookCard } from "@/components/ui/BookCard";
import Image from "next/image";

export default function PropertyDetailPage() {
  return (
    <>
        <div className="w-full mx-auto px-24 py-3 flex space-x-4">
            <div className="w-full flex justify-between place-items-center">
                <div className="text-darkText font-semibold text-2xl">
                    StayVista at Desert Palms in Anjar-Kutch w/t Pool
                </div>
                <div>
                    <Button className="text-darkText rounded-md">
                        <RiShare2Fill /> Share
                    </Button>
                    <Button className="text-darkText rounded-md">
                        <FaRegHeart /> Save
                    </Button>
                </div>
            </div>
        </div>
        <PropertiesImages />
        <div className="w-full mx-auto px-24 py-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 w-full p-5">
                <div className="text-darkText font-semibold text-lg mb-5">
                    Entire villa in Anjar, India
                    <p className="text-sm text-lightText">15 guests5 bedrooms4 beds7 bathrooms</p>
                    <div className="text-sm">★ 4 Reviews</div>
                </div>
                <Separator />
                <div className="flex flex-row items-center">
                    <Image
                        width={50}
                        height={50}
                        className="m-5 rounded-full object-cover max-w-[50px] max-h-[50px]"
                        src="/temp.avif"
                        alt="Small Image 1"
                    />
                    <div className="text-darkText font-semibold text-lg">
                        Hosted by Atul
                        <p className="text-sm text-lightText">2 years hosting</p>
                    </div>
                </div>
                <Separator />
            </div>
            <div className="w-full p-5">
                <BookCard>
                    Hashit
                </BookCard>
            </div>
        </div>
    </>
  );
}
