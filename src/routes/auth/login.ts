import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import Layout from '../../views/Layout.ts';

import Login from '../../views/pages/Login.ts';
 
const app = new Hono();

app.get('/', (c) => {
	// return c.text("Hellow login  page")
	return c.html(Layout  ({title : "Login", content: Login()  }))
})

app.post('/', (c) => {
	return c.redirect('/app')
})

 

export default app;