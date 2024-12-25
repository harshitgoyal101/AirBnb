import Image from "next/image";

export const Categories = () => {
    return (
        <div className="w-full mx-auto px-12 py-3 flex space-x-4">
            <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
                <Image
                    width={20}
                    height={20}
                    src="/caterogies/A frames.jpg" 
                    alt="A frames.jpg"
                />
                <p className="text-xs">A frames</p>
            </div>    
            <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
                <Image
                    width={20}
                    height={20}
                    src="/caterogies/A frames.jpg" 
                    alt="A frames.jpg"
                />
                <p className="text-xs">A frames</p>
            </div>
        </div>
    );
}