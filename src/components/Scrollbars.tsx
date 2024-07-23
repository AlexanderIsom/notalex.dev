import { useColorMode } from "@kobalte/core";
import { createOverlayScrollbars } from "overlayscrollbars-solid";
import { createEffect, onMount } from "solid-js";

export default function Scrollbars() {
	const { colorMode } = useColorMode();

	const [initialize, instance] = createOverlayScrollbars({
		defer: true,
		options: {
			scrollbars: {
				theme: colorMode() === "light" ? "os-theme-dark" : "os-theme-light",
			},
		},
	});

	onMount(() => {
		initialize(document.body);
	});

	createEffect(() => {
		const themeName =
			colorMode() === "light" ? "os-theme-dark" : "os-theme-light";
		instance()?.options({
			scrollbars: {
				theme: themeName,
			},
		});
	});

	return <></>;
}
