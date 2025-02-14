"use client";
import { Button } from "./button";
import { IoMdClose } from "react-icons/io";
import React, { useCallback, useEffect } from "react";
import { Card } from "./Card";

interface ModelProps {
    label ?: string,
    children: React.ReactNode,
    isOpen: boolean,
    size ?: string,
    close: () => void
}

export const Model: React.FC<ModelProps> = ({
    label,
    children,
    isOpen,
    size,
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

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className={`relative my-6 h-auto text-darkText ${size ?"w-fit max-h-[640px]" : "w-[90%] md:w-[80%] lg:w-[500px]"}`}>
                <Card className={`bg-white translate duration-500  ${showModel ? 'translate-y-0 opacity-100': 'translate-y-full opacity-10'} 
                ${size ? "overflow-y-auto scrollbar-none max-h-[640px]" : ""} px-0`}>
                    
                {label ? 
                    <header className="flex items-center px-6 py-4 rounded-t justify-center relative border-b">
                        <Button onClick={handleClose} size="icon" className="p-3 absolute left-3 text-darkText">
                            <IoMdClose/>
                        </Button>
                        <p className="font-bold">{label}</p>
                    </header>
                    :
                    <Button onClick={handleClose} size="icon" className="p-3 my-4 absolute left-3 text-darkText">
                            <IoMdClose/>
                    </Button>
                }
                    <section className="p-6">
                        {children}
                    </section>
                </Card>
            </div>
        </div>
    )
}