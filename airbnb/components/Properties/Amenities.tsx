'use client'
import { useEffect, useState } from "react";
import { Button } from "../ui/button"
import { IconWithLabel } from "../ui/IconWIthLabel"
import { Separator } from "../ui/separator"
import { apiService } from "@/app/services/apiService";


export const Amenities = ({all_aminities} : {all_aminities:Record<string, string>}) => {

    const [amenities, setAmenities] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAmenities = async () => {
            try {
                const response = await apiService.get("/api/aminities/");
                setAmenities(response?.data);
            } catch (error) {
                console.error("Error fetching amenities:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAmenities();
    }, []);

    return (
        <div>
            <div className="py-4">
                <div className="text-md">Shared room</div>
                <div className="text-md">Shared common spaces</div>
                <div className="text-md">Shared Bathroom</div>
                <div className="text-md">Dive right in</div>
            </div>

            <Separator />

            <div className="py-8 text-mediumText text-md">
                A bed in a petite mixed dorm with AC, a private locker, and a shared washroom outside.
                Explore the susegad lifestyle of Goa at our vibrant and colourful Zostel Goa (Morjim).
                Choose from snug dorms to private and luxurious suites for a rejuvenating stay at our
                hostel. Meanwhile, our sprightly and spacious common areas feature a range of games
                that would serve as a perfect icebreaker for social interactions with fellow travellers...
                <div className="my-2 font-semibold underline text-darkText">Show more</div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 lg:grid-cols-2 text-mediumText py-8">
                <div className="text-2xl font-semibold text-darkText lg:col-span-2 mb-2">
                    What this place offers?
                </div>
                {loading ? (
                    <p className="text-gray-500">Loading amenities...</p>
                ) : (
                    amenities?.map((amenity, index) => (
                        <IconWithLabel key={index} type={amenity} all_aminities={all_aminities}/>
                    ))
                )}
            </div>

            <div className="py-2 mb-4 m-1 text-lg">
                <Button className="text-darkText outline-gray-800 outline-1 font-semibold rounded-lg" size={"lg"} variant={"outline"}>
                    Show all {amenities.length} amenities
                </Button>
            </div>
        </div>
    );
};

