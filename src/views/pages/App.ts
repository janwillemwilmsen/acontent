import { html } from "hono/html";
import Title  from "../components/Title.ts";


export default function App() {

	return html `
	<div>
	${Title ({title : "App", primary : true})}
	<p>Welcome in the app</p>
	</div>
	
	`
	}