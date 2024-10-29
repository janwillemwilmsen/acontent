import { html  } from "hono/html";
import Title from "../components/Title.ts";

export default function Landing() {
	return html `
	<div class="container">
 				${Title ({title : "Landing", primary :false})}

		<p>This is a demo from ...</p>


		<a href="/auth/login">Login</a>
	</div>

	`
}