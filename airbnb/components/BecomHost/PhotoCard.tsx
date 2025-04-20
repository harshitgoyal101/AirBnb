'use client'
import { Button } from "../ui/button"
import Image from "next/image"
import { useRef, useState } from "react"

interface PhotoCardProps {
    className?: string;
    onPhotoChange?: (file: File | null) => void;
    photoUrl?: string | null;
}

const PhotoCard = ({ className, onPhotoChange, photoUrl }: PhotoCardProps) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(photoUrl || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
                if (onPhotoChange) {
                    onPhotoChange(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleRemovePhoto = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewUrl(null);
        if (onPhotoChange) {
            onPhotoChange(null);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div 
            className={`${className} m-2 flex flex-col justify-center items-center h-72 rounded-xl border-dotted border-black border-2 relative ${previewUrl ? 'border-solid' : ''}`}
            onClick={handleButtonClick}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />
            
            {previewUrl ? (
                <>
                    <Image 
                        src={previewUrl}
                        alt="Uploaded photo"
                        fill
                        className="object-cover rounded-xl"
                    />
                    <Button 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white hover:bg-gray-100 z-10"
                        onClick={handleRemovePhoto}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </Button>
                </>
            ) : (
                <div className="text-xl font-semibold flex flex-col justify-center items-center text-lightText">
                    <Image 
                        width={56} 
                        height={56} 
                        src="/PlaceSelect/AddPhotos.svg" 
                        alt="Add Photos"
                    />
                    <div className="mt-2">Add Photos</div>
                    <Button size="icon" className="bg-gray-100 mt-2 hover:bg-gray-200">
                        <Image 
                            width={18}
                            height={18}
                            src="/PlaceSelect/AddButton.svg"
                            alt="Add Button"
                        />
                    </Button>
                </div>
            )}
        </div> 
    )
}

export default PhotoCard
