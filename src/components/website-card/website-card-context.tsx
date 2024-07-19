import {
	type Accessor,
	type Setter,
	createContext,
	useContext,
} from "solid-js";

export interface WebsiteCardContextValue {
	contentRef: Accessor<HTMLElement | undefined>;
	setContentRef: Setter<HTMLElement | undefined>;
}

export const WebsiteCardContext = createContext<WebsiteCardContextValue>();

export function useWebsiteCardContext() {
	const context = useContext(WebsiteCardContext);

	if (context === undefined) {
		throw new Error(
			" `useWebsiteCardContext` must be used within a `WebsiteCard` component"
		);
	}

	return context;
}
