import express from 'express'
const app = express()

app.get('/', function (_req, res) {
  res.send('HelloWorld')
})

module.exports = {
  path: '/api/',
  handler: app,
}
