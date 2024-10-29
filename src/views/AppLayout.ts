import { html, raw } from 'hono/html'
import type { HtmlEscapedString } from 'hono/utils/html';
import { Hono } from "hono";


export default function AppLayout ({
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

		<nav class="navbar">
			<a href="/app">Dashboard</a>
			<a href="/app/profile">Profile</a>
			<a href="/auth/logout">Logout</a>
		</nav>
		${content}
	</body>
</html>`
}