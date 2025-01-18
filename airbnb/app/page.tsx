'use client'

import { useState } from 'react';
import { Categories } from "@/components/Categories";
import { Properties } from "@/components/Properties/Properties";

export default function Home() {

	const [withTax, setWithTax] = useState(true);

	return (
		<main className="flex flex-col w-full">
			<Categories withTax={withTax} setWithTax={setWithTax}/>
			<Properties withTax={withTax}/>
		</main>
	);
}
