import { buttonVariants } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

function Badge(props: any) {
	return (
		<a
			{...props}
			target="_blank"
			class="not-prose inline-flex align-middle items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
		/>
	);
}

export default function Home() {
	return (
		<section class="prose prose-neutral dark:prose-invert">
			<title>NotAlex.Dev</title>
			<div class="w-full flex flex-col items-center justify-center ">
				<img
					src="/images/alexOutlined.png"
					alt="Alex"
					class="rounded-full max-w-32 max-h-32 object-cover "
				/>
				<h1 class=" tracking-tighter text-2xl font-semibold">
					Hello there! 👋
				</h1>
			</div>
			<h2 class="text-xl">
				I'm Alexander a Software Engineer passionate about the web development
				space!
			</h2>
			<p>some apps i've made</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 columns-sm">
				<Card class="not-prose transition-all hover:scale-[1.02] h-fit">
					<CardHeader>
						<a href="https://timelineup.com/" target="_blank">
							<img
								src="/images/timelineup.png"
								alt="Timelineup"
								width={600}
								height={400}
								class="w-full object-contain rounded-md mb-3"
							/>
							<CardTitle>TimeLineup.com</CardTitle>
						</a>
						<CardDescription>
							TimeLineup is an event planning and management platforms. allowing
							easier planning of online based events from different timezones.
						</CardDescription>
					</CardHeader>
					<CardContent>
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

						<a
							href="https://timelineup.com/"
							target="_blank"
							class={`${buttonVariants({ variant: "outline" })} w-full mt-4`}
						>
							Visit Website
						</a>
					</CardContent>
				</Card>

				<Card class="not-prose transition-all hover:scale-[1.02] h-fit">
					<CardHeader>
						<a href="https://www.starfield-lock-solver.com/" target="_blank">
							<img
								src="/images/starfield.png"
								alt="starfield lock solver"
								width={600}
								height={400}
								class="w-full object-contain rounded-md mb-3"
							/>
						</a>
						<CardTitle>Starfield-lock-solver.com</CardTitle>
						<CardDescription>
							A highly optimised algorithm solving app to create solutions a
							puzzle in the game Starfield.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p class="pb-2 ">
							{"made with "}
							<Badge href="https://nuxt.com/">
								<img
									alt="Nuxt.js logomark"
									src="/brands/nuxt.svg"
									class="!mr-1 "
									width="14"
								/>
								Nuxt.js
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
							href="https://www.starfield-lock-solver.com/"
							target="_blank"
							class={`${buttonVariants({ variant: "outline" })} w-full`}
						>
							Visit Website
						</a>
					</CardContent>
				</Card>
			</div>
			<p>
				I'm currently working in the games industry and have a desire to move
				into web development, I'm currently learning new things and building
				projects to improve my skills.
			</p>
		</section>
	);
}
