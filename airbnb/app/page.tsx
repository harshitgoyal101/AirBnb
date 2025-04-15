"use client"

import { Categories } from "@/components/Categories";
import { Properties } from "@/components/Properties/Properties";
import { useState } from "react";

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

	return (
		<main className="flex flex-col w-full">
			<Categories onCategorySelect={setSelectedCategory} />
			<Properties category={selectedCategory} />
		</main>
	);
}
