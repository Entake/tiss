// Libraries
import Koa from 'koa'
import Route from 'koa-route'
import Logger from 'koa-logger'
import Cors from 'kcors'

// Setup app
const app = new Koa()
const PORT = 8080

// Setup middlewares
app.use(Logger())
app.use(Cors())

// Test request
app.use(Route.get('/', ctx => {
  ctx.body = 'I\'m mr. Meeseeks!'
}))

// Start server
app.listen(PORT, () => {
  console.log('🌍  acuity-backend is listening at http://localhost:8080')
})
