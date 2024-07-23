import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
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
import { Toaster } from "./components/ui/toast";

import "overlayscrollbars/overlayscrollbars.css";
import { createOverlayScrollbars } from "overlayscrollbars-solid";
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

	// const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] =
	// 	createOverlayScrollbars({
	// 		defer: true,
	// 		options: {
	// 			scrollbars: {
	// 				theme: "os-theme-light",
	// 			},
	// 		},
	// 	});

	// onMount(() => {
	// 	initBodyOverlayScrollbars(document.body);
	// });

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
