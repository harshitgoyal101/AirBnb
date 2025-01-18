import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export const Properties = ({
    withTax
}: {
    withTax: boolean
}) => {
    return (
        <div className="w-full px-24 py-3 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="cursor-pointer m-3 rounded-xl">
                <div>
                    <div className="relative">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                                className="hover:scale-R110 object-cover transition h-full w-full"
                                src="/temp.avif" 
                                alt="/temp.avif"
                            />
                        </div>
                        <div className="absolute top-4 right-4 text-white text-2xl z-10 cursor-pointer">
                            <FaRegHeart />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col space-x-0 text-lightText">
                        <div className="text-md flex justify-between font-semibold m-0 p-0 text-darkText">
                            <div>Harshit Goyal</div>
                            <div>★ 4.3</div>
                        </div>
                        <div className="text-sm m-0 p-0">
                            2,123 away
                        </div>
                        <div className="text-sm m-0 p-0">
                            123.213
                        </div>
                        <div className="text-sm mt-2 p-0 text-darkText">
                        <strong>$ 500</strong> per night
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}