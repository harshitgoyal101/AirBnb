'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { DisableNavFooter } from '@/app/DisableNav';
import { Button } from "../ui/button";
import { SearchFilters } from "./SearchFilters";
import { UserNav } from "./UserNav";
import { TbWorld } from "react-icons/tb";
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const path = usePathname()
    const [tabValue, setTabValue] = useState("stays");
    const [logo, setLogo] = useState("/airbnb.svg");

    const handleTab = () => {
        setLogo("/airbnb.svg");

        if (window.innerWidth < 950) {
            setTabValue("none");
        } else if (window.innerWidth < 1000) {
            setTabValue("short");
            setLogo("/airbnb-short.svg");
        } else if (tabValue != "experience") {
            setTabValue("stays");
        }
        if (window.innerWidth < 550) {
            setLogo("/airbnb-short.svg");
        }
    };

    useEffect(() => {

        window.addEventListener("scroll", handleTab);
        window.addEventListener("resize", handleTab);
        handleTab();

        return () => {
            window.removeEventListener("scroll", handleTab);
            window.removeEventListener("resize", handleTab);
        };
    }, [handleTab]);

    return (
    <>
        { !DisableNavFooter.includes(path) && (
            <nav className="w-full top-0 left-0 py-4 border-b bg-white z-10">
            <div className="place-items-center">
                <div className="w-full mx-auto px-4 md:px-24">
                    <div className="flex justify-between h-[60px]">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={logo === "/airbnb.svg" ? 100 : 30}
                                height={38}
                                style={{ alignSelf: "flex-start" }}
                                className="pt-3 max-h-[40px] min-w-[30px]"
                            />
                        </Link>
                        
                        <div className={`items-center justify-between px-6 ${tabValue === "short" ? "flex" : "hidden"}`}>
                            <SearchFilters tab={tabValue} />
                        </div>
                        <div className={`${(tabValue === "stays" || tabValue === "experience") ? "block":"hidden"} pt-2`}>
                            <Button variant={tabValue === "stays" ? "active" : "default"} onClick={() => {setTabValue("stays");}}>
                                Stays
                            </Button>
                            <Button variant={tabValue==="experience" ? "active":"default"} onClick={() => {setTabValue("experience");}}>
                                Experiences
                            </Button>
                        </div>

                        <div className="flex items-center">
                            <Link href = "/becomehost">
                                <Button className="text-darkText">
                                    Airbnb your home
                                </Button>                            
                            </Link>
                            <Button className="text-darkText">
                                <TbWorld />
                            </Button>
                            <UserNav/>
                        </div>
                    </div>
                </div>
                <div className={`items-center justify-between p-6 ${tabValue === "stays" || tabValue === "experience"?"flex":"hidden"}`}>
                    <SearchFilters tab={tabValue} />
                </div>

                <div className={`items-center justify-between px-2 ${tabValue === "none"?"flex":"hidden"}`}>
                    <SearchFilters tab="short"/>
                </div>
            </div>
        </nav>
        )           
        }
        
    </>
        
    );
}