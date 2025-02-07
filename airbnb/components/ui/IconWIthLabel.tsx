import Image from "next/image";

export const IconWithLabel = ({
    type,
    all_aminities = {},
}: {
    type: string;
    all_aminities?: Record<string, string>;
}) => {
    return all_aminities.hasOwnProperty(type) ? (
        all_aminities[type] ? (
            <div className="px-4">
                <div className="flex items-center py-1 w-full">
                    <Image
                        width={24}
                        height={24}
                        src={`/categories/${type}.jpg`}
                        alt={type}
                    />
                    <div>
                        <p className="text-md text-black font-semibold mx-3 mt-1">{type}</p>
                        <p className="text-md text-black mx-3">{all_aminities[type]}</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="px-4">
                <div className="flex items-center py-3 w-full">
                    <Image
                        width={24}
                        height={24}
                        src={`/categories/${type}.jpg`}
                        alt={type}
                    />
                    <p className="text-md text-black mx-3">{type}</p>
                </div>
            </div>
        )
    ) : (
        <div className="px-4">
            <div className="border flex flex-col items-center cursor-pointer py-3 space-y-2 border-b-2 border-white opacity-80 hover:opacity-100 hover:border-b-black">
                <Image
                    width={20}
                    height={20}
                    src={`/categories/${type}.jpg`}
                    alt={type}
                />
                <p className="text-xs">{type}</p>
            </div>
        </div>
    );
}