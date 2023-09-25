const express = require('express')
const app = express()
const port = 3001
app.post('/loading', (req, res) => {
  res.send('loading')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})