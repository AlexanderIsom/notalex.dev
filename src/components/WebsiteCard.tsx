import { Button } from "./ui/button";

interface Props {
	heading: string;
	description: string;
	image: string;
}

export default function WesbiteCard({ heading, description, image }: Props) {
	return (
		<div class="flex flex-col md:flex-row w-full justify-center gap-4">
			<div class="rounded-lg overflow-hidden bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md ">
				<div class="block ">
					<img
						src={image}
						alt="Link Preview"
						width={600}
						height={400}
						class="w-full h-48 object-cover"
					/>
					<div class="p-4">
						<h3 class="text-lg font-semibold mb-2">{heading}</h3>
						<p class="text-muted-foreground text-sm mb-4">{description}</p>
						<Button variant="outline" class="w-full">
							Visit Website
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
