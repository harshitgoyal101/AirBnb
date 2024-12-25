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
    const [logo, setLogo] = React.useState("/airbnb.svg");

    React.useEffect(() => {
        const handleTab = () => {
            console.log(logo);
            setLogo("/airbnb.svg");
            if(window.innerWidth < 900) {
                setLogo("/airbnb-short.svg");
            }
            if(window.innerWidth < 850) {
                setTabValue("none");
            } else if (window.innerWidth < 1000) {
                setTabValue("short");
            } else if (window.scrollY === 0) {
                setTabValue("stays");
            } else {
                setTabValue("short");
            }
        };

        window.addEventListener('scroll', handleTab);
        window.addEventListener('resize', handleTab);
    
        return () => {
            window.removeEventListener('scroll', handleTab);
            window.removeEventListener('resize', handleTab);
        };
      }, []);

    return (
        <nav className="w-full fixed top-0 left-0 py-4 border-b bg-white">
            <div className="place-items-center">
                <div className="w-full mx-auto px-12">
                    <div className="flex justify-between h-[60px]">
                        <Link href="/">
                            <Image 
                                src={logo} 
                                alt="Logo" 
                                width={100}
                                height={38}
                                style={{ alignSelf: 'flex-start' }}
                                className='pt-3 max-h-[40px] bg-left'
                            />
                        </Link>
                        
                        <div className={`items-center justify-between px-6 ${tabValue==='short'?'flex':'hidden'}`}>
                            <SearchFilters tab={tabValue}/>
                        </div>

                        <div className={`${(tabValue==='stays'||tabValue==='experience')?'block':'hidden'} pt-2`}>
                            <Button variant={tabValue === "stays" ? "active" : "default"} onClick={() => {
                                setTabValue("stays");
                            }}>
                                Stays
                            </Button>
                            <Button variant={tabValue === "experience" ? "active" : "default"} onClick={() => {
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
                <div className={`items-center justify-between p-6 ${(tabValue==='stays'||tabValue==='experience')?'flex':'hidden'}`}>
                    <SearchFilters tab={tabValue}/>
                </div>

                <div className={`items-center justify-between px-6 ${tabValue==='none'?'flex':'hidden'}`}>
                    <SearchFilters tab="short"/>
                </div>
            </div>
        </nav>
    );
}