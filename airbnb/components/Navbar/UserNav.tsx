"use client";

import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { CgProfile } from "react-icons/cg";
import { BookCard } from "../ui/BookCard";
import { Separator } from '@radix-ui/react-separator';

export const UserNav = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className='relative inline-block'>
            <Button variant="outline" className="text-darkText" onClick={() => {setIsOpen(!isOpen)}}>
                <IoMenu />
                <CgProfile />
            </Button>

            {isOpen && (
                <BookCard className='w-[200px] absolute top-[50px] right-0 px-0 m-0 z-20 bg-white'>
                    <Button className='w-full p-0 m-0 rounded-none rounded-t-lg justify-start px-6'>
                        Log in 
                    </Button>
                    <Button className='w-full p-0 m-0 rounded-none justify-start px-6'>
                        Sign up
                    </Button>
                    <Button className='w-full p-0 m-0 rounded-none justify-start px-6 border-t-2'>
                        Airbnb your home
                    </Button>
                    <Button className='w-full p-0 m-0 rounded-none justify-start px-6'>
                        Host an experience
                    </Button>
                    <Button className='w-full p-0 m-0 rounded-none rounded-b-lg justify-start px-6'>
                        Help Center
                    </Button>
                </BookCard>
            )}
        </div>
    );
}