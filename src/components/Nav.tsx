import { useLocation } from "@solidjs/router";
import { buttonVariants } from "./ui/button";
import { siX, siGithub } from "simple-icons";

export default function Nav() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<nav class="bg-sky-800">
			<ul class="container flex items-center p-3 text-gray-200 justify-between">
				<li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
					<a href="/">Home</a>
				</li>
				<div class="flex gap-2">
					<a
						href="https://x.com/notalexdotdev"
						target="_blank"
						class={`${buttonVariants({
							variant: "ghost",
							size: "icon",
						})} group`}
					>
						<svg
							viewBox="0 0 24 24"
							class="w-6 h-6 text-white group-hover:text-black"
							fill="currentColor"
						>
							<path d={siX.path} />
						</svg>
					</a>
					<a
						href="https://github.com/AlexanderIsom"
						target="_blank"
						class={`${buttonVariants({
							variant: "ghost",
							size: "icon",
						})} group`}
					>
						<svg
							viewBox="0 0 24 24"
							class="w-6 h-6 text-white group-hover:text-black"
							fill="currentColor"
						>
							<path d={siGithub.path} />
						</svg>
					</a>
				</div>
			</ul>
		</nav>
	);
}
