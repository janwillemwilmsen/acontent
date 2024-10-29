import { serve } from '@hono/node-server'
import { Hono } from 'hono'
 
import auth from './routes/auth/index.ts'
import _app from './routes/app/index.ts'
import landing from './routes/index.ts'

const app = new Hono()

 
app.route('/', landing)
app.route('/auth', auth)
app.route('/app', _app)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
