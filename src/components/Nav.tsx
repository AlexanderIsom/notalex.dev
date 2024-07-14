import { useLocation } from "@solidjs/router";

export default function Nav() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<nav class=" top-0 sticky flex h-32 backdrop-filter backdrop-blur-lg">
			<ul class="container flex items-center p-3 justify-center">
				<div class="flex font-semibold">
					<li class={`border-b-2 ${active("/")} mx-1.5 `}>
						<a href="/">home</a>
					</li>
					{/* <li class={`border-b-2 ${active("/work")} mx-1.5 `}>
						<a href="/">work</a>
					</li>
					<li class={`border-b-2 ${active("/social")} mx-1.5 `}>
						<a href="/">social</a>
					</li>
					<li class={`border-b-2 ${active("/guestbook")} mx-1.5 `}>
						<a href="/">guestbook</a>
					</li> */}
				</div>
			</ul>
		</nav>
	);
}
