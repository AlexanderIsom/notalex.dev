import { cn } from "~/lib/utils";
import DarkModeToggle from "./DarkModeToggle";
import { GithubIcon } from "./Icons";
import MailFormDialog from "./MailForm";
import { buttonVariants } from "./ui/button";

export default function Nav() {
	return (
		<nav class="top-0 sticky flex h-32 backdrop-filter backdrop-blur-lg">
			<ul class="container flex items-center p-3 justify-center ">
				<div class="flex font-semibold items-center gap-4">
					<a href="/" class="group transition duration-300">
						home
						<span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-black dark:bg-white " />
					</a>
					<a href="/work" class="group transition duration-300">
						work
						<span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-black dark:bg-white " />
					</a>
					<MailFormDialog />
					<span class="flex gap-2">
						<a
							href="https://github.com/AlexanderIsom"
							target="_blank"
							class={`${buttonVariants({
								variant: "ghost",
								size: "icon",
							})} size-9`}
						>
							<img
								alt="Github logomark"
								src="/brands/github.svg"
								width="25"
								height="25"
								class="dark:invert"
							/>
						</a>
						<a
							href="https://x.com/notalexdotdev"
							target="_blank"
							class={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"size-9"
							)}
						>
							<img
								alt="X logomark"
								src="/brands/x.svg"
								width="25"
								height="25"
								class="dark:invert"
							/>
						</a>
						<DarkModeToggle />
					</span>
				</div>
			</ul>
		</nav>
	);
}
