const express = require('express')

const app = express()

app.use(express.json())

app.use(require('./routes'))

app.listen(3000, () => {
  console.log('Servidor esta online.')
})