const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello, World. We are reloading!')
})

app.listen(3000, () => {
  console.log('Hooray, our app is listening on port 3000')
})
