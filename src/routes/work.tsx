import { OverlayScrollbarsComponent } from "overlayscrollbars-solid";
import { Separator } from "~/components/ui/separator";

export default function Work() {
	return (
		<section>
			<h1 class="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
			<Separator class="my-6" />
			<div class="prose prose-neutral dark:prose-invert">
				<h2 class="font-medium text-xl mb-1 tracking-tighter">
					Indie game studio
				</h2>
				<p class="text-neutral-600 dark:text-neutral-400 text-sm">
					Software Engineer, 2021 - Present
				</p>

				<p>
					I joined the studio shortly after graduation as their first employee,
					since i've worked on several projects across mobile, pc and console
					platforms. Working with large brands such as Shell, LucasArts and
					Tokyo Broadcasting Systems.
				</p>
				<ul class="list-disc">
					<li>
						I work on various parts of game development, from implmenting user
						facing features such as inventory systems to working with redis,
						python and lua to create a matchmaking system. And using api and sql
						queries to develop leaderboards
					</li>
					<li>
						I help build internal tooling to aid development and streamline
						workflows, such as a realtime CI pipelines to sync the users
						filesystem with a cloud based development engine
					</li>
				</ul>
				<h2 class="font-medium text-xl mb-1 tracking-tighter">
					University graduate
				</h2>
				<p class="text-neutral-600 dark:text-neutral-400 text-sm">
					class of 2020, BSc (Hons) Games Software Engineering
				</p>
			</div>
		</section>
	);
}
