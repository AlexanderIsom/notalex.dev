import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
	return (
		<nav class=" top-0 sticky flex h-32 backdrop-filter backdrop-blur-lg">
			<ul class="container flex items-center p-3 justify-center ">
				<div class="flex font-semibold items-center gap-4">
					<a href="/">home</a>
					<a href="mailto:alexanderdisom@gmail.com" target="_blank">
						contact
					</a>

					<DarkModeToggle />
				</div>
			</ul>
		</nav>
	);
}
