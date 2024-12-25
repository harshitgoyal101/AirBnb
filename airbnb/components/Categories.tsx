import { Button } from "./ui/button";
import Image from "next/image";

export const Categories = () => {
    return (
        <div className="w-full mx-auto px-12">
            <div className="">
                <Image
                    width={40}
                    height={40}
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" 
                    alt="somr"
                />
                Some
            </div>
        </div>
    );
}