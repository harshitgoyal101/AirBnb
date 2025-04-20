'use client'
import { Button } from "../ui/button"
import Image from "next/image"
import PhotoCard from "./PhotoCard"

interface Photo {
    id: number;
    file: File | null;
    url: string | null;
}

interface AddPhotosProps {
    photos: Photo[];
    onPhotoChange: (id: number, file: File | null) => void;
}

export const AddPhotos = ({ photos, onPhotoChange }: AddPhotosProps) => {
    const photosUploaded = photos.filter(photo => photo.file !== null).length;

    return (
        <div className="px-6 md:px-14 lg:px-32 xl:mx-56 mt-10">
            <div className="mx-6 lg:mx-40 flex-row justify-between md:text-center">
                <p className='font-semibold text-3xl'>Choose 5 photos</p>
                <p className="text-lightText text-lg">
                    {photosUploaded > 0 
                        ? `${photosUploaded} photo${photosUploaded !== 1 ? 's' : ''} uploaded` 
                        : 'Drag to reorder'}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 my-4 mx-6 lg:mx-14">
                {photos.map((photo, index) => (
                    <PhotoCard 
                        key={photo.id}
                        className={index === 0 ? "md:col-span-2" : ""}
                        onPhotoChange={(file) => onPhotoChange(photo.id, file)}
                        photoUrl={photo.url}
                    />
                ))}
            </div>
        </div>
    )
}

