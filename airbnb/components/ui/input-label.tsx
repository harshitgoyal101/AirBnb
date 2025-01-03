import { Button } from "./button";
import { FaSearch } from "react-icons/fa";
import './input-label.css'

interface InputwithLabelProps {
    className?: string,
    label?: string,
    width?: string,
    placeholder?: string,
    isButton?: boolean,
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
    onMouseLeave=()=>{}
}: InputwithLabelProps) => {
    return (
        <Button className={`flex justify-between m-0 p-3 h-14 ${className}`} style={{width: width}} 
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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