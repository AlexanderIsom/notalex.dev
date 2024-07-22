import { useColorMode } from "@kobalte/core";
import { createOverlayScrollbars } from "overlayscrollbars-solid";
import { onMount } from "solid-js";

export default function Scrollbars() {
	const { colorMode } = useColorMode();

	const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] =
		createOverlayScrollbars({
			defer: true,
			options: {
				scrollbars: {
					theme: colorMode() === "light" ? "os-theme-dark" : "os-theme-light",
				},
			},
		});

	onMount(() => {
		initBodyOverlayScrollbars(document.body);
	});

	return <></>;
}
