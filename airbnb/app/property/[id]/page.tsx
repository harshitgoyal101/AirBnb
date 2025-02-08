import { Separator } from "@/components/ui/separator"
import { PropertyInfo } from "@/components/Properties/PropertyInfo";
import { RatingsSection } from "@/components/Properties/RatingsSection";
import { ReviewSection } from "@/components/Properties/ReviewSection";
import { HostDetails } from "@/components/Properties/HostDetails";

export default function PropertyDetailPage() {
    return (
        <div>
            <PropertyInfo/>
            <div className="w-full mx-auto min-w-[xl] px-10 lg:px-20 xl:px-36 p-3">
                <RatingsSection/>
                <Separator/>
                <ReviewSection/>
                <Separator/>
                <HostDetails/>
            </div>
        </div>
    );
}
