import { PiChats } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function ChatPage() {
    return (
        <div className="grid">
            <div className="w-full">
                <div className="text-xl font-semibold text-darkText border border-gray-200">
                    <div className="flex px-12 items-center hover:bg-slate-100">
                        <Image
                            width={50}
                            height={50}
                            className="m-5 rounded-full object-cover max-w-[50px] max-h-[50px]"
                            src="/temp.avif"
                            alt="Small Image 1"
                        />
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <div className="font-bold">Harshit Goyal</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] overflow-auto">
                </div>
            </div>
        </div>
    )
}