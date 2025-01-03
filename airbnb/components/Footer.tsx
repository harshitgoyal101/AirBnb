import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="w-full bg-gray-50 border border-gray-200">
            <div className="p-8 px-12">
                <Link href="/" className="hover:underline mx-2">Airbnb</Link> &gt; 
                <Link href="/" className="hover:underline mx-2">Airbnb</Link> &gt; 
                <Link href="/" className="hover:underline mx-2">Airbnb</Link> &gt; 
                <Link href="/" className="hover:underline mx-2">Airbnb</Link> 
            </div>
            <Separator className="h-[1px] w-11/12 mx-auto"/>
            <div className="p-8">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 p-6">
                    <div className="flex flex-col space-y-2">
                        <div className="font-semibold my-3">Support</div>
                        <Link href="/" className="hover:underline">Help Center</Link> 
                        <Link href="/" className="hover:underline">AirCover</Link> 
                        <Link href="/" className="hover:underline">Anti-discrimination</Link> 
                        <Link href="/" className="hover:underline">Disability support</Link> 
                        <Link href="/" className="hover:underline">Cancellation options</Link> 
                        <Link href="/" className="hover:underline">Report neighbourhood concern</Link> 
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="font-semibold my-3">Hosting</div>
                        <Link href="/" className="hover:underline">Airbnb your home</Link> 
                        <Link href="/" className="hover:underline">AirCover for Hosts</Link> 
                        <Link href="/" className="hover:underline">Hosting resources</Link> 
                        <Link href="/" className="hover:underline">Community forum</Link> 
                        <Link href="/" className="hover:underline">Hosting responsibly</Link> 
                        <Link href="/" className="hover:underline">Join a free Hosting class</Link> 
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="font-semibold my-3">Airbnb</div>
                        <Link href="/" className="hover:underline">Newsroom</Link> 
                        <Link href="/" className="hover:underline">New features</Link> 
                        <Link href="/" className="hover:underline">Careers</Link> 
                        <Link href="/" className="hover:underline">Investors</Link> 
                        <Link href="/" className="hover:underline">Airbnb.org emergency stays</Link> 
                    </div>
                </div>
            </div>
            <Separator className="h-[1px] w-11/12 mx-auto"/>
            <div className="p-4 flex flex-col w-full justify-between items-center">
                <div className="w-full max-w-[400px] font-semibold flex flex-row justify-between">
                    <Link href="/" className="hover:underline flex items-center">
                        <TbWorld className="m-1"/> English(IN)
                    </Link>
                    $ USD
                    <div className="flex flex-row w-[80px] justify-between">
                        <Link href="/" className="hover:underline flex items-center">
                            <FaFacebookSquare/>
                        </Link>
                        <Link href="/" className="hover:underline flex items-center">
                            <FaSquareTwitter/>
                        </Link>
                        <Link href="/" className="hover:underline flex items-center">
                            <FaSquareInstagram/>
                        </Link>
                    </div>
                </div>
                <div className="mr-2">@ 2025 Airbnb, Inc.</div> 
                <div>
                    <Link href="/" className="hover:underline mx-1">Privacy</Link> &#183;
                    <Link href="/" className="hover:underline mx-1">Terms</Link>  &#183;
                    <Link href="/" className="hover:underline mx-1">Sitemap</Link>  &#183;
                    <Link href="/" className="hover:underline mx-1">Company details</Link> 
                </div>
            </div>
        </footer>
    );
}