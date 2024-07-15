import DarkModeToggle from "./DarkModeToggle";

export default function Nav() {
	return (
		<nav class=" top-0 sticky flex h-32 backdrop-filter backdrop-blur-lg">
			<ul class="container flex items-center p-3 justify-center ">
				<div class="flex font-semibold items-center gap-4">
					<a href="/">home</a>

					{/* <li class={`border-b-2 ${active("/work")} mx-1.5 `}>
						<a href="/">work</a>
					</li>
					<li class={`border-b-2 ${active("/social")} mx-1.5 `}>
						<a href="/">social</a>
					</li>
					<li class={`border-b-2 ${active("/guestbook")} mx-1.5 `}>
						<a href="/">guestbook</a>
					</li> */}
					<DarkModeToggle />
				</div>
			</ul>
		</nav>
	);
}
