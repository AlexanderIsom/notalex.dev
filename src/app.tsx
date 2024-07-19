import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import "@fontsource/inter";
import Nav from "./components/Nav";
import { getCookie } from "vinxi/http";
import {
	ColorModeProvider,
	ColorModeScript,
	cookieStorageManagerSSR,
} from "@kobalte/core";
import { isServer } from "solid-js/web";
import { inject } from "@vercel/analytics";

function getServerCookies() {
	"use server";
	const colorMode = getCookie("kb-color-mode");
	return colorMode ? `kb-color-mode-${colorMode}` : "";
}

export default function App() {
	const storageManager = cookieStorageManagerSSR(
		isServer ? getServerCookies() : document.cookie
	);

	if (!isServer) {
		inject();
	}
	return (
		<Router
			root={(props) => (
				<>
					<ColorModeScript storageType={storageManager.type} />
					<ColorModeProvider storageManager={storageManager}>
						<Nav />
						<main class="max-w-2xl mx-auto px-4">
							<Suspense>{props.children}</Suspense>
						</main>
					</ColorModeProvider>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
