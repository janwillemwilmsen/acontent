import { serve } from '@hono/node-server'
import { Hono } from 'hono'


import profile  from './profile.ts'
import AppLayout from '../../views/AppLayout.ts';
import App from '../../views/pages/App.ts';
import Layout from '../../views/Layout.ts';


const app = new Hono();

app.get('/', (c) => {
	// return c.text("Hellow App page")
	// return c.html(Layout({title: 'App', content: App() }))
	return c.html(AppLayout({title : "App", content: App()}))

})

app.route('/profile', profile)


export default app;