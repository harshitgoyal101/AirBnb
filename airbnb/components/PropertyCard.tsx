import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaUsers } from 'react-icons/fa';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    description: string;
    price_per_night: number;
    bedrooms: number;
    bathrooms: number;
    guests: number;
    image: string;
    category?: {
      title: string;
    };
  };
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{property.title}</h3>
            <span className="font-bold">${property.price_per_night}/night</span>
          </div>
          
          {property.category && (
            <p className="text-sm text-gray-500 mb-2">{property.category.title}</p>
          )}
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{property.description}</p>
          
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <FaBed className="mr-1" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="mr-1" />
              <span>Up to {property.guests} guests</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}; 