'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { SearchFilters } from "./SearchFilters";
import { UserNav } from "./UserNav";
import { TbWorld } from "react-icons/tb";

export const Navbar = () => {

    const [tabValue, setTabValue] = React.useState("stays");
    const [logo, setLogo] = React.useState("/airbnb.svg");


    React.useEffect(() => {
        const handleTab = () => {
            setLogo("/airbnb.svg");

            if (window.innerWidth < 950) {
                setTabValue("none");
            } else if (window.innerWidth < 1000) {
                setTabValue("short");
                setLogo("/airbnb-short.svg");
            } else {
                setTabValue("stays");
            }
            if (window.innerWidth < 550) {
                setLogo("/airbnb-short.svg");
            }
        };

        window.addEventListener("scroll", handleTab);
        window.addEventListener("resize", handleTab);

        return () => {
            window.removeEventListener("scroll", handleTab);
            window.removeEventListener("resize", handleTab);
        };
    }, []);

    return (
        <nav className="w-full top-0 left-0 py-4 border-b bg-white z-10">
            <div className="place-items-center">
                <div className="w-full mx-auto px-24">
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
                            <Button variant={tabValue==="experience"?"active":"default"} onClick={() => {setTabValue("experience");}}>
                                Experiences
                            </Button>
                        </div>

                        <div className="flex items-center">
                            <Button className="text-darkText">
                                Airbnb your home
                            </Button>
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

                <div className={`items-center justify-between px-6 ${tabValue === "none"?"flex":"hidden"}`}>
                    <SearchFilters tab="short"/>
                </div>
            </div>
        </nav>
    );
}