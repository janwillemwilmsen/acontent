import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import login from './login.ts'
 
const app = new Hono();

app.get('/', (c) => {
	return c.text("Hellow Auth page")
})

app.route('/login', login )
 

export default app;