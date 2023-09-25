const express = require('express')
const app = express()
const port = 3000

app.post('/receiving', (req, res) => {
  res.send('receiving')
})

app.post('/put-away', (req, res) => {
  res.send('put-away')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})