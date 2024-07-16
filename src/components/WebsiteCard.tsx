import { buttonVariants } from "./ui/button";

function Badge(props: any) {
	return (
		<a
			{...props}
			target="_blank"
			class="inline-flex align-middle items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
		/>
	);
}

export default function WesbiteCard() {
	return (
		<div class="flex flex-col md:flex-row w-full justify-center gap-4">
			<div class="border-2  rounded-lg overflow-hidden bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md ">
				<div class="block">
					<img
						src="/images/timelineup.png"
						alt="Link Preview"
						width={600}
						height={400}
						class="w-full h-48 object-cover"
					/>
					<div class="p-4">
						<h3 class="text-lg font-semibold mb-2">TimeLineup.com</h3>
						<p class="text-muted-foreground text-sm mb-4">
							TimeLineup is an event planning and management platforms. allowing
							easier planning of online based events from different timezones.
						</p>
						<p class="pb-2 ">
							{"made with "}
							<Badge href="https://nextjs.org/">
								<img
									alt="Next.js logomark"
									src="/brands/nextjs.svg"
									class="!mr-1"
									width="14"
									height="14"
								/>
								Next.js
							</Badge>
							{", "}
							<Badge href="https://supabase.com/">
								<img
									alt="Supabase logomark"
									src="/brands/supabase.svg"
									class="!mr-1"
									width="14"
									height="14"
								/>
								Supabase
							</Badge>
							{", "}
							<Badge href="https://orm.drizzle.team/" class="flex align-top">
								<img
									alt="Drizzle orm logomark"
									src="/brands/drizzle.svg"
									class="!mr-1"
									width="16"
									height="14"
								/>
								Drizzle orm
							</Badge>
							{", "}
							<Badge href="https://tailwindcss.com/">
								<img
									alt="Tailwind logomark"
									src="/brands/tailwind.svg"
									class="!mr-1"
									width="14"
									height="14"
								/>
								Tailwind
							</Badge>
							{" and hosted on "}
							<Badge href="https://vercel.com/">
								<img
									alt="Vercel logomark"
									src="/brands/vercel-dark.svg"
									class="!mr-1"
									width="14"
									height="14"
								/>
								Vercel
							</Badge>
						</p>
						<a
							href="https://timelineup.com/"
							target="_blank"
							class={`${buttonVariants({ variant: "outline" })} w-full`}
						>
							Visit Website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
