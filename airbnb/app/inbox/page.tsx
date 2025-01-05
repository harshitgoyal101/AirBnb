import { PiChats } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function InboxPage() {

    const inboxEmpty = false;

    return (
        <div className="grid">
            {
                inboxEmpty ? <div className="flex flex-col items-center justify-between py-48">
                    <PiChats size={36} className="text-darkText m-5"/>
                    <div className="font-bold text-darkText m-2">You don't have any messages</div>
                    <div className="text-lightText">When you receive a new message, it will appear here.</div>
                </div> : <div className="w-full">
                    <div className="text-xl font-semibold text-darkText p-8 border border-gray-200">Messages</div>
                    <div className="h-[500px] overflow-auto">
                        <Link href="/inbox">
                            <div className="flex px-12 items-center hover:bg-slate-100">
                                <Image
                                    width={50}
                                    height={50}
                                    className="m-5 rounded-full object-cover logoSize"
                                    src="/temp.avif"
                                    alt="Small Image 1"
                                />
                                <div className="w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="font-bold">Harshit Goyal</div>
                                        <div className="right">5:30</div>
                                    </div>
                                    <div className="text-sm text-mediumText">
                                        Hey??
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Separator/>
                        <Link href="/inbox">
                            <div className="flex px-12 items-center hover:bg-slate-100">
                                <Image
                                    width={50}
                                    height={50}
                                    className="m-5 rounded-full object-cover logoSize"
                                    src="/temp.avif"
                                    alt="Small Image 1"
                                />
                                <div className="w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="font-bold">Harshit Goyal</div>
                                        <div className="right">5:30</div>
                                    </div>
                                    <div className="text-sm text-mediumText">
                                        Hey??
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Separator/>
                    </div>
                </div>
            }
        </div>
    )
}