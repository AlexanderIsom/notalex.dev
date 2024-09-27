// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en" data-overlayscrollbars-initialize>
				<head>
					<script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.UMAMI_ID}></script>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body data-overlayscrollbars-initialize>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
