import { Categories } from "@/components/Categories";
import { Properties } from "@/components/Properties";

export default function Home() {
	return (
		<main className="flex flex-col w-full">
			<Categories />
			<Properties />
		</main>
	);
}
