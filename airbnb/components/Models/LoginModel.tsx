'use client'

import { Model } from '@/components/ui/Model'
import React, { useState } from 'react';
import useLoginModel from '@/app/hooks/useLoginModel';
import useSignUpModel from '@/app/hooks/useSignUpModel';
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { apiService } from "@/app/services/apiService";
import { useAuthDate } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { TailSpin } from 'react-loader-spinner'
import { Input } from '../ui/input';

export const LoginModel = () => {

    const loginModel = useLoginModel();
    const signUpModel = useSignUpModel();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { handleLogin } = useAuthDate();

    interface FormValues {
        email: string;
        password: string;
    }

    const initialValues = {
        email: '',
        password: '',
    };
    
    const [errors, setErrors] = useState<String[]>([]);
    
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(4, 'Password must be at least 4 characters')
            .required('Password is required'),
    });
    
    const handleSubmit = async (
        values : FormValues, 
        { resetForm } : any 
    ) => {
        setErrors([]);
        setLoading(true);
        const login = {
            email: values.email,
            password: values.password
        }
        const response = await apiService.post('/api/auth/login/', login);
        if(response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);
            resetForm();
            loginModel.close();
            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                console.log(error)
                return error
            });
            console.log(tmpErrors);
            setErrors(tmpErrors);
        }
        setLoading(false);
    };

    return (
        <Model 
            isOpen={loginModel.isOpen}
            close={loginModel.close}
            label="Login"
        >
            <h1 className='text-xl font-bold'>Welcome to Airbnb</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="mt-5">
                        <div>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="rounded-none rounded-t-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText w-full p-2"
                                as={Input}
                            />
                        </div>

                        <div>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="rounded-none rounded-b-md focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText w-full p-2"
                                as={Input}
                            />
                        </div>

                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />

                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />

                        {errors.map((error) => {
                            return <p className="text-sm my-2 text-red-500">
                                {error}
                            </p>
                        })}

                        <p className="text-sm my-2">
                            We'll call or text you to confirm your number. Standard message and data rates apply.
                            <Link href="/" className="font-semibold underline px-1">
                                Privacy Policy
                            </Link>
                        </p>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-sm bg-airbnb hover:bg-airbnbDark text-white hover:text-white my-3 p-2"
                        >
                            {!loading?
                                <p>Continue</p>:
                                <TailSpin
                                    visible={true}
                                    height="24"
                                    width="24"
                                    color="white"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass="flex justify-center"
                                />
                            }
                        </button> 
                        

                        <p className="text-sm my-2 text-darkText">
                            Don't have an account?
                            <button
                                type="button"
                                onClick={() => {
                                    loginModel.close();
                                    signUpModel.open();
                                }}
                                className="font-semibold underline px-1 hover:bg-white text-darkText"
                            >
                                Try Sign Up
                            </button>
                        </p>
                    </Form>
                )}
            </Formik>

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