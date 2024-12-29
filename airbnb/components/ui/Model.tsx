"use client";
import { Button } from "./button";
import { IoMdClose } from "react-icons/io";
import React, { useCallback, useEffect } from "react";

interface ModelProps {
    label: string,
    children: React.ReactNode,
    isOpen: boolean,
    close: () => void
}

export const Model: React.FC<ModelProps> = ({
    label,
    children,
    isOpen,
    close
}) => {
    const [showModel, setShowModel] = React.useState(isOpen);

    useEffect(()=>{
        setShowModel(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setShowModel(false);
        setTimeout(() => {close();}, 300);
    }, [close]);

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto text-darkText">
                <div className={`rounded-xl shadow-darkText bg-white translate duration-600 h-full ${showModel ? 'translate-y-0 opacity-100': 'transalate-y-full opacity-0'} px-0`}>
                    <header className="flex items-center px-6 py-4 rounded-t justify-center relative border-b">
                        <Button onClick={handleClose} size="icon" className="p-3 absolute left-3 text-darkText">
                            <IoMdClose/>
                        </Button>
                        <p className="font-bold">{label}</p>
                    </header>
                    <section className="p-6">
                        {children}
                    </section>
                </div>
            </div>
        </div>
    )
}