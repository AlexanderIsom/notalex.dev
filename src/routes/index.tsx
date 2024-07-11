import { Button, buttonVariants } from "~/components/ui/button";
import WesbiteCard from "~/components/WebsiteCard";

export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 gap-2 flex flex-col items-center justify-center">
			<title>NotAlex.Dev</title>
			<h1 class="max-6-xs text-6xl uppercase mt-8">Hello there!</h1>
			<img
				src="/images/alex.png"
				alt="Alex"
				class="rounded-full w-32 h-32 mx-auto mb-4"
			/>
			<p class="text-2xl">
				My name is Alexander im a Software Engineer working my way into the web
				development space!
			</p>
			<p class="text-xl">some apps i've made</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 columns-sm">
				<a href="https://timelineup.com/" target="_blank">
					<div class="flex flex-col md:flex-row w-full justify-center gap-4">
						<div class="border-2 border-gray-200 rounded-lg overflow-hidden bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md ">
							<div class="block ">
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
										TimeLineup is an event planning and management platforms.
										allowing easier planning of online based events from
										different timezones.
									</p>
									<p>made width: NextJs, Supabase, Tailwind </p>
									<Button variant={"outline"} class={`w-full`}>
										Visit Website
									</Button>
								</div>
							</div>
						</div>
					</div>
				</a>

				<a href="https://www.starfield-lock-solver.com/" target="_blank">
					<div class="flex flex-col md:flex-row w-full justify-center gap-4">
						<div class="border-2 border-gray-200 rounded-lg overflow-hidden bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md ">
							<div class="block">
								<img
									src="/images/starfield.png"
									alt="Link Preview"
									width={600}
									height={400}
									class="w-full h-48 object-cover"
								/>
								<div class="p-4">
									<h3 class="text-lg font-semibold mb-2">
										Starfield-lock-solver.com
									</h3>
									<p class="text-muted-foreground text-sm mb-4">
										A highly optimised algorithm matching site to solve a puzzle
										in the game Starfield.
									</p>
									<p>made width: NuxtJs </p>
									<Button class="w-full" variant={"outline"}>
										Visit Wesbite
									</Button>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</main>
	);
}
