import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";

export const PropertiesImages = () => {
    return (
        <>
        <div className="relative w-full px-24 py-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative m-1 col-span-2 row-span-2">
            <Image
                width={1600}
                height={900}
                className="object-cover w-full h-full"
                src="/temp2.avif"
                alt="Large Image"
            />
            </div>

            <div className="relative m-1">
            <Image
                width={800}
                height={450}
                className="object-cover w-full h-full"
                src="/temp2.avif"
                alt="Small Image 1"
            />
            </div>

            <div className="relative m-1">
            <Image
                width={800}
                height={450}
                className="object-cover w-full h-full"
                src="/temp2.avif"
                alt="Small Image 2"
            />
            </div>

            <div className="relative m-1 block lg:block md:hidden">
            <Image
                width={800}
                height={450}
                className="object-cover w-full h-full"
                src="/temp2.avif"
                alt="Small Image 3"
            />
            </div>

            <div className="relative m-1 block lg:block md:hidden">
            <Image
                width={800}
                height={450}
                className="object-cover w-full h-full"
                src="/temp2.avif"
                alt="Small Image 4"
            />
            </div>
            

            <div className="absolute bottom-0 right-32 text-black text-2xl z-10 cursor-pointer">
                <Button className="rounded-sm mb-5 text-darkText">
                    <IoMenu/>Show all photos
                </Button>
            </div>
        </div>
        </>
    );
}