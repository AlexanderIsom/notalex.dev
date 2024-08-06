import "@fontsource/inter";
import {
	ColorModeProvider,
	ColorModeScript,
	cookieStorageManagerSSR,
} from "@kobalte/core";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { inject } from "@vercel/analytics";
import { Suspense } from "solid-js";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/http";
import "./app.css";
import Nav from "./components/Nav";
import { Toaster } from "./components/ui/toast";

import "overlayscrollbars/overlayscrollbars.css";
import Scrollbars from "./components/Scrollbars";

function getServerCookies() {
	"use server";
	const colorMode = getCookie("kb-color-mode");
	return colorMode ? `kb-color-mode-${colorMode}` : "";
}

export default function App() {
	const storageManager = cookieStorageManagerSSR(
		isServer ? getServerCookies() : document.cookie
	);

	inject({ mode: "auto" });

	return (
		<Router
			root={(props) => (
				<>
					<ColorModeScript storageType={storageManager.type} />
					<ColorModeProvider storageManager={storageManager}>
						<Scrollbars />
						<Nav />
						<main class="flex-auto flex flex-col px-4 max-w-2xl antialiased mx-auto">
							<Suspense>{props.children}</Suspense>
						</main>
						<Toaster />
					</ColorModeProvider>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
