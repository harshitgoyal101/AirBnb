import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import { PropertyType } from "./PropertyInfo";

export const PropertiesImages = ({ property }: { property?: PropertyType }) => {
    return (
        <>
        <div className="relative rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
        {property?.image && (
                <div className="relative col-span-2 row-span-2 m-1">
                    <Image
                        width={1600}
                        height={900}
                        className="object-cover w-full h-full"
                        src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image}`}
                        alt="Large Image"
                    />
                </div>
            )}

            {property?.image2 && (
                <div className="relative m-1">
                    <Image
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image2}`}
                        alt="Small Image 1"
                    />
                </div>
            )}

            {property?.image3 && (
                <div className="relative m-1">
                    <Image
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image3}`}
                        alt="Small Image 2"
                    />
                </div>
            )}

            {property?.image4 && (
                <div className="relative m-1 block lg:block md:hidden">
                    <Image
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image4}`}
                        alt="Small Image 3"
                    />
                </div>
            )}

           {property?.image4 && (
                <div className="relative m-1 block lg:block md:hidden">
                    <Image
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image4}`}
                        alt="Small Image 3"
                    />
                </div>
            )}
            

            <div className="absolute bottom-0 right-6 text-black text-2xl z-10 cursor-pointer">
                <Button className="rounded-lg border-darkText border-2 mb-5 text-darkText">
                    <IoMenu/>Show all photos
                </Button>
            </div>
        </div>
        </>
    );
}