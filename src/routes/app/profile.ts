import { serve } from '@hono/node-server'
import { Hono } from 'hono'


 
const app = new Hono();

app.get('/', (c) => {
	return c.text("Hellow Profile page")
})

app.post('/', (c) => {
	return c.text('Thanks')
})
 

export default app;