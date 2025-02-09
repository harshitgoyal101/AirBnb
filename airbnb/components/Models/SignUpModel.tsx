'use client'

import React, { useState } from 'react';
import useLoginModel from '@/app/hooks/useLoginModel';
import useSignUpModel from '@/app/hooks/useSignUpModel';
import Link from "next/link";

import { Model } from '@/components/ui/Model'
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { apiService } from '@/app/services/apiService';
import { useRouter } from 'next/navigation';
import { TailSpin } from 'react-loader-spinner'
import { Input } from '../ui/input';
import { useAuth } from '@/context/AuthContext';


interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpModel = () => {

    const loginModel = useLoginModel();
    const signUpModel = useSignUpModel();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { handleLogin } = useAuth();

    const [errors, setErrors] = useState<String[]>([]);

    const initialValues: FormValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, "This password is too short. It must contain at least 8 characters.")
            .matches(/^(?!\d+$).*/, "This password is entirely numeric.") 
            .notOneOf(["password", "12345678", "qwerty", "letmein"], "This password is too common.")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Re-entering the password is required'),
    });

    const handleSubmit = async (
        values: FormValues,
        { resetForm }: any
    ) => {

        setErrors([]);
        setLoading(true);
        
        const signup = {
            "email": values.email,
            "password1": values.password,
            "password2": values.confirmPassword
        }
        console.log("signup",signup)

        const response = await apiService.post("/api/auth/register/", JSON.stringify(signup));
        if(response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);
            resetForm();
            signUpModel.close();
            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                console.log(error)
                return error
            });
            setErrors(tmpErrors);
        }
        setLoading(false);
    };        

    return (
        <Model 
            isOpen={signUpModel.isOpen}
            close={signUpModel.close}
            label="Sign up"
        >
            <h1 className='text-xl font-bold'>Welcome to Airbnb</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => ( <Form className="mt-5">
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
                                className="rounded-none focus-visible:ring-0 focus-visible:border-black focus-visible:border-2 border-lightText w-full p-2"
                                as={Input}
                            />
                        </div>

                        <div>
                            <Field
                                name="confirmPassword"
                                type="password"
                                placeholder="Re-enter Password"
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

                        <ErrorMessage
                            name="confirmPassword"
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
                            Already have an account?
                            <button
                            type="button"
                            onClick={() => {
                                signUpModel.close();
                                loginModel.open();
                            }}
                            className="font-semibold underline px-1 hover:bg-white text-darkText"
                            >
                            Try Login
                            </button>
                        </p>
                    </Form>)}
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