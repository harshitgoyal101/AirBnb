import { UserCard } from "@/components/User/UserCard";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";
import { FaFlag } from "react-icons/fa6";

export default function UserDetailPage() {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="p-12 min-w-[500px] max-w-[480px]">
                <UserCard/>
                <div className="w-full border border-gray-300 rounded-xl p-6 my-12 ">
                    <div className="text-2xl text-darkText mb-4">Tarpan's confirmed information</div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Identity
                    </div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Email address
                    </div>
                    <div className="text-xl text-darkText m-4 flex items-center">
                        <IoMdCheckmark className="mx-4"/>Phone number
                    </div>
                </div>
                <div className="flex items-center">
                    <FaFlag className="mx-3"/>
                    <Link href="/" className="underline font-semibold">Report this profile</Link>
                </div>
            </div>
            <div className="border p-6">
                Harshirt
            </div>
        </div>
    );
}