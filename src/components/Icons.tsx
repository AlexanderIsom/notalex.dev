import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

type IconProps = ComponentProps<"svg">;

const Icon = (props: IconProps) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class={cn("size-4", props.class)}
			{...rest}
		/>
	);
};

export function IconSun(props: IconProps) {
	return (
		<Icon {...props}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
		</Icon>
	);
}
export function IconMoon(props: IconProps) {
	return (
		<Icon {...props}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
		</Icon>
	);
}

export function IconLaptop(props: IconProps) {
	return (
		<Icon {...props}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 19l18 0" />
			<path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
		</Icon>
	);
}
