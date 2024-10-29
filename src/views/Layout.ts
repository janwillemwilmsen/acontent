import { html, raw } from 'hono/html'
import type { HtmlEscapedString } from 'hono/utils/html';
import { Hono } from "hono";


export default function Layout ({
		title,
		 content
		}: {
		title: string; 
		content: HtmlEscapedString | Promise<HtmlEscapedString>
	}) {
return html `
<html>
	<head>
		<title>${title}</title>
		// htmx
		// alpine
		<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">

	</head>
	<body>
		${content}
	</body>
</html>`
}