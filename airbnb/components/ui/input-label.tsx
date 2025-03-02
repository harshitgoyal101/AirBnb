import { Button } from "./button";
import { FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils"
import './input-label.css'

interface InputwithLabelProps {
    className?: string,
    label?: string,
    width?: string,
    placeholder?: string,
    isButton?: boolean,
    onClick?: () => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void
}

export const InputwithLabel = ({
    className,
    label = "",
    width = "125px",
    placeholder = "",
    isButton = false,
    onMouseEnter=()=>{},
    onClick=()=>{},
    onMouseLeave=()=>{}
}: InputwithLabelProps) => {
    return (
        <Button className={cn('flex justify-between m-0 p-3 h-14', className)} style={{width: width}} 
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <div className="text-left">
                <p className="text-darkText text-xs px-4">{label}</p>
                <p className="text-lightText text-xs px-4">{placeholder}</p>
            </div>

            {   isButton?<div className="search_btn">
                    <FaSearch/>
                </div>:""
            }
        </Button>
    );
}