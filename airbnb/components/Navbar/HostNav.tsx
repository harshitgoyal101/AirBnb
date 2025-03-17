import  Image  from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HostNav = () => {
  return (
    <nav className ="fixed top-0 w-full h-24 z-10 py-0 px-6 md:px-16 bg-white border-b flex justify-between items-center">
        <Link href={"/"}>
          <Image 
            width={32}
            height={32}
            src="/AirBnbBlack.svg"
            alt="Small Image 1"
          />
        </Link>
          <div>
            <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold mr-4">Questions?</Button>
            <Link href={"/"}>
                <Button size = {"sm"} className="outline outline-1 text-darkText font-semibold">Exit</Button>
            </Link>
          </div>
          
      </nav>
  )
}



