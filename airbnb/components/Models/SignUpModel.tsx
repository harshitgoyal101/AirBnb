"use client"

import useLoginModel from '@/app/hooks/useLoginModel';
import useSignUpModel from '@/app/hooks/useSignUpModel';
import Link from "next/link";

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input"
import { Model } from '@/components/ui/Model'
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const SignUpModel = () => {

    const loginModel = useLoginModel();
    const signUpModel = useSignUpModel();

    //const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);

    return (
        <Model 
            isOpen={signUpModel.isOpen}
            close={signUpModel.close}
            label="Sign up"
        >
            <h1 className='text-xl font-bold'>Welcome to Airbnb</h1>
            <form className="mt-5">
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' 
                    placeholder="Email" 
                    className="rounded-none rounded-t-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText"
                />
                <Input 
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    placeholder="Password" 
                    className="rounded-none focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText"
                />
                <Input 
                    onChange={(e) => setRepassword(e.target.value)}
                    type='password' 
                    placeholder="Re-enter Password" 
                    className="rounded-none rounded-b-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText"
                />
                {errors.map((error, index) => {
                    return(
                        <p className="text-sm text-red-500 my-2">
                            {error}
                        </p>
                    )
                })}
                <p className="text-sm my-2">
                    We'll call or text you to confirm your number. Standard message and data rates apply. 
                    <Link href="/" className="font-semibold underline px-1">Privacy Policy</Link>
                </p>
                <Button className="w-full rounded-sm bg-airbnb hover:bg-airbnbDark text-white hover:text-white my-3">
                    Continue
                </Button>
                <p className="text-sm text-darkText">
                    Already have an account?
                    <Button onClick={() => {signUpModel.close(); loginModel.open()}} className="font-semibold underline px-1 hover:bg-white text-darkText">
                        Try Login
                    </Button>
                </p>
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