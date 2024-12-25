import Image from "next/image";

export const Properties = () => {
    return (
        <div className="w-full px-12 py-3 space-x-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="cursor-pointer m-3 rounded-xl">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                        fill
                        sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                        className="hover:scale-110 object-cover transition h-full w-full"
                        src="/temp.avif" 
                        alt="/temp.avif"
                    />
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
    );
}