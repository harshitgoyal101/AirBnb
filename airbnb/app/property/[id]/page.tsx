import React from "react";
import PropertyDetailPageClient from "@/components/Properties/PropertyDetailPageClient";
import { apiService } from "@/app/services/apiService";

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;

    // Fetch property data
    const property = await apiService.get(`/api/properties/${id}`).then(res => res.data).catch(() => null);

    // Fetch landlord data if property exists
    const landlord = property?.landlord
        ? await apiService.get(`/api/auth/${property.landlord}/`).then(res => res.data).catch(() => null)
        : null;

    return <PropertyDetailPageClient property={property} landlord={landlord} />;
}