import { html } from "hono/html";

export default function Login() {
	return html `
	<div class="container">
	
	<h1>Login</h1>

		...FORM..


		<button>login</button>

	</div>
	`

}