import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import "@fontsource/inter";
import Nav from "./components/Nav";

export default function App() {
	return (
		<Router
			root={(props) => (
				<>
					<Nav />
					<main class="max-w-2xl mx-auto">
						<Suspense>{props.children}</Suspense>
					</main>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
