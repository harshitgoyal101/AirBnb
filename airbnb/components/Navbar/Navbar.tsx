"use client"

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { SearchFilters } from "./SearchFilters";

import { TbWorld } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


export const Navbar = () => {

    const [tabValue, setTabValue] = React.useState("stays");

    return (
        <nav className="w-full fixed top-0 left-0 py-4 border-b bg-white z-10">
            <div className="place-items-center">
                <div className="w-full mx-auto px-6">
                    <div className="flex justify-between">
                        <Link href="/">
                            <Image 
                                src="/airbnb.svg" 
                                alt="Logo" 
                                width={100} 
                                height={38}
                            />
                        </Link>
                        <div>
                            <Button variant={tabValue === "stays" ? "active" : "default"} onClick={() => {
                                setTabValue("stays");
                            }}>
                                Stays
                            </Button>
                            <Button variant={tabValue !== "stays" ? "active" : "default"} onClick={() => {
                                setTabValue("experience");
                            }}>
                                Experinces
                            </Button>
                        </div>
                        <div className="flex items-center">
                            <Button className='text-darkText'>Airbnb your home</Button>
                            <Button className='text-darkText'><TbWorld/></Button>
                            <Button variant="outline" className='text-darkText'><IoMenu/><CgProfile/></Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between p-6">
                    <SearchFilters tab={tabValue}/>
                </div>
            </div>
        </nav>
    );
}