"use client"

import { Input } from "@/components/ui/input"
import { Model } from '@/components/ui/Model'
import React from 'react';
import useLoginModel from '@/app/hooks/useLoginModel';
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const LoginModel = () => {

    const loginModel = useLoginModel();

    return (
        <Model 
            isOpen={loginModel.isOpen}
            close={loginModel.close}
            label="Login or sign up"
        >
            <h1 className='text-xl font-bold'>Welcome to Airbnb</h1>
            <form className="mt-5">
                <Input placeholder="Country/Region" className="rounded-none rounded-t-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText"/>
                <Input placeholder="Phone Number" className="rounded-none rounded-b-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText"/>
                <p className="text-sm my-2">
                    We’ll call or text you to confirm your number. Standard message and data rates apply. <Link href="/" className="font-semibold underline">Privacy Policy</Link>
                </p>
                <Button className="w-full rounded-sm bg-airbnb hover:bg-airbnbDark text-white hover:text-white my-3">
                    Continue
                </Button>
            </form>

            <div className="flex w-auto items-center justify-between">
                <Separator className="flex-auto"/>
                <p className="text-sm m-4">or</p>
                <Separator className="flex-auto"/>
            </div>

            <div className="space-y-3">
                <Button className="relative w-full rounded-md border border-black text-md text-darkText">
                    <FcGoogle className="absolute left-5"/>Continue with Google
                </Button>
                <Button className="relative w-full rounded-md border border-black text-md text-darkText">
                    <FaApple className="absolute left-5"/>Continue with Apple
                </Button>
                <Button className="relative w-full rounded-md border border-black text-md text-darkText">
                    <MdOutlineEmail className="absolute left-5"/>Continue with Mail
                </Button>
                <Button className="relative w-full rounded-md border border-black text-md text-darkText">
                    <FaFacebookSquare className="absolute left-5"/>Continue with Facebook
                </Button>
            </div>
        </Model>
    );
};