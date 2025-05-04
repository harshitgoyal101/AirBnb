import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import { PropertyType } from "./PropertyInfo";
import { Skeleton } from "../ui/skeleton";

export const PropertiesImages = ({ property }: { property?: PropertyType }) => {
    return (
        <>
        
        {property?.image ?
        (
            <div className="relative grid sm:max-h-[475px] overflow-hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                    <div className="relative max-h-[500px] col-span-2 row-span-2 m-1">
                        <Image
                            width={1600}
                            height={900}
                            className="object-cover w-full h-full"
                            src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image}`}
                            alt="Large Image"
                        />
                    </div>

                    <div className="relative max-h-[250px] m-1">
                        <Image
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                            src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image2}`}
                            alt="Small Image 1"
                        />
                    </div>
                
                    <div className="relative max-h-[250px] m-1">
                        <Image
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                            src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image3}`}
                            alt="Small Image 2"
                        />
                    </div>

                    <div className="relative max-h-[250px] m-1 block lg:block md:hidden">
                        <Image
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                            src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image4}`}
                            alt="Small Image 3"
                        />
                    </div>

                {property?.image4 && (
                    <div className="relative m-1 block max-h-[250px] lg:block md:hidden">
                        <Image
                            width={800}
                            height={450}
                            className="object-cover w-full h-full"
                            src={`${process.env.NEXT_PUBLIC_API_HOST}${property?.image5}`}
                            alt="Small Image 4"
                        />
                    </div>
                )}
                

                <div className="absolute bottom-0 right-6 text-black text-2xl z-10 cursor-pointer">
                    <Button className="rounded-lg border-darkText border-2 mb-5 text-darkText">
                        <IoMenu/>Show all photos
                    </Button>
                </div>
            </div>
        ):
        (
             <div className=" rounded-2xl h-96 justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Skeleton className=" col-span-2 h-0 md:h-full  w-full row-span-2"/>
                <Skeleton className=" h-44 mb-2 w-11/12 md:ml-4"/>
                <Skeleton className=" h-44 mb-2 w-11/12 md:ml-4 lg:w-full lg:ml-1"/>
                <Skeleton className=" h-48 mt-1 w-11/12 md:ml-4 block lg:block  md:hidden"/>
                <Skeleton className=" h-48 mt-1  w-11/12 md:w-full md:ml-1 block lg:block md:hidden"/>                
             </div>
            
        )}
        </>
    );
}